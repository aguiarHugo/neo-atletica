import React from 'react'

type Props = {
  children: React.ReactNode
}

const HeadText = ({children}: Props) => {
  return (
    <h2 className='basis-3/5 font-montserrat text-3xl font-bold text-dark-400'>
    {children}
    </h2>
    )
}

export default HeadText