import React, { useEffect, useState } from 'react'
import FeedbackCard from './FeedbackCard'

const FeedbackSlider = ({ feedbacks }: any) => {
  const [current, setCurrent] = useState(0)
  const length = feedbacks.length

  // useEffect(()=>{
  //   const slideInterval=setInterval(()=>{
  //     setCurrent(current=>current<length-1?current+1:0)
  //   },3000)
  //   return ()=>clearInterval(slideInterval)
  // },[])

  const nextCard = () => {
    setCurrent(current == length - 1 ? 0 : current + 1)
  }

  const prevCard = () => {
    setCurrent(current == 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(feedbacks) || feedbacks.length <= 0) {
    return null
  }

  return (
    <div className="relative">
      <div className="flex w-[19rem] flex-nowrap overflow-hidden pt-10 md:w-[40rem] ">
        {feedbacks.map((feedback: any, index: number) => (
          <div
            key={feedback.id}
            className="ease transition duration-1000 md:pr-4"
            style={{ transform: `translate(${-100 * current}%)` }}
          >
            <FeedbackCard feedback={feedback} />
          </div>
        ))}
        <div className="absolute -bottom-14 right-0 flex gap-4">
          <svg
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-180 cursor-pointer text-Green  hover:scale-110"
            onClick={prevCard}
          >
            <path
              d="M11.4751 23.7293V27.2709H32.7251L22.9855 37.0105L25.5001 39.5251L39.5251 25.5001L25.5001 11.4751L22.9855 13.9897L32.7251 23.7293H11.4751Z"
              fill="#3CB371"
            />
          </svg>

          <svg
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer text-Green  hover:scale-110"
            onClick={nextCard}
          >
            <path
              d="M11.4751 23.7293V27.2709H32.7251L22.9855 37.0105L25.5001 39.5251L39.5251 25.5001L25.5001 11.4751L22.9855 13.9897L32.7251 23.7293H11.4751Z"
              fill="#3CB371"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default FeedbackSlider
