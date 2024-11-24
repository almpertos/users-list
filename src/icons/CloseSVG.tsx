import React from 'react'

const CloseSVG = ({ size = 16, color = '#000', className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={color ? color : '#1C274C'}
        strokeWidth="1.5"
      />
      <path
        d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
        stroke={color ? color : '#1C274C'}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default CloseSVG
