<script setup lang="ts">
import { drawQuadCurve } from '../../../src'
const text1 = drawQuadCurve({
  startX: 50,
  startY: 20,
  x1: 230,
  y1: 30,
  x2: 150,
  y2: 80,
  borderRadialGradient: (ctx) => {
    const grd = ctx.createLinearGradient(0, 0, 0, 50)
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'blue')
    return grd
  },
})

const text2 = drawQuadCurve({
  startX: 50,
  startY: 20,
  x1: 230,
  y1: 30,
  x2: 150,
  y2: 80,
  isFill: true,
  fillRadialGradient: (ctx) => {
    const grd = ctx.createLinearGradient(0, 0, 0, 50)
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'blue')
    return grd
  },
})

const text3 = drawQuadCurve({
  startX: 50,
  startY: 20,
  x1: 230,
  y1: 30,
  x2: 150,
  y2: 80,
  color: 'red',
})

onMounted(() => {
  const wrapper = document.getElementById('wrapper')!
  wrapper.appendChild(text1)
  wrapper.appendChild(text2)
  wrapper.appendChild(text3)
  // wrapper.appendChild(text4)
})
</script>

<template>
  <div id="wrapper" />
</template>
