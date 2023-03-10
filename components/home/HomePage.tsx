import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import GreenButton from '../../components/general_components/GreenButton'
import StepCard from '../../components/general_components/StepCard'
import HangoutCard from '../../components/upcoming_hangouts/HangoutCard'
import FeedbackSlider from '../../components/general_components/FeedbackSlider'
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse'
import ReactTypingEffect from 'react-typing-effect/.'

import ModalVideo from 'react-modal-video'

import { steps } from '../../utils/steps'
import { companies } from '../../utils/companies'
import { feedbacks } from '../../utils/feedbacks'
import video from '../../assets/images/hero/video.png'
import bluebubble_phone from '../../assets/images/hero/blue_bubble_phone.png'
import hero_button from '../../assets/images/hero/button.png'
import pc from '../../assets/images/upcoming_hangouts/hero.png'
import heart from '../../assets/images/upcoming_hangouts/circled_heart.png'
import hangouts_bubble from '../../assets/images/upcoming_hangouts/bubble.png'
import hangouts_bubble_phone from '../../assets/images/upcoming_hangouts/bubble_phone.png'
import hangout_logo from '../../assets/images/upcoming_hangouts/Quote Mark.png'
import topics_bg from '../../assets/images/Mask group.png'
import topics_bg_phone from '../../assets/images/Mask group phone.png'
import phone1 from '../../assets/images/Phone Mockup_left.jpg'
import phone2 from '../../assets/images/Phone Mockup_right.jpg'

import styles from "../../styles/index.module.scss"

const topics = [
  'Goals',
  'Motivation',
  'Trust',
  'Vulnerability',
  'Wealth',
  'Sex',
  'Meaning',
  'Movies',
  'Climate',
  'Childfree',
  'Purpose',
  'Guns',
  'Cancel-culture',
  'Music',
  'Borders & nations',
  'Fear',
  'Confidence',
  'Meaning',
  'Purpose',
]

