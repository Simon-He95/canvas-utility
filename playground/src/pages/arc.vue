<script setup lang="ts">
import { drawArc } from '../../../src'
const text1 = drawArc({
  x: 100,
  y: 75,
  radius: 50,
  startAngle: 0,
  endAngle: 1 * Math.PI,
  lineWidth: 2,
  // isFill:true,
  isClosed: true,
  borderRadialGradient: (ctx) => {
    const grd = ctx.createLinearGradient(0, 0, 0, 50)
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'blue')
    return grd
  },
})

const text2 = drawArc({
  x: 100,
  y: 75,
  radius: 50,
  startAngle: 0,
  endAngle: 1 * Math.PI,
  lineWidth: 2,
  isFill: true,
  isClosed: true,
  fillRadialGradient: (ctx) => {
    const grd = ctx.createLinearGradient(0, 0, 0, 200)
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'blue')
    return grd
  },
})
const text3 = drawArc({
  x: 100,
  y: 75,
  radius: 50,
  startAngle: 0,
  endAngle: 2 * Math.PI,
  lineWidth: 2,
  isFill: true,
  isClosed: true,
  fillRadialGradient: (ctx) => {
    const grd = ctx.createLinearGradient(0, 0, 0, 200)
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'blue')
    return grd
  },
})

const text4 = drawArc({
  x: 100,
  y: 75,
  radius: 50,
  startAngle: 0,
  endAngle: 2 * Math.PI,
  lineWidth: 2,
  isClosed: true,
  borderRadialGradient: (ctx) => {
    const grd = ctx.createLinearGradient(0, 0, 0, 200)
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
