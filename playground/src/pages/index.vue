<script setup lang="ts">
import { drawArc, drawLine } from '../../../src'
import type { DrawArc } from '../../../src'
const canvas = document.createElement('canvas')
canvas.width = 1000
canvas.height = 500
const ctx = canvas.getContext('2d')!

const createU = () => {
  drawLine({
    points: [
      [90, 180],
      [90, 100],
    ],
    color: 'red',
    canvas,
    ctx,
  })
  drawLine({
    points: [
      [110, 180],
      [110, 100],
    ],
    color: 'red',
    canvas,
    ctx,
  })
  drawLine({
    points: [
      [140, 180],
      [140, 100],
    ],
    color: 'red',
    canvas,
    ctx,
  })
  drawLine({
    points: [
      [160, 180],
      [160, 100],
    ],
    color: 'red',
    canvas,
    ctx,
  })
  drawArc({
    x: 100,
    y: 100,
    radius: 10,
    startAngle: 0,
    endAngle: Math.PI,
    color: 'red',
    reverse: true,
    canvas,
    ctx,
  } as DrawArc)
  drawArc({
    x: 150,
    y: 100,
    radius: 10,
    startAngle: 0,
    endAngle: Math.PI,
    color: 'red',
    reverse: true,
    canvas,
    ctx,
  } as DrawArc)

  drawArc({
    x: 125,
    y: 180,
    radius: 15,
    startAngle: 0,
    endAngle: -Math.PI,
    color: 'yellow',
    canvas,
    ctx,
  } as DrawArc)

  drawArc({
    x: 125,
    y: 180,
    radius: 35,
    startAngle: 0,
    endAngle: -Math.PI,
    color: 'yellow',
    canvas,
    ctx,
  } as DrawArc)
}

const createT = () => {
  drawLine({
    points: [
      [240, 200],
      [240, 110],
    ],
    color: 'red',
    canvas,
    ctx,
  })
  drawLine({
    points: [
      [260, 200],
      [260, 110],
    ],
    color: 'red',
    canvas,
    ctx,
  })
  drawLine({
    points: [
      [210, 110],
      [240, 110],
    ],
    color: 'red',
    canvas,
    ctx,
  })
  drawLine({
    points: [
      [210, 90],
      [290, 90],
    ],
    color: 'red',
    canvas,
    ctx,
  })
  drawLine({
    points: [
      [260, 110],
      [290, 110],
    ],
    color: 'red',
    canvas,
    ctx,
  })
  drawArc({
    x: 250,
    y: 200,
    radius: 10,
    startAngle: 0,
    endAngle: -Math.PI,
    color: 'yellow',
    canvas,
    ctx,
  } as DrawArc)
  drawArc({
    x: 210,
    y: 100,
    radius: 10,
    startAngle: Math.PI / 2,
    endAngle: Math.PI * 3 / 2,
    color: 'yellow',
    canvas,
    ctx,
  } as DrawArc)
  drawArc({
    x: 290,
    y: 100,
    radius: 10,
    startAngle: Math.PI / 2,
    endAngle: Math.PI * 3 / 2,
    color: 'yellow',
    reverse: true,
    canvas,
    ctx,
  } as DrawArc)
}

const createI = () => {
  drawLine({
    points: [
      [350, 200],
      [350, 120],
    ],
    color: 'red',
    canvas,
    ctx,
  })
  drawLine({
    points: [
      [370, 200],
      [370, 120],
    ],
    color: 'red',
    canvas,
    ctx,
  })
  drawArc({
    x: 360,
    y: 200,
    radius: 10,
    startAngle: 0,
    endAngle: -Math.PI,
    color: 'yellow',
    canvas,
    ctx,
  } as DrawArc)
  drawArc({
    x: 360,
    y: 120,
    radius: 10,
    startAngle: 0,
    endAngle: -Math.PI,
    color: 'yellow',
    reverse: true,
    canvas,
    ctx,
  } as DrawArc)
  drawArc({
    x: 360,
    y: 90,
    radius: 10,
    startAngle: 0,
    endAngle: 2 * Math.PI,
    color: 'yellow',
    canvas,
    ctx,
  })
}
const createL = () => {
  drawLine({
    points: [
      [440, 190],
      [440, 90],
    ],
    color: 'red',
    canvas,
    ctx,
  })
  drawLine({
    points: [
      [460, 175],
      [460, 90],
    ],
    color: 'red',
    canvas,
    ctx,
  })
  drawArc({
    x: 460,
    y: 190,
    radius: 20,
    startAngle: Math.PI / 2,
    endAngle: Math.PI,
    color: 'yellow',
    canvas,
    ctx,
  } as DrawArc)

  drawArc({
    x: 470,
    y: 175,
    radius: 10,
    startAngle: Math.PI / 2,
    endAngle: Math.PI,
    color: 'yellow',
    canvas,
    ctx,
  } as DrawArc)

  drawLine({
    points: [
      [460, 210],
      [550, 210],
    ],
    color: 'red',
    canvas,
    ctx,
  })
  drawLine({
    points: [
      [470, 185],
      [550, 185],
    ],
    color: 'red',
    canvas,
    ctx,
  })
  drawArc({
    x: 550,
    y: 197.5,
    radius: 12.5,
    startAngle: Math.PI / 2,
    endAngle: Math.PI * 3 / 2,
    color: 'yellow',
    reverse: true,
    canvas,
    ctx,
  } as DrawArc)
  drawArc({
    x: 450,
    y: 90,
    radius: 10,
    startAngle: 0,
    endAngle: Math.PI,
    color: 'yellow',
    reverse: true,
    canvas,
    ctx,
  } as DrawArc)
}

createU()
createT()
createI()
createL()

onMounted(() => {
  const container = document.getElementById('canvas-container')!
  container.appendChild(canvas)
})
</script>

<template>
  <div class="flex gap-10">
    <a href="/text">
      <h1 text-gray:100 hover:text-lightBlue text-3xl>text</h1>
    </a>
    <a href="/line">
      <h1 text-gray:100 hover:text-lightBlue text-3xl>line</h1>
    </a>
    <a href="/arc">
      <h1 text-gray:100 hover:text-lightBlue text-3xl>arc</h1>
    </a>
    <a href="/arcTo">
      <h1 text-gray:100 hover:text-lightBlue text-3xl>arcTo</h1>
    </a>
    <a href="/curve">
      <h1 text-gray:100 hover:text-lightBlue text-3xl>curve</h1>
    </a>
    <a href="/quadCurve">
      <h1 text-gray:100 hover:text-lightBlue text-3xl>quadCurve</h1>
    </a>
    <a href="/rect">
      <h1 text-gray:100 hover:text-lightBlue text-3xl>rect</h1>
    </a>
    <a href="/roundRect">
      <h1 text-gray:100 hover:text-lightBlue text-3xl>roundRect</h1>
    </a>
  </div>
  <div id="canvas-container" />
</template>
