import React from 'react'

const Container = ({style, children}) => {
  return (
    <div className={`container mx-auto max-w-[1480px] px-6 ${style}`}>
        {children}
    </div>
  )
}

export default Container