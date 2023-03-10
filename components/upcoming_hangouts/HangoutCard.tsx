import { useState, useEffect } from 'react'
import Image from 'next/image'
import moment from 'moment'

const HangoutCard = ({ hangout }: any) => {
  let index = hangout.events[0].attending.length

  return (
    <div className="duiration-600 relative flex w-56 flex-none cursor-default flex-col rounded transition ease-in-out hover:scale-[1.01]">
      <Image
        src={hangout.photo.uri}
        height={180}
        width={300}
        className="rounded-t"
      />
      <div className="bg-white py-4 px-5">
        <span className="text-xs font-semibold text-Blue">
          {moment(hangout.start).format('ddd, MMM D @ LT ').toUpperCase()}
          GMT+
          {moment(hangout.start).format('Z').toUpperCase()[2]}
        </span>
        <h1 className="my-2 text-lg font-bold text-DarkBlue">
          {hangout.title}
        </h1>
        <div className="mt-2 flex items-center">
          {hangout.events[0].attending.map((user: any, index: any) => (
            <Image
              key={index}
              height={25}
              width={25}
              src={user.photo.uri}
              className=" overflow-hidden rounded-full"
            />
          ))}
          <span className="ml-3 text-sm font-semibold text-LightGrey">
            {index}
          </span>
          <span className="ml-3 text-sm font-semibold text-red-500">
            {index < 6
              ? `${7 - index} spots left!`
              : index === 6
              ? `1 spot left!`
              : `Join group 2`}
          </span>
        </div>
        <a
          href={`https://www.buddytree.org/topic/${hangout.topicSlug}`}
          className="mt-4 inline-block bg-transparent text-sm font-semibold text-Green outline-none"
        >
          Join This Hangout
        </a>
      </div>
    </div>
  )
}

export default HangoutCard
