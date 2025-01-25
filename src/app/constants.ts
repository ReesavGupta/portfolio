export const commands = [
  'help',
  'about',
  'socials',
  'skills',
  'projects',
  'resume',
  'experience',
  'goals',
  'clicks',
  'clear',
  'blogs',
]

import { About } from '@/app/components/about'
import { Socials } from '@/app/components/socials'
import { Help } from '@/app/components/help'
import Skills from './components/skills'
import projects from './components/projects'
import Resume from './components/resume'
import Experience from './components/experience'
import Goals from './components/goals'
import Clicks from './components/Clicks'
import Blogs from './components/blogs'

export const commandComponents: { [key: string]: React.FC } = {
  help: Help,
  about: About,
  socials: Socials,
  skills: Skills,
  projects: projects,
  resume: Resume,
  experience: Experience,
  goals: Goals,
  click: Clicks,
  blogs: Blogs,
}
