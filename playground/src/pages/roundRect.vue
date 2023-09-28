<script setup lang="ts">
import { drawRoundRect } from '../../../src'
const text1 = drawRoundRect({
  x: 50,
  y: 20,
  width: 150,
  height: 80,
  radii: 10,
  borderRadialGradient: (ctx) => {
    const grd = ctx.createLinearGradient(0, 0, 0, 50)
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'blue')
    return grd
  },
})

const text2 = drawRoundRect({
  x: 50,
  y: 20,
  width: 150,
  height: 80,
  isFill: true,
  radii: [10, 10],
  fillRadialGradient: (ctx) => {
    const grd = ctx.createLinearGradient(0, 0, 0, 50)
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'blue')
    return grd
  },
})

const text3 = drawRoundRect({
  x: 50,
  y: 20,
  width: 150,
  height: 80,
  radii: [10, 30, 50, 70],
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
