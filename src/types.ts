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
  isClosed?: boolean
  radialGradient?: ((ctx: CanvasRenderingContext2D) => CanvasGradient) | CanvasGradient
  setCustom?: (ctx: CanvasRenderingContext2D) => void
}
