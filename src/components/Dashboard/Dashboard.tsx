// Dashboard.tsx
import './Dashboard.scss'
import Icon from '@mdi/react'
import { mdiCardAccountDetailsOutline, mdiNoteMultiple, mdiViewDashboard, mdiHome, mdiMessageReply, mdiClockTimeThree, mdiAccountGroup, mdiCog, mdiHelpBox, mdiShieldCheck} from '@mdi/js';

export default function Dashboard() {
  return (
    <nav className='dashboard'>
      <h2 className='dashboard__header'><Icon path={mdiViewDashboard} size={1.5} />Dashboard</h2>
      <ul className='dashboard__nav-links'>
        <li className='dashboard__link'><Icon path={mdiHome} size={0.80} />Home</li>
        <li className='dashboard__link'><Icon path={mdiCardAccountDetailsOutline} size={0.80} />Profile</li>
        <li className='dashboard__link'><Icon path={mdiMessageReply} size={0.80} />Messages</li>
        <li className='dashboard__link'><Icon path={mdiClockTimeThree} size={0.80} />History</li>
        <li className='dashboard__link'><Icon path={mdiNoteMultiple} size={0.80} />Tasks</li>
        <li className='dashboard__link'><Icon path={mdiAccountGroup} size={0.80} />Communities</li>
      </ul>
      <ul className='dashboard__nav-links'>
        <li className='dashboard__link'><Icon path={mdiCog} size={0.80} />Settings</li>
        <li className='dashboard__link'><Icon path={mdiHelpBox} size={0.80} />Support</li>
        <li className='dashboard__link'><Icon path={mdiShieldCheck} size={0.80} />Privacy</li>
      </ul>
    </nav>
  ) 
}
