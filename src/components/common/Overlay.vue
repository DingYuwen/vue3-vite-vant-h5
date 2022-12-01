<!--
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-12-01 22:11:25
 * @LastEditTime: 2022-12-01 23:11:26
 * @LastEditors: dingyuwen
 * @Description:
-->
<script lang="ts">
import type { CSSProperties, ComputedRef, PropType } from 'vue'
import { computed, watchEffect } from 'vue'
import { useLockScroll } from '@/composables/useLockScroll'

export default defineComponent({
  name: 'Overlay',
  props: {
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
    overlayClass: {
      type: String,
      default: '',
    },
    overlayStyle: {
      type: Object as PropType<CSSProperties>,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['click', 'update:visible'],

  setup(props, { emit }) {
    const [lock, unlock] = useLockScroll(() => props.lockScroll)

    const classes = computed(() => {
      return {
        overlay: true,
        [props.overlayClass]: true,
      }
    })

    const style: ComputedRef = computed(() => {
      return {
        transitionDuration: `${props.duration}s`,
        zIndex: props.zIndex,
        ...props.overlayStyle,
      }
    })

    watchEffect(() => {
      props.visible ? lock() : unlock()
    })

    const onClick = (e: MouseEvent) => {
      if (props.closeOnClickOverlay) {
        emit('update:visible', false)
        emit('click', e)
      }
    }

    return { classes, style, onClick }
  },
})
</script>

<template>
  <Transition name="overlay-fade">
    <div v-show="visible" :class="classes" :style="style" @click.stop="onClick">
      <slot />
    </div>
  </Transition>
</template>

<style lang="scss">
  .overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition-property: opacity;
  transition-timing-function: ease;
}

.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $overlay-bg-color;
}

.overflow-hidden {
  overflow: hidden !important;
}
</style>
