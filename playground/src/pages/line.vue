<script setup lang="ts">
import { drawLine } from '../../../src'
const text1 = drawLine({
  points: [
    [10, 10],
    [50, 50],
    [20, 40],
  ],
  lineCap: 'round',
  lineWidth: 5,
  borderRadialGradient: (ctx) => {
    const grd = ctx.createLinearGradient(0, 0, 0, 50)
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'blue')
    return grd
  },
})

const text2 = drawLine({
  points: [
    [10, 10],
    [100, 100],
    [30, 40],
    [70, 80],
  ],
  lineCap: 'round',
  lineWidth: 1,
  borderRadialGradient: (ctx) => {
    const grd = ctx.createLinearGradient(0, 0, 0, 50)
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'blue')
    return grd
  },
})

const text3 = drawLine({
  points: [
    [0, 0],
    [100, 100],
    [200, 0],
  ],
  isFill: true,
  fillColor: 'yellow',
  lineCap: 'round',
  lineWidth: 1,
  isClosed: true,
  color: 'red',
})

const text4 = drawLine({
  points: [
    [0, 0],
    [100, 100],
    [200, 0],
  ],
  isFill: true,
  lineCap: 'round',
  lineWidth: 1,
  isClosed: true,
  fillRadialGradient(ctx) {
    const grd = ctx.createLinearGradient(0, 0, 0, 50)
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'blue')
    return grd
  },
})

onMounted(() => {
  const wrapper = document.getElementById('wrapper')!
  wrapper.appendChild(text1)
  wrapper.appendChild(text2)
  wrapper.appendChild(text3)
  wrapper.appendChild(text4)
})
</script>

<template>
  <div id="wrapper" />
</template>
