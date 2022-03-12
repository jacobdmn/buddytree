import React from 'react'
import Image from 'next/image'

const FeedbackCard = ({feedback}:any) => {
  return (
    <div className='relative rounded bg-Blue px-10 pb-6 pt-12 w-[36rem] flex-none'>
        <div className='absolute right-64 -top-10 z-40'>
            <Image src={feedback.imageUrl} height={70} width={70}/>
        </div>
        <p className='text-white text-sm mb-8 pr-10'>“{feedback.feedback}”</p>
        <span className='text-white text-sm'>-{feedback.user}, {feedback.place}</span>
        <div className='flex flex-nowrap gap-2 mt-4'>
            {feedback.tags.map((tag:any,i:any)=>(
                <span key={i} className='bg-transparent whitespace-nowrap px-2 py-1 text-xs text-white/50 border border-white/50 rounded'>{tag}</span>
            ))}
        </div>
    </div>
  )
}

export default FeedbackCard