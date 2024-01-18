import React from 'react'

interface Props {
    children: React.ReactNode
}

const Section = ({ children }: Props) => {
  return (
    <section className="min-h-screen w-10/12 my-8 bg-gray-200 pt-8 md:pl-8 lg:pl-16 lg:px-8">
        {children}
    </section>
  )
}

export default Section