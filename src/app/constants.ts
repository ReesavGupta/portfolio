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

export const commandComponents: { [key: string]: React.FC } = {
  help: Help,
  about: About,
  socials: Socials,
}
