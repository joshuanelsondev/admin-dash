// Homepage.tsx

import Announcements from '../components/Announcements/Announcements'
import Projects from '../components/Projects/Projects'
import Trending from '../components/Trending/Trending'

export default function Homepage() {
  return (
    <div className='homepage'>
      <Projects/>
      <Announcements/>
      <Trending/>
    </div>
  )
}
