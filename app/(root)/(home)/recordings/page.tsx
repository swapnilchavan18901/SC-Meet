import CallList from '@/components/CallList'
import React from 'react'

const Recordings = () => {
  return (
        <section className="flex size-full flex-col gap-10 text-white">
          <h1 className="text-2xlfont-bold">
          <CallList type="recordings" />
          </h1>
        </section>
  )
}

export default Recordings