<script setup lang="ts">
import { drawRect } from '../../../src'
const text1 = drawRect({
  x: 50,
  y: 20,
  width: 150,
  height: 80,
  borderRadialGradient: (ctx) => {
    const grd = ctx.createLinearGradient(0, 0, 0, 50)
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'blue')
    return grd
  },
})

const text2 = drawRect({
  x: 50,
  y: 20,
  width: 150,
  height: 80,
  isFill: true,
  fillRadialGradient: (ctx) => {
    const grd = ctx.createLinearGradient(0, 0, 0, 50)
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'blue')
    return grd
  },
})

const text3 = drawRect({
  x: 50,
  y: 20,
  width: 150,
  height: 80,
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
