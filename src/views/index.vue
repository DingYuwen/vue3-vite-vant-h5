<!--
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-11-28 15:12:42
 * @LastEditTime: 2022-11-30 10:29:54
 * @LastEditors: dingyuwen
 * @Description:
-->
<script lang="ts" setup>
import type { Ref } from 'vue'
import { type ECOption, useEcharts } from '@/composables'
const lineOptions = ref<ECOption>({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  legend: {
    data: ['下载量', '注册数'],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      color: '#8e9dff',
      name: '下载量',
      type: 'line',
      smooth: true,
      stack: 'Total',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.25,
              color: '#8e9dff',
            },
            {
              offset: 1,
              color: '#fff',
            },
          ],
        },
      },
      emphasis: {
        focus: 'series',
      },
      data: [4623, 6145, 6268, 6411, 1890, 4251, 2978, 3880, 3606, 4311],
    },
    {
      color: '#26deca',
      name: '注册数',
      type: 'line',
      smooth: true,
      stack: 'Total',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.25,
              color: '#26deca',
            },
            {
              offset: 1,
              color: '#fff',
            },
          ],
        },
      },
      emphasis: {
        focus: 'series',
      },
      data: [2208, 2016, 2916, 4512, 8281, 2008, 1963, 2367, 2956, 678],
    },
  ],
}) as Ref<ECOption>

const { domRef: lineRef } = useEcharts(lineOptions)

const pieOptions = ref<ECOption>({
  tooltip: {
    trigger: 'item',
  },
  legend: {
    bottom: '1%',
    left: 'center',
    itemStyle: {
      borderWidth: 0,
    },
  },
  series: [
    {
      color: ['#5da8ff', '#8e9dff', '#fedc69', '#26deca'],
      name: '时间安排',
      type: 'pie',
      radius: ['45%', '75%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 1,
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '12',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 20, name: '学习' },
        { value: 10, name: '娱乐' },
        { value: 30, name: '工作' },
        { value: 40, name: '休息' },
      ],
    },
  ],
}) as Ref<ECOption>
const { domRef: pieRef } = useEcharts(pieOptions)
</script>

<template>
  <div class="w-screen p-t-12 relative">
    <van-cell-group title="Template for Vue3 Vant Mobile" inset>
      <van-cell title="📊 charts 演示" to="charts" is-link />
    </van-cell-group>

    <div m-4>
      <n-grid cols="2 l:4" :x-gap="12" :y-gap="12" responsive="screen">
        <n-grid-item>
          <div chart-bg b-rd p-2>
            <p class="text-[#aaa]">
              Overview
            </p>
            <h3 class="pt-6 text-6 lg:text-8 font-bold text-right">
              <count-to prefix="$" :start-value="0" :end-value="7754" />
            </h3>
          </div>
        </n-grid-item>
        <n-grid-item>
          <div chart-bg b-rd p-2>
            <p class="text-[#aaa]">
              Overview
            </p>
            <h3 class="pt-6 text-6 lg:text-8 font-bold text-right">
              <count-to prefix="$" :start-value="0" :end-value="7754" />
            </h3>
          </div>
        </n-grid-item>
        <n-grid-item>
          <div chart-bg b-rd p-2>
            <p class="text-[#aaa]">
              Earnings
            </p>
            <h3 class="pt-6 text-6 lg:text-8 font-bold text-right">
              <count-to prefix="$" :start-value="0" :end-value="1234" />
            </h3>
          </div>
        </n-grid-item>
        <n-grid-item>
          <div chart-bg b-rd p-2>
            <p class="text-[#aaa]">
              Earnings
            </p>
            <h3 class="pt-6 text-6 lg:text-8 font-bold text-right">
              <count-to prefix="$" :start-value="0" :end-value="1234" />
            </h3>
          </div>
        </n-grid-item>
      </n-grid>
    </div>

    <div m-4>
      <n-grid cols="1 l:2" :x-gap="12" :y-gap="12" responsive="screen">
        <n-grid-item>
          <div class="chart-bg b-rd w-full">
            <div ref="lineRef" class="w-full h-300px" />
          </div>
        </n-grid-item>
        <n-grid-item>
          <div class="chart-bg b-rd">
            <div ref="pieRef" class="w-full h-300px" />
          </div>
        </n-grid-item>
      </n-grid>
    </div>
  </div>
</template>
