<!--
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-12-01 21:19:13
 * @LastEditTime: 2022-12-05 11:08:47
 * @LastEditors: dingyuwen
 * @Description:
-->
<script lang="ts" setup>
import type { CSSProperties, ComputedRef, PropType } from 'vue'
import Overlay from './Overlay.vue'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  zIndex: {
    type: [Number, String],
    default: 2000,
  },
  duration: {
    type: [Number, String],
    default: 0.3,
  },
  lockScroll: {
    type: Boolean,
    default: false,
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true,
  },
  position: {
    type: String,
    default: 'center',
  },
  transition: {
    type: String,
    default: '',
  },
  style: {
    type: Object as PropType<CSSProperties>,
  },
  popClass: {
    type: String,
    default: '',
  },
  closeable: {
    type: Boolean,
    default: false,
  },
  closeIconPosition: {
    type: String,
    default: 'top-right',
  },
  closeIcon: {
    type: String,
    default: 'close',
  },
  destroyOnClose: {
    type: Boolean,
    default: true,
  },
  teleport: {
    type: [String, Element],
    default: 'body',
  },
  overlay: {
    type: Boolean,
    default: true,
  },
  round: {
    type: Boolean,
    default: false,
  },
  teleportDisable: {
    type: Boolean,
    default: false,
  },
  safeAreaInsetBottom: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['click-pop', 'click-close-icon', 'open', 'close', 'opend', 'closed', 'click-overlay', 'update:visible'])
const initIndex = 2000
let _zIndex = initIndex

const state = reactive({
  zIndex: props.zIndex,
  showSlot: true,
  closed: props.closeable,
})

const classes = computed(() => {
  return {
    popup: true,
    round: props.round,
    [`popup-${props.position}`]: true,
    [props.popClass]: true,
  }
})

const popStyle: ComputedRef = computed(() => {
  return {
    height: '30%',
    zIndex: state.zIndex,
    transitionDuration: `${props.duration}s`,
    ...props.style,
  }
})

const transitionName: ComputedRef = computed(() => {
  return props.transition ? props.transition : `popup-slide-${props.position}`
})

const open = () => {
  if (props.zIndex !== initIndex)
    _zIndex = Number(props.zIndex)

  emit('update:visible', true)
  state.zIndex = ++_zIndex
  if (props.destroyOnClose)
    state.showSlot = true

  emit('open')
}

const close = () => {
  // if (!props.visible) return; //避免重复调用
  emit('update:visible', false)
  emit('close')
  if (props.destroyOnClose) {
    setTimeout(() => {
      state.showSlot = false
    }, +props.duration * 1000)
  }
}

const onClick = (e: Event) => {
  emit('click-pop', e)
}

const onClickCloseIcon = (e: Event) => {
  e.stopPropagation()
  emit('click-close-icon', e)
  emit('update:visible', false)
  // close();
}

const onClickOverlay = (e: Event) => {
  if (props.closeOnClickOverlay) {
    emit('click-overlay', e)
    emit('update:visible', false)
    // close();
  }
}

const onOpened = (e: Event) => {
  emit('opend', e)
}

const onClosed = (e: Event) => {
  emit('closed', e)
}

watch(
  () => props.visible,
  () => {
    props.visible ? open() : close()
  },
)
watchEffect(() => {
  // props.visible ? open() : close();
  state.closed = props.closeable
})
</script>

<template>
  <Teleport :to="teleport" :disabled="!teleportDisable">
    <Overlay
      v-if="overlay"
      :visible="visible"
      :close-on-click-overlay="closeOnClickOverlay"
      :z-index="zIndex"
      :lock-scroll="lockScroll"
      :duration="duration"
      v-bind="$attrs"
      @click="onClickOverlay"
    />
    <Transition :name="transitionName" @after-enter="onOpened" @after-leave="onClosed">
      <div v-show="visible" :class="classes" :style="popStyle" @click="onClick">
        <slot v-if="state.showSlot" />
        <div
          v-if="state.closed"
          class="popup__close-icon"
          :class="`popup__close-icon--${closeIconPosition}`"
          @click="onClickCloseIcon"
        >
          <icon-mdi-close />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss">
.dark {
  .popup {
    background: $dark-background2;
    &__close-icon {
      color: $dark-color;
    }
  }
}

.popup-slide {
  &-center-enter-active,
  &-center-leave-active {
    transition-property: opacity;
    transition-timing-function: ease;
  }

  &-center-enter-from,
  &-center-leave-to {
    opacity: 0;
  }

  &-top-enter-from,
  &-top-leave-active {
    transform: translate(0, -100%);
  }

  &-right-enter-from,
  &-right-leave-active {
    transform: translate(100%, 0);
  }

  &-bottom-enter-from,
  &-bottom-leave-active {
    transform: translate(0, 100%);
  }

  &-left-enter-from,
  &-left-leave-active {
    transform: translate(-100%, 0);
  }
}

.popup-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &.round {
    border-radius: $popup-border-radius;
  }
}

.popup-bottom {
  bottom: 0;
  left: 0;
  width: 100%;
  &.round {
    border-radius: $popup-border-radius $popup-border-radius 0 0;
  }
  &--safebottom {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
}

.popup-right {
  top: 0;
  right: 0;

  &.round {
    border-radius: $popup-border-radius 0 0 $popup-border-radius;
  }
}

.popup-left {
  top: 0;
  left: 0;

  &.round {
    border-radius: 0 $popup-border-radius $popup-border-radius 0;
  }
}

.popup-top {
  top: 0;
  left: 0;
  width: 100%;

  &.round {
    border-radius: 0 0 $popup-border-radius $popup-border-radius;
  }
}

.popup {
  position: fixed;
  max-height: 100%;
  overflow-y: auto;
  background-color: $white;
  -webkit-overflow-scrolling: touch;
  &__close-icon {
    position: absolute !important;
    z-index: 1;
    color: #969799;
    font-size: 18px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;

    &:active {
      opacity: 0.7;
    }

    &--top-left {
      top: $popup-close-icon-margin;
      left: $popup-close-icon-margin;
    }

    &--top-right {
      top: $popup-close-icon-margin;
      right: $popup-close-icon-margin;
    }

    &--bottom-left {
      bottom: $popup-close-icon-margin;
      left: $popup-close-icon-margin;
    }

    &--bottom-right {
      right: $popup-close-icon-margin;
      bottom: $popup-close-icon-margin;
    }
  }
}
</style>
