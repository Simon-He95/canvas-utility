<script setup lang="ts">
import { drawArc, drawCurve, drawLine, drawQuadCurve } from '../../../src'
import type { DrawArc } from '../../../src'
const canvas = document.createElement('canvas')
canvas.width = 1500
canvas.height = 500
const ctx = canvas.getContext('2d')!

const createU = () => {
  drawLine({
    points: [
      [90, 180],
      [90, 100],
    ],
    color: 'lightblue',
    canvas,
    ctx,
  })
  drawLine({
    points: [
      [110, 180],
      [110, 100],
    ],
    color: 'lightblue',
    canvas,
    ctx,
  })
  drawLine({
    points: [
      [140, 180],
      [140, 100],
    ],
    color: 'lightblue',
    canvas,
    ctx,
  })
  drawLine({
    points: [
      [160, 180],
      [160, 100],
    ],
    color: 'lightblue',
    canvas,
    ctx,
  })
  drawArc({
    x: 100,
    y: 100,
    radius: 10,
    startAngle: 0,
    endAngle: Math.PI,
    color: 'lightblue',
    reverse: true,
    canvas,
    ctx,
  })
  drawArc({
    x: 150,
    y: 100,
    radius: 10,
    startAngle: 0,
    endAngle: Math.PI,
    color: 'lightblue',
    reverse: true,
    canvas,
    ctx,
  })

  drawArc({
    x: 125,
    y: 180,
    radius: 15,
    startAngle: 0,
    endAngle: -Math.PI,
    color: 'lightblue',
    canvas,
    ctx,
  })

  drawArc({
    x: 125,
    y: 180,
    radius: 35,
    startAngle: 0,
    endAngle: -Math.PI,
    color: 'lightblue',
    canvas,
    ctx,
  })
}

const createT = () => {
  drawLine({
    points: [
      [240, 200],
      [240, 110],
    ],
    color: 'skyblue',
    canvas,
    ctx,
  })
  drawLine({
    points: [
      [260, 200],
      [260, 110],
    ],
    color: 'skyblue',
    canvas,
    ctx,
  })
  drawLine({
    points: [
      [210, 110],
      [240, 110],
    ],
    color: 'skyblue',
    canvas,
    ctx,
  })
  drawLine({
    points: [
      [210, 90],
      [290, 90],
    ],
    color: 'skyblue',
    canvas,
    ctx,
  })
  drawLine({
    points: [
      [260, 110],
      [290, 110],
    ],
    color: 'skyblue',
    canvas,
    ctx,
  })
  drawArc({
    x: 250,
    y: 200,
    radius: 10,
    startAngle: 0,
    endAngle: -Math.PI,
    color: 'skyblue',
    canvas,
    ctx,
  } as DrawArc)
  drawArc({
    x: 210,
    y: 100,
    radius: 10,
    startAngle: Math.PI / 2,
    endAngle: Math.PI * 3 / 2,
    color: 'skyblue',
    canvas,
    ctx,
  } as DrawArc)
  drawArc({
    x: 290,
    y: 100,
    radius: 10,
    startAngle: Math.PI / 2,
    endAngle: Math.PI * 3 / 2,
    color: 'skyblue',
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
    color: 'skyblue',
    canvas,
    ctx,
  })
  drawLine({
    points: [
      [370, 200],
      [370, 120],
    ],
    color: 'skyblue',
    canvas,
    ctx,
  })
  drawArc({
    x: 360,
    y: 200,
    radius: 10,
    startAngle: 0,
    endAngle: -Math.PI,
    color: 'skyblue',
    canvas,
    ctx,
  } as DrawArc)
  drawArc({
    x: 360,
    y: 120,
    radius: 10,
    startAngle: 0,
    endAngle: -Math.PI,
    color: 'skyblue',
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
    color: 'skyblue',
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
    color: 'skyblue',
    canvas,
    ctx,
  })
  drawLine({
    points: [
      [460, 175],
      [460, 90],
    ],
    color: 'skyblue',
    canvas,
    ctx,
  })
  drawArc({
    x: 460,
    y: 190,
    radius: 20,
    startAngle: Math.PI / 2,
    endAngle: Math.PI,
    color: 'skyblue',
    canvas,
    ctx,
  } as DrawArc)

  drawArc({
    x: 470,
    y: 175,
    radius: 10,
    startAngle: Math.PI / 2,
    endAngle: Math.PI,
    color: 'skyblue',
    canvas,
    ctx,
  } as DrawArc)

  drawLine({
    points: [
      [460, 210],
      [550, 210],
    ],
    color: 'skyblue',
    canvas,
    ctx,
  })
  drawLine({
    points: [
      [470, 185],
      [550, 185],
    ],
    color: 'skyblue',
    canvas,
    ctx,
  })
  drawArc({
    x: 550,
    y: 197.5,
    radius: 12.5,
    startAngle: Math.PI / 2,
    endAngle: Math.PI * 3 / 2,
    color: 'skyblue',
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
    color: 'skyblue',
    reverse: true,
    canvas,
    ctx,
  } as DrawArc)
}

const createS = () => {
  drawCurve({
    canvas,
    ctx,
    start: [650, 80],
    end: [640, 145],
    controlPoints: [
      [610, 100],
      [610, 110],
    ],
    color: 'skyblue',
  })

  drawCurve({
    canvas,
    ctx,
    start: [640, 145],
    end: [610, 200],
    controlPoints: [
      [670, 180],
      [670, 190],
    ],
    color: 'skyblue',
  })
  drawCurve({
    canvas,
    ctx,
    start: [680, 90],
    end: [670, 155],
    controlPoints: [
      [640, 110],
      [640, 120],
    ],
    color: 'skyblue',
  })

  drawCurve({
    canvas,
    ctx,
    start: [670, 155],
    end: [640, 210],
    controlPoints: [
      [700, 190],
      [700, 200],
    ],
    color: 'skyblue',
  })

  drawQuadCurve({
    canvas,
    ctx,
    start: [610, 200],
    end: [640, 210],
    controlPoints: [
      610, 215,
    ],
  })
  drawQuadCurve({
    canvas,
    ctx,
    start: [650, 80],
    end: [680, 90],
    controlPoints: [
      680, 75,
    ],
  })
}

createU()
createT()
createI()
createL()
createS()

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
