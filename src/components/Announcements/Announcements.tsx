// Announcements.tsx

import { AnnouncementInfo, announcementList } from './announcementList'
import './Announcements.scss'

export default function Announcements () {
  return (
    <div className='announcements-container'>
      <h4 className='announcements-header'>Announcements</h4>
      <div className='announcements'>
        {announcementList.map((announcement: AnnouncementInfo, index: number) => (
          <div key={announcement.id}>
            <div className='announcements__group'>
              <h5 className='announcements__title'>{announcement.title}</h5>
              <p className='announcements__description'>{announcement.description}</p>
            </div>
            {index < announcementList.length - 1 && <hr className='announcements__line'/>}
          </div>
        ))}
      </div>
    </div>
  )
}
