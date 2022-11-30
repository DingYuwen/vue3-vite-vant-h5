<!--
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-11-29 17:44:33
 * @LastEditTime: 2022-11-30 11:32:15
 * @LastEditors: dingyuwen
 * @Description:
-->

<script lang="ts">
import { defineComponent } from 'vue'
import type { CascaderOption } from 'naive-ui'

function getOptions(depth = 3, iterator = 1, prefix = '') {
  const length = 12
  const options: CascaderOption[] = []
  for (let i = 1; i <= length; ++i) {
    if (iterator === 1) {
      options.push({
        value: `v-${i}`,
        label: `l-${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, `${String(i)}`),
      })
    } else if (iterator === depth) {
      options.push({
        value: `v-${prefix}-${i}`,
        label: `l-${prefix}-${i}`,
        disabled: i % 5 === 0,
      })
    } else {
      options.push({
        value: `v-${prefix}-${i}`,
        label: `l-${prefix}-${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, `${prefix}-${i}`),
      })
    }
  }
  return options
}

export default defineComponent({
  setup() {
    return {
      showPath: ref(false),
      filterable: ref(true),
      value: ref(null),
      options: getOptions(),
      handleUpdateValue(value: string, option: CascaderOption) {
        console.log(value, option)
      },
    }
  },
})
</script>

<template>
  <div class="h-full w-lg">
    <n-cascader
      v-model:value="value"
      placeholder="没啥用的值"
      :options="options"
      check-strategy="parent"
      :show-path="showPath"
      :filterable="filterable"
      @update:value="handleUpdateValue"
    />
  </div>
</template>
