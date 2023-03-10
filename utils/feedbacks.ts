import natalie_img from '../assets/images/feedbacks/natalie.jpeg'
import bev_img from '../assets/images/feedbacks/bev.jpeg'
import roy_img from '../assets/images/feedbacks/roy.jpeg'
import francisco_img from '../assets/images/feedbacks/francisco.jpeg'
import pauline_img from '../assets/images/feedbacks/pauline.jpeg'

interface Card {
  id: number
  user: string
  feedback: string
  place: string
  imageUrl: any
  tags: Array<any>
}

export const feedbacks: Array<Card> = [
  {
    id: 1,
    user: 'Natalie',
    place: 'Vancouver',
    feedback:
      'The buddytree hangouts have been great for making friends locally as well as internationally. Each time I meet my buddies, we have deeper and more meaningful conversations.',
    imageUrl: natalie_img,
    tags: [
      'Get moving',
      'Share language + culture',
      'Read with friends',
      'Write together',
    ],
  },
  {
    id: 2,
    user: 'Bev',
    place: 'Vancouver',
    feedback:
      'Buddytree has given me the opportunity to form connections with interesting people I would not have met otherwise.',
    imageUrl: bev_img,
    tags: [
      'Get moving',
      'Share language + culture',
      'Read with friends',
      'Write together',
    ],
  },
  {
    id: 3,
    user: 'Roy',
    place: 'Vancouver',
    feedback:
      'It is a great way to socialize and meet people from all around the world.',
    imageUrl: roy_img,
    tags: [
      'Get moving',
      'Share language + culture',
      'Read with friends',
      'Write together',
    ],
  },
  {
    id: 4,
    user: 'Francisco',
    place: 'San Jose',
    feedback:
      'I’m a huge fan of anything that can help expand my horizons, and Buddytree is by far the single most important group that helps quench my thirst for expanding my horizons.',
    imageUrl: francisco_img,
    tags: [
      'Get moving',
      'Share language + culture',
      'Read with friends',
      'Write together',
    ],
  },
  {
    id: 5,
    user: 'Pauline',
    place: 'Melbourne',
    feedback:
      'I love attending the Buddytree hangouts! I always come away with something, whether it’s more insight into a topic, seeing another perspective, or learning something new.',
    imageUrl: pauline_img,
    tags: [
      'Get moving',
      'Share language + culture',
      'Read with friends',
      'Write together',
    ],
  },
]
