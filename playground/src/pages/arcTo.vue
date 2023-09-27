<script setup lang="ts">
import { drawArcTo } from '../../../src'
const text1 = drawArcTo({
  x0: 230,
  y0: 20,
  x1: 90,
  y1: 130,
  x2: 20,
  y2: 20,
  radius: 50,
  lineWidth: 2,
  // isFill:true,
  // isClosed:true,
  borderRadialGradient: (ctx) => {
    const grd = ctx.createLinearGradient(0, 0, 0, 50)
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'blue')
    return grd
  },
})

const text2 = drawArcTo({
  x0: 230,
  y0: 20,
  x1: 90,
  y1: 10,
  x2: 50,
  y2: 80,
  radius: 40,
  lineWidth: 2,
  isFill: true,
  isClosed: true,
  fillRadialGradient: (ctx) => {
    const grd = ctx.createLinearGradient(0, 0, 0, 50)
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'blue')
    return grd
  },
})

const text3 = drawArcTo({
  x0: 230,
  y0: 20,
  x1: 90,
  y1: 10,
  x2: 200,
  y2: 200,
  radius: 40,
  color: 'green',
  lineWidth: 2,
  isFill: true,
  isClosed: true,
  fillRadialGradient: (ctx) => {
    const grd = ctx.createLinearGradient(0, 0, 0, 50)
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'blue')
    return grd
  },
})

const text4 = drawArcTo({
  x0: 230,
  y0: 20,
  x1: 90,
  y1: 10,
  x2: 200,
  y2: 200,
  radius: 40,
  color: 'green',
  lineWidth: 2,
  isClosed: true,
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
