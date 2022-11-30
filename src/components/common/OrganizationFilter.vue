<!--
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-11-29 17:44:33
 * @LastEditTime: 2022-11-30 11:35:40
 * @LastEditors: dingyuwen
 * @Description:
-->

<script setup lang="ts">
const show = ref(false)
const fieldValue = ref('')
const cascaderValue = ref('')
// 选项列表，children 代表子选项，支持多级嵌套
const options = [
  {
    text: '浙江省',
    value: '330000',
    children: [{ text: '杭州市', value: '330100' }],
  },
  {
    text: '江苏省',
    value: '320000',
    children: [{ text: '南京市', value: '320100' }],
  },
]
// 全部选项选择完毕后，会触发 finish 事件
const onFinish = ({ selectedOptions }) => {
  show.value = false
  fieldValue.value = selectedOptions.map(option => option.text).join('/')
}
</script>

<template>
  <div class="text-4 lg:text-5 inline-flex">
    <icon-mdi-filter-variant @click="show = true" />
    <van-popup v-model:show="show" round position="bottom">
      <van-cascader
        v-model="cascaderValue"
        title="请选择所在地区"
        :options="options"
        @close="show = false"
        @finish="onFinish"
      />
    </van-popup>
  </div>
</template>

<style scoped></style>
