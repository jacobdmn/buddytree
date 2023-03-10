import React from 'react'

const GreenButton = ({ text, className }: any) => {
  return (
    <a
      href="https://www.buddytree.org/home"
      className={`whitespace-nowrap rounded bg-Green px-5 py-2.5 text-sm text-center font-medium text-white ${className}`}
    >
      {text}
    </a>
  )
}

export default GreenButton
