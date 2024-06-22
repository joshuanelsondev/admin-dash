// projectList.ts

import { v4 as uuid } from 'uuid'

export type ProjectInfo = {
  id: string
  title: string
  description: string
}

export const projectList: ProjectInfo[] = [
  {
    id: uuid(),
    title: 'Super Cool Project',
    description: 'Tincidunt ornare massa eget egestas purus viverra accumsan. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. ' ,
  },
  {
    id: uuid(),
    title: 'Less Cool Project',
    description: 'Raesent semper feugiat nibh sed pulvinar proin gravida. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus.',
  },
  {
    id: uuid(),
    title: 'Impossible App',
    description: 'Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi.',
  },
  {
    id: uuid(),
    title: 'Easy Peasy App',
    description: 'At quis risus sed vulputate odio ut enim. Facilisis leo vel fringilla est ullamcorper eget. Venenatis urna cursus eget nunc scelerisque.',
  },
  {
    id: uuid(),
    title: 'Ad Blocker',
    description: 'Est placerat in egestas erat imperdiet sed euismod nisi porta. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing.',
  },
  {
    id: uuid(),
    title: 'Money Maker',
    description: 'Massa eget egestas purus viverra. Tellus elementum sagittis vitae et leo duis.',
  },
]

