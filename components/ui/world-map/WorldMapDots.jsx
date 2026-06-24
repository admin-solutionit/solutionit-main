'use client'

import { worldMapPaths } from './world-map-paths'

export function WorldMapDots({ opacity = 0.05, color = '#041E42', dotSize = 2, dotSpacing = 7, className = '' }) {
  const patternId = 'wm-dots'
  const half = dotSpacing / 2

  return (
    <svg
      viewBox="0 0 1000 500"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
      className={`absolute pointer-events-none ${className}`}
      style={{ opacity }}
    >
      <defs>
        <pattern id={patternId} x="0" y="0" width={dotSpacing} height={dotSpacing} patternUnits="userSpaceOnUse">
          <circle cx={half} cy={half} r={dotSize} fill={color} />
        </pattern>
      </defs>
      <g fill={`url(#${patternId})`}>
        {worldMapPaths.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
    </svg>
  )
}
