// @vendors
import React from 'react'
// @styles
import './Media.css'

// ─────────────── ∞ ───────────────

export default ({ onClick, size, color }) => (
	<svg
		className='lcsgrz-pb-media'
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 122.88 53.37'
		width={size}
		height={size}
		onClick={onClick}
		fill={color}
	>
		<path d='M1.05,7.37A4.49,4.49,0,1,1,7.93,1.61a114.61,114.61,0,0,0,14.88,15C35.48,27,48.63,32.25,61.67,32.24S87.79,27,100.37,16.49A112.38,112.38,0,0,0,114.94,1.64a4.48,4.48,0,0,1,6.92,5.69,129.09,129.09,0,0,1-10,10.85l5.91,5.42a4.47,4.47,0,1,1-6,6.6l-6.59-6a86.1,86.1,0,0,1-13.43,9.06l3.73,8A4.48,4.48,0,0,1,87.35,45l-3.74-8a61.24,61.24,0,0,1-17.56,4V48.9a4.48,4.48,0,0,1-8.95,0V41A61.75,61.75,0,0,1,39.58,37l-3.76,8a4.48,4.48,0,1,1-8.11-3.79l3.74-8A88.78,88.78,0,0,1,18,24.2l-6.55,6a4.47,4.47,0,1,1-6-6.6l5.83-5.34A130.63,130.63,0,0,1,1.05,7.37Z' />
	</svg>
)
