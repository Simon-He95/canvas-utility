<script setup lang="ts">
import { drawText } from '../../../src'
const text1 = drawText({
  text: 'hello world',
  color: 'red',
  font: 'bold 48px serif',
  isFill: true,
  radialGradient: (ctx) => {
    const grd = ctx.createLinearGradient(0, 0, 0, 50)
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'blue')
    return grd
  },
})

const text2 = drawText({
  text: 'hello world',
  color: 'red',
  font: 'bold 48px serif',
  radialGradient: (ctx) => {
    const grd = ctx.createLinearGradient(0, 0, 0, 50)
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'blue')
    return grd
  },
})

const text3 = drawText({
  text: 'hello world',
  color: 'red',
  font: '28px serif',
})
const text4 = drawText({
  text: 'hello world',
  color: 'green',
  isFill: true,
  font: '28px serif',
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
