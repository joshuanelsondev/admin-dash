// trendingList.ts

import { v4 as uuid } from 'uuid'
import catAvatar from '../../assets/icons/catAvatar.png'
import dogAvatar from '../../assets/icons/dogAvatar.png'
import penguinAvatar from '../../assets/icons/penguinAvatar.png'
import spidermanAvatar from '../../assets/icons/spidermanAvatar.png'

export type TrendingInfo = {
  id: string
  avatar: string
  username: string
  projectName: string
}

export const trendingList: TrendingInfo[] = [
  {
    id: uuid(),
    avatar: dogAvatar,
    username: '@tegan',
    projectName: 'World Peace Builder',
  },
  {
    id: uuid(),
    avatar: catAvatar,
    username: '@morgan',
    projectName: 'Super Cool Project',
  },
  {
    id: uuid(),
    avatar: spidermanAvatar,
    username: '@kendall',
    projectName: 'Life Changing App',
  },
  {
    id: uuid(),
    avatar: penguinAvatar,
    username: '@alex',
    projectName: 'No Traffic Maker',
  },
]
