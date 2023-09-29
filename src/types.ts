export interface DrawText {
  text: string
  font?: string
  color?: string | CanvasGradient
  isFill?: boolean
  direction?: 'ltr' | 'rtl' | 'inherit'
  textAlign?: 'left' | 'right' | 'center' | 'start' | 'end'
  textBaseline?: 'top' | 'hanging' | 'middle' | 'alphabetic' | 'ideographic' | 'bottom'
  position?: [number, number]
  radialGradient?: ((ctx: CanvasRenderingContext2D) => CanvasGradient) | CanvasGradient
  canvas?: HTMLCanvasElement
  ctx?: CanvasRenderingContext2D
  setCustom?: (ctx: CanvasRenderingContext2D) => void
}

export interface DrawLine {
  points: [number, number][]
  canvas?: HTMLCanvasElement
  ctx?: CanvasRenderingContext2D
  lineWidth?: number
  lineCap?: 'round' | 'butt' | 'square'
  lineJoin?: 'miter' | 'round' | 'bevel'
  color?: string | CanvasGradient
  isFill?: boolean
  fillColor?: string | CanvasGradient
  isClosed?: boolean
  borderRadialGradient?: ((ctx: CanvasRenderingContext2D) => CanvasGradient) | CanvasGradient
  fillRadialGradient?: ((ctx: CanvasRenderingContext2D) => CanvasGradient) | CanvasGradient
  setCustom?: (ctx: CanvasRenderingContext2D) => void
}

export interface DrawArc {
  x: number
  y: number
  radius: number
  startAngle: number
  endAngle: number
  reverse?: boolean
  isFill?: boolean
  lineWidth?: number
  fillColor?: string | CanvasGradient
  borderRadialGradient?: ((ctx: CanvasRenderingContext2D) => CanvasGradient) | CanvasGradient
  fillRadialGradient?: ((ctx: CanvasRenderingContext2D) => CanvasGradient) | CanvasGradient
  setCustom?: (ctx: CanvasRenderingContext2D) => void
  canvas?: HTMLCanvasElement
  ctx?: CanvasRenderingContext2D
  color?: string | CanvasGradient
  isClosed?: boolean
}

export interface DrawArcTo {
  x0: number
  y0: number
  x1: number
  y1: number
  x2: number
  y2: number
  radius: number
  isFill?: boolean
  lineWidth?: number
  fillColor?: string | CanvasGradient
  borderRadialGradient?: ((ctx: CanvasRenderingContext2D) => CanvasGradient) | CanvasGradient
  fillRadialGradient?: ((ctx: CanvasRenderingContext2D) => CanvasGradient) | CanvasGradient
  setCustom?: (ctx: CanvasRenderingContext2D) => void
  canvas?: HTMLCanvasElement
  ctx?: CanvasRenderingContext2D
  color?: string | CanvasGradient
  isClosed?: boolean
}

export interface DrawCurve {
  start: [number, number]
  end: [number, number]
  controlPoints: [
    [number, number],
    [number, number],
  ]
  isFill?: boolean
  lineWidth?: number
  fillColor?: string | CanvasGradient
  borderRadialGradient?: ((ctx: CanvasRenderingContext2D) => CanvasGradient) | CanvasGradient
  fillRadialGradient?: ((ctx: CanvasRenderingContext2D) => CanvasGradient) | CanvasGradient
  setCustom?: (ctx: CanvasRenderingContext2D) => void
  canvas?: HTMLCanvasElement
  ctx?: CanvasRenderingContext2D
  color?: string | CanvasGradient
  isClosed?: boolean
}

export interface DrawQuadCurve {
  start: [number, number]
  end: [number, number]
  controlPoints: [
    number, number,
  ]
  isFill?: boolean
  lineWidth?: number
  fillColor?: string | CanvasGradient
  borderRadialGradient?: ((ctx: CanvasRenderingContext2D) => CanvasGradient) | CanvasGradient
  fillRadialGradient?: ((ctx: CanvasRenderingContext2D) => CanvasGradient) | CanvasGradient
  setCustom?: (ctx: CanvasRenderingContext2D) => void
  canvas?: HTMLCanvasElement
  ctx?: CanvasRenderingContext2D
  color?: string | CanvasGradient
  isClosed?: boolean
}

export interface DrawRect {
  x: number
  y: number
  width: number
  height: number
  isFill?: boolean
  lineWidth?: number
  fillColor?: string | CanvasGradient
  borderRadialGradient?: ((ctx: CanvasRenderingContext2D) => CanvasGradient) | CanvasGradient
  fillRadialGradient?: ((ctx: CanvasRenderingContext2D) => CanvasGradient) | CanvasGradient
  setCustom?: (ctx: CanvasRenderingContext2D) => void
  canvas?: HTMLCanvasElement
  ctx?: CanvasRenderingContext2D
  color?: string | CanvasGradient
}

export interface DrawRoundRect {
  x: number
  y: number
  width: number
  height: number
  isFill?: boolean
  lineWidth?: number
  radii?: number | DOMPointInit | (number | DOMPointInit)[]
  fillColor?: string | CanvasGradient
  borderRadialGradient?: ((ctx: CanvasRenderingContext2D) => CanvasGradient) | CanvasGradient
  fillRadialGradient?: ((ctx: CanvasRenderingContext2D) => CanvasGradient) | CanvasGradient
  setCustom?: (ctx: CanvasRenderingContext2D) => void
  canvas?: HTMLCanvasElement
  ctx?: CanvasRenderingContext2D
  color?: string | CanvasGradient
}
