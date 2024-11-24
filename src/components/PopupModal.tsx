import React, { ReactNode } from 'react'

interface PopupModalProps {
  isOpen: boolean
  children?: ReactNode
  className?: string
  containerClassName?: string
  onBackdropClick?: () => void
}

const PopupModal: React.FC<PopupModalProps> = ({
  isOpen,
  children,
  className = '',
  containerClassName = '',
  onBackdropClick,
}) => {
  return (
    <div
      className={`
      fixed inset-0 z-50 flex flex-col items-center 
      justify-center bg-slate-500 bg-opacity-40
      px-6 transition-all delay-75 duration-300 ease-in-out
        ${isOpen ? `opacity-1` : `translate-y-[125%] opacity-0`}
        ${containerClassName}
      `}
      onClick={onBackdropClick}
    >
      <div
        className={`flex w-full max-w-[550px] flex-col items-center justify-center gap-6 rounded-3xl bg-white p-6 ${className}`}
      >
        {children}
      </div>
    </div>
  )
}

export default PopupModal
