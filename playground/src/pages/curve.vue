<script setup lang="ts">
import { drawCurve } from '../../../src'
const text1 = drawCurve({
  start: [50, 20],
  controlPoints: [
    [230, 30],
    [150, 80],
  ],
  end: [250, 100],
  borderRadialGradient: (ctx) => {
    const grd = ctx.createLinearGradient(0, 0, 0, 50)
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'blue')
    return grd
  },
})

const text2 = drawCurve({
  start: [50, 20],
  controlPoints: [
    [230, 30],
    [150, 80],
  ],
  end: [250, 100],
  isFill: true,
  fillRadialGradient: (ctx) => {
    const grd = ctx.createLinearGradient(0, 0, 0, 50)
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'blue')
    return grd
  },
})

const text3 = drawCurve({
  start: [50, 20],
  controlPoints: [
    [230, 30],
    [150, 80],
  ],
  end: [250, 100],
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
