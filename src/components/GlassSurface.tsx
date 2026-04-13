// src/components/GlassSurface.tsx
'use client'

import { useId } from 'react'
import type { CSSProperties, ReactNode } from 'react'

interface GlassSurfaceProps {
  width?: number | string
  height?: number | string
  borderRadius?: number
  displace?: number
  distortionScale?: number
  redOffset?: number
  greenOffset?: number
  blueOffset?: number
  brightness?: number
  opacity?: number
  mixBlendMode?: CSSProperties['mixBlendMode']
  className?: string
  children?: ReactNode
}

export function GlassSurface({
  width = '100%',
  height = 'auto',
  borderRadius = 24,
  displace = 0.015,
  distortionScale = -80,
  redOffset = 0,
  greenOffset = 8,
  blueOffset = 16,
  brightness = 20,
  opacity = 0.92,
  mixBlendMode = 'normal',
  className = '',
  children,
}: GlassSurfaceProps) {
  const rawId = useId()
  const filterId = `glass-${rawId.replace(/:/g, 'g')}`

  const w = typeof width === 'number' ? `${width}px` : width
  const h = typeof height === 'number' ? `${height}px` : height
  const br = `${borderRadius}px`
  const bright = 1 + brightness / 100

  return (
    <>
      {/* SVG filter definition — rendered at 0x0, just declares the filter */}
      <svg
        aria-hidden="true"
        style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      >
        <defs>
          <filter
            id={filterId}
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
            colorInterpolationFilters="sRGB"
          >
            {/* Fractal noise base */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency={`${displace} ${displace * 0.75}`}
              numOctaves={4}
              seed={7}
              result="noise"
            />

            {/* Red channel — least displaced */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={distortionScale + redOffset}
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced_r"
            />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
              in="displaced_r"
              result="r_only"
            />

            {/* Green channel — medium displacement */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={distortionScale + greenOffset}
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced_g"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"
              in="displaced_g"
              result="g_only"
            />

            {/* Blue channel — most displaced (chromatic aberration) */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={distortionScale + blueOffset}
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced_b"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
              in="displaced_b"
              result="b_only"
            />

            {/* Merge all three channels */}
            <feBlend in="r_only" in2="g_only" mode="screen" result="rg" />
            <feBlend in="rg" in2="b_only" mode="screen" result="rgb" />

            {/* Brightness boost */}
            <feComponentTransfer in="rgb">
              <feFuncR type="linear" slope={bright} />
              <feFuncG type="linear" slope={bright} />
              <feFuncB type="linear" slope={bright} />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      <div
        className={className}
        style={{
          position: 'relative',
          width: w,
          height: h,
          borderRadius: br,
          overflow: 'hidden',
          opacity,
          mixBlendMode,
        }}
      >
        {/* Layer 1: Frosted glass — backdrop-filter blurs what's behind */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: br,
            backdropFilter: 'blur(20px) saturate(1.8) brightness(1.05)',
            WebkitBackdropFilter: 'blur(20px) saturate(1.8) brightness(1.05)',
            background: 'rgba(254, 248, 238, 0.52)',
          }}
        />

        {/* Layer 2: Distortion shimmer — SVG filter applied to a gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: br,
            background:
              'linear-gradient(140deg, rgba(255,255,255,0.45) 0%, rgba(246,192,112,0.14) 38%, rgba(207,121,35,0.07) 68%, rgba(255,255,255,0.22) 100%)',
            filter: `url(#${filterId})`,
            pointerEvents: 'none',
          }}
        />

        {/* Layer 3: Top edge highlight */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '8%',
            right: '8%',
            height: 1,
            background: 'rgba(255,255,255,0.85)',
            pointerEvents: 'none',
          }}
        />

        {/* Layer 4: Border + shadow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: br,
            border: '1px solid rgba(232, 217, 197, 0.65)',
            boxShadow:
              '0 8px 32px rgba(122,92,61,0.13), 0 2px 8px rgba(122,92,61,0.08), inset 0 1px 0 rgba(255,255,255,0.55)',
            pointerEvents: 'none',
          }}
        />

        {/* Content layer */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </div>
    </>
  )
}
