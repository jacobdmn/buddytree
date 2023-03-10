import React from 'react'
import Image from 'next/image'

const FeedbackCard = ({ feedback }: any) => {
  return (
    <div className="relative w-[19rem] rounded bg-Blue px-8 pb-6 pt-12 md:w-[36rem] md:px-10">
      <div className="absolute right-28 -top-10 z-40 overflow-hidden rounded-full md:right-64">
        <Image src={feedback.imageUrl} height={70} width={70}  />
      </div>
      <p className="leading-stretch text-base text-white md:h-24 md:pr-10 md:text-sm md:leading-normal">
        “{feedback.feedback}”
      </p>
      <span className="text-sm text-white">
        -{feedback.user}, {feedback.place}
      </span>
      {/* <div className="mt-4 flex flex-wrap gap-2 md:flex-nowrap">
        {feedback.tags.map((tag: any, i: any) => (
          <span
            key={i}
            className="whitespace-nowrap rounded border border-white/50 bg-transparent px-2 py-1 text-xs text-white/50"
          >
            {tag}
          </span>
        ))}
      </div> */}
    </div>
  )
}

export default FeedbackCard
