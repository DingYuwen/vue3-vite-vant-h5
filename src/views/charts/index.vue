<script setup lang="ts">
const barOption = {
  title: {},
  tooltip: {},
  xAxis: {
    data: ['1月', '2月', '3月', '4月', '5月', '6月'],
  },
  yAxis: {},
  series: [
    {
      name: 'sales',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
}

const lineOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
}

const scoreOption = {
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%',
  },
  series: [
    {
      name: 'Pressure',
      type: 'gauge',
      detail: {
        formatter: '{value}',
      },
      data: [
        {
          value: 50,
          name: 'SCORE',
        },
      ],
    },
  ],
}

const refBarOption = ref(barOption)
const refLineOption = ref(lineOption)
const refScoreOption = ref(scoreOption)

// back
// const onClickLeft = () => history.back()
</script>

<template>
  <div class="p-t-12">
    <div class="chart-bg b-rd m-4">
      <Chart :option="refBarOption" h-300px />
    </div>

    <div class="chart-bg b-rd m-4">
      <Chart :option="refLineOption" h-300px />
    </div>

    <div class="chart-bg b-rd m-4">
      <Chart :option="refScoreOption" h-300px />
    </div>
  </div>
</template>

<style lang="less" scoped></style>

