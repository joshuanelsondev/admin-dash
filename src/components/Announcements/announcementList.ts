// announcementList.ts

import { v4 as uuid } from 'uuid'

export type AnnouncementInfo = {
  id: string
  title: string
  description: string
}

export const announcementList: AnnouncementInfo[] = [
  {
    id: uuid(),
    title: 'Site Maintenance',
    description: 'Amet ipsam doloribus nemo recusandae odit. Facilis incidunt ad sit voluptatum nihil dolor nisi.'
  },
  {
    id: uuid(),
    title: 'Community Share Day',
    description: 'Adipisicing alias eaque sapiente placeat deleniti Corporis exercitationem dolor labore est quae.'
  },
  {
    id: uuid(),
    title: 'Updated Privacy Policy',
    description: 'Consectetur voluptatum lorem sequi magni aliquam Illum corporis corrupti impedit provident.'
  },
]
