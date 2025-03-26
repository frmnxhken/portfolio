import React from 'react'

const TextLine = ({text, rotate}) => {
    return (
        <div className={`${rotate === 'right' ? 'rotate-3 origin-bottom-right' : '-rotate-6 origin-top-right'} relative z-[99] scale-105 border-2 border-black bottom-[10%] bg-yellow-400 w-full`}>
            <div className='tracking-tighter flex flex-nowrap whitespace-nowrap text-3xl sm:text-5xl font-semibold px-4 py-4 sm:py-6 gap-x-2'>
                <h2>{text}</h2>
                <h2>{text}</h2>
                <h2>{text}</h2>
                <h2>{text}</h2>
            </div>
        </div>
    )
}

export default TextLine