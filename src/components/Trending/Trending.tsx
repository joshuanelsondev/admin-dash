// Trending.tsx

import { TrendingInfo, trendingList } from './trendingList'
import './Trending.scss'

export default function Trending () {
  return (
    <div className='trending-container'>
      <h4 className='trending-header'>Trending</h4>
      <div className='trending'>
        {trendingList.map((trending: TrendingInfo) => {
          return (
            <div key={trending.id} className='trending__group'>
              <img src={trending.avatar} alt="avatar" className='trending__avatar' />
              <div className='trending__text'>
                <p className='trending__username'>{trending.username}</p>
                <p className='trending__projectName'>{trending.projectName}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
