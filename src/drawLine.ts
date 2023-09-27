import type { DrawLine } from './types'

export function drawLine(options: DrawLine) {
  const { canvas, ctx, points, lineWidth, lineCap, radialGradient, setCustom } = options
  let color = options.color
  const _canvas = canvas || document.createElement('canvas')
  const _ctx = ctx || _canvas.getContext('2d')!
  if (radialGradient)
    color = typeof radialGradient === 'function' ? radialGradient(_ctx) : radialGradient
  if (lineWidth)
    _ctx.lineWidth = lineWidth
  if (lineCap)
    _ctx.lineCap = lineCap
  _ctx.beginPath()
  points.forEach(([x, y]) => {
    _ctx.lineTo(x, y)
  })

  if (color)
    _ctx.strokeStyle = color
  if (setCustom)
    setCustom(_ctx)
  _ctx.stroke()
  return _canvas
}
