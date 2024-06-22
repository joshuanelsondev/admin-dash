// Header.tsx
import Icon from '@mdi/react';
import { mdiMagnify, mdiBellRingOutline } from '@mdi/js';
import './Header.scss'
import catAvatar from '../../assets/icons/catAvatar.png'

export default function Header() {
  return (
    <div className='header'>
     <div className='header__top'>
      <form className='header__form' >
        <Icon path={mdiMagnify} size={0.8} />
        <input type="search" className='header__search' />
      </form>
       <div className='header__top-right' >
         <Icon className='header__notifications' title='notifications' path={mdiBellRingOutline} size={0.8}  />
         <img className='header__avatar-sm' src={catAvatar} alt="cat avatar" />
         <div className='header__username-sm'>Morgan Oakley</div>
       </div>
     </div>
     <div className='header__bottom'>
       <div className='header__bottom-left'>
         <img className='header__avatar-lg' src={catAvatar} alt="cat avatar" />
         <div className='header__greet-user'>
           <p className='header__greet'>Hi there,</p>
           <p className='header__username-lg'>Morgan Oakley (@morgan)</p>
         </div>
       </div>
       <div className='header__nav'>
         <button className='header__button'>New</button>
         <button className='header__button'>Upload</button>
         <button className='header__button'>Share</button>
       </div>
     </div>
    </div>
  )
}
