// Projects.tsx

import { ProjectInfo, projectList } from './projectList'
import './Projects.scss'
import Icon from '@mdi/react';
import { mdiStarPlusOutline, mdiEyePlusOutline, mdiSourceFork } from '@mdi/js';


export default function Projects () {
  return (
    <div className='projects-container'>
      <h4 className='projects-header'>Your Projects</h4>
      <div className='projects'>
        {projectList && projectList.map((project: ProjectInfo) => {
          return (
            <div key={project.id} className='project'>
              <div className='project__stripe'></div>
              <h5 className='project__title'>{project.title}</h5>
              <p className='project__description'>{project.description}</p>
              <div className='project__icons'>
                <Icon className='project__icon' path={mdiStarPlusOutline} size={0.8} />
                <Icon className='project__icon' path={mdiEyePlusOutline} size={0.8} />
                <Icon className='project__icon' path={mdiSourceFork} size={0.8} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
