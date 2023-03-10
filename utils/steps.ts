import first from '../assets/images/how_bodytree_works/1.png'
import second from '../assets/images/how_bodytree_works/2.png'
import third from '../assets/images/how_bodytree_works/3.png'

interface Card {
  id: number
  title: string
  desc: string
  imageUrl: any
  bold?: boolean
}

export const steps: Array<Card> = [
  {
    id: 1,
    title: 'Create your free account',
    desc: 'Members show their faces in their profile picture. No creeps. Join your first live hangout for free.',
    imageUrl: first,
  },
  {
    id: 2,
    title: 'Join your first live hangout',
    desc: 'Discover over 50 topics or create your own, filled with interesting, meaningful, and unexpected conversations.',
    imageUrl: second,
    bold: true,
  },
  {
    id: 3,
    title: 'Have great conversations with people',
    desc: "Buddytree has an amazing community of people. We can't wait for you to make lasting friendships and build your chosen family.",
    imageUrl: third,
  },
]