const HomePage = ({ data }: any) => {
  const [isOpen, setOpen] = useState(false)

  const [go, setGo] = useState(false) // waiting for the
  useEffect(() => {
    setGo(true)
  }, [])

  return (
    <div className={`min-h-screen text-2xl ${styles.homepage}`}>
      <Head>
        <title>BuddyTree</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id='main' className="mx-auto w-full ">
        {go && (
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="GNqZYOsZlUI"
            onClose={() => setOpen(false)}
            theme="dark"
            height="80vh"
            width="80vw"
          />
        )}
        <section
          id="hero_section"
          className="relative md:top-[-7rem] mx-auto overflow-hidden bg-Blue px-8 pb-20 pt-10 md:px-32 md:pt-[16rem] md:pb-32"
        >
          <div className="z-1 absolute bottom-6 left-0 block md:hidden">
            <Image
              src={bluebubble_phone}
              height={430}
              width={280}
              className="object-cover"
            />
          </div>
          <div className="-z-1 relative mx-auto flex max-w-7xl flex-col items-center overflow-visible md:flex-row">
            {/* THE BUBBLE IS AN SVG NOW */}
            <MouseParallaxContainer
              className="parallax"
              containerStyles={{
                position: 'static',
              }}
            >
              <MouseParallaxChild
                factorX={0.03}
                factorY={0.1}
                className="scale-130 z-1 absolute -top-72 -right-60 hidden w-[60vw] transition-all md:block md:min-w-[600px]"
              >
                <div className="">
                  <svg
                    viewBox="0 0 1659 1384"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1002.58 1322.61C213.437 1594.22 -377.95 895.779 289.545 569.612C647.621 396.969 534.708 472.325 787.358 177.088C1043.75 -115.899 1399.96 -18.6114 1562.15 273.813C1746.18 608.415 1722.47 1062.8 1002.58 1322.61Z"
                      fill="#10537D"
                    />
                  </svg>
                </div>
              </MouseParallaxChild>
            </MouseParallaxContainer>
            <div className="order-2 basis-1/2 md:order-1">
              <h1 className="mb-14 text-4xl font-bold text-white">
                A space to have meaningful <br /> discussions and make
                long-lasting <br /> friendships.
              </h1>
              <GreenButton
                text="GET STARTED FOR FREE"
                className="w-full md:w-auto"
              />
            </div>
            <div className="relative order-1 my-16 h-full w-full basis-1/2 pb-12 text-center md:order-2 md:my-auto md:pb-0">
              <MouseParallaxContainer
                className="parallax"
                containerStyles={{
                  width: '100%',
                  overflow: 'visible',
                }}
                resetOnLeave
              >
                <MouseParallaxChild
                  factorX={0.03}
                  factorY={0.1}
                  className="absolute -top-16 overflow-visible md:right-16 xl:right-20 md:-top-24 2xl:right-28"
                  updateStyles={{ overflow: 'visible' }}
                >
                  <div>
                    <Image
                      src={video}
                      height={270}
                      width={394}
                      alt="intro video thumbnail"
                      className="object-cover"
                    />
                  </div>
                </MouseParallaxChild>
                <MouseParallaxChild
                  factorX={0.07}
                  factorY={0.08}
                  className="relative z-20 rounded-full transition duration-300 ease-in-out"
                >
                  <button onClick={() => setOpen(true)}>
                    <Image
                      src={hero_button}
                      height={70}
                      width={70}
                      alt="click to play intro video"
                    />
                  </button>
                </MouseParallaxChild>
              </MouseParallaxContainer>
            </div>
          </div>
        </section>
        <section
          id="how_buddytree_works"
          className="relative mx-auto max-w-7xl px-8 py-20 md:py-0 md:pb-20  md:px-24"
        >
          <div className="flex flex-col justify-start gap-3 md:flex-row md:items-center md:justify-between md:gap-0">
            <h1 className="text-3xl font-bold text-DarkBlue">
              How Buddytree works
            </h1>
            <p className="text-base font-semibold text-Grey">
              You’re born into your family, but your Buddytree is yours to
              create.
            </p>
          </div>
          <div className="mt-16 flex flex-col justify-between gap-8 md:flex-row md:gap-0">
            {steps.map((step) => (
              <StepCard key={step.id} data={step} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <GreenButton
              text="GET STARTED FOR FREE"
              className="w-full md:w-auto"
            />
          </div>
        </section>
        <section
          id="trusted_companies"
          className="relative mx-auto mt-10 max-w-7xl px-8 md:px-24"
        >
          <div className="flex hidden w-full flex-col items-center justify-between gap-5 border-t border-Grey/10 py-6 md:flex-row md:gap-12 md:px-20">
            <h1 className="whitespace-nowrap text-xl font-semibold text-DarkBlue">
              Backed By
            </h1>
            <div className="flex w-full flex-wrap items-center justify-center gap-y-4 md:justify-between">
              {companies.map((company, idx) => (
                <div key={idx} className="basis-1/3 text-center md:basis-20">
                  <Image
                    key={company.id}
                    src={company.imageUrl}
                    width={70}
                    height={20}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="hangouts_section"
          className="relative bg-Grey/5 px-8 md:px-32"
        >
          <div className="relative mx-auto max-w-7xl">
            <div className="absolute top-10 right-56 z-0 hidden md:block">
              <Image src={hangouts_bubble} height={800} width={860} />
            </div>
            <div className="absolute top-20 -right-8 z-0 block md:hidden">
              <Image
                src={hangouts_bubble_phone}
                height={450}
                width={310}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-start px-2 pt-24 md:flex-row md:gap-36">
              <Image
                src={pc}
                height={310}
                width={480}
                alt="computer"
                className="object-cover"
              />
              <div className="pt-12 md:pr-40">
                <h2 className="text-3xl font-bold text-DarkBlue">
                  The magic formula of <br /> Buddytree is
                </h2>
                <div className="relative mt-10 flex min-h-[120px] items-center gap-8">
                  <div className="">
                    <Image
                      src={heart}
                      height={50}
                      width={50}
                      alt="blue heart"
                    />
                  </div>
                  <ul>
                    <li className="animatedText w-64 text-base font-normal text-DarkBlue">
                      <ReactTypingEffect
                        text={[
                          'keeping group sizes small, so you can hear one another.',
                          'providing a wide range of videos and discussion questions to help you keep things on topic.',
                          'having a wide range of discussion topics, so you can talk about what you’re passionate about.',
                          'valuing trust and accountability in our community, so you get to enjoy high-quality experiences.',
                        ]}
                        speed={10}
                        eraseSpeed={0}
                        eraseDelay={3000}
                        typingDelay={700}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-20">
              <h1 className="text-3xl font-bold text-DarkBlue">
                Upcoming Hangouts
              </h1>
              <div className={`${styles.scrolltype} flex w-full flex-nowrap gap-8 overflow-x-auto pt-6 pb-12 md:pt-20`}>
                {data.map((hangout: any) => (
                  <HangoutCard key={hangout.id} hangout={hangout} />
                ))}
              </div>
            </div>
            <div
              id="community"
              className="relative overflow-visible pt-20 pb-20"
            >
              <div className="absolute top-16 left-56">
                <Image
                  src={hangout_logo}
                  height={190}
                  width={220}
                  className="object-cover"
                />
              </div>
              <div className="relative flex flex-col items-start justify-between gap-24 overflow-visible md:flex-row md:gap-32">
                <div className="h-full flex-none pt-10 md:w-80">
                  <h1 className="leading-stretch text-3xl font-bold text-DarkBlue">
                    Join our community of Buddytree members from around the
                    world.
                  </h1>
                  <GreenButton
                    text="GET STARTED FOR FREE"
                    className="bottom-0 mt-10 w-full md:absolute md:mt-0 md:w-auto"
                  />
                </div>
                <FeedbackSlider feedbacks={feedbacks} />
              </div>
            </div>
          </div>
        </section>
        <section
          id="explore_more_section"
          className="relative overflow-hidden bg-Blue px-8 pt-12 pb-20 md:px-32 md:py-28"
        >
          <div className="relative mx-auto max-w-7xl">
            <div className="absolute -top-12 -right-8 z-0 hidden md:-top-28 md:-right-32 md:block">
              <Image
                src={topics_bg}
                height={452}
                width={780}
                className="object-cover"
              />
            </div>
            <div className="absolute top-0 -right-8 z-0 block md:hidden">
              <Image
                src={topics_bg_phone}
                height={500}
                width={270}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-start justify-between gap-20 md:flex-row md:gap-[16rem]">
              <div className="relative basis-1/2">
                <h1 className="mb-10 text-3xl font-bold text-white md:mb-20">
                  Humans are social creatures. What discussions would you like
                  to have with others?
                </h1>
                <GreenButton
                  text="EXPLORE MORE TOPICS"
                  className="w-full md:w-auto"
                />
              </div>
              <div className="relative flex basis-1/2 flex-wrap items-center gap-3">
                {topics.map((topic, i) => (
                  <button
                    key={i}
                    className="cursor-default rounded border border-white/50 bg-transparent px-3 py-1.5 text-sm text-LightGreen"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          id="last_section"
          className="relative bg-[#f3f3f3] px-8 pt-16 md:px-24 md:pt-32"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:gap-20">
              <div className="order-2 md:order-1">
                <Image
                  src={phone1}
                  height={500}
                  width={350}
                  className="object-cover  object-top"
                />
              </div>
              <div className="order-1 text-center md:order-2">
                <h1 className="whitspace-wrap leading-stretch text-3xl font-bold text-DarkBlue md:mb-20 md:w-[26rem]">
                  Have meaningful discussions with amazing new friends.
                </h1>
                <GreenButton
                  text="GET STARTED FOR FREE"
                  className="relative top-44 w-full md:static md:w-auto"
                />
              </div>
              <div className="order-3 hidden md:block">
                <Image
                  src={phone2}
                  height={500}
                  width={350}
                  className="object-cover  object-top"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage

