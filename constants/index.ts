import {
  CommunityIcon,
  CreateIcon,
  HeartIcon,
  HomeIcon,
  MembersIcon,
  ReplyIcon,
  RequestIcon,
  SearchIcon,
  TagIcon,
  UserIcon,
} from '@/public/assets'

export const sidebarLinks = [
  {
    imgURL: HomeIcon,
    route: '/',
    label: 'Home',
  },
  {
    imgURL: SearchIcon,
    route: '/search',
    label: 'Search',
  },
  {
    imgURL: HeartIcon,
    route: '/activity',
    label: 'Activity',
  },
  {
    imgURL: CreateIcon,
    route: '/create-thread',
    label: 'Create Post',
  },
  {
    imgURL: CommunityIcon,
    route: '/communities',
    label: 'Communities',
  },
  {
    imgURL: UserIcon,
    route: '/profile',
    label: 'Profile',
  },
]

export const profileTabs = [
  { value: 'threads', label: 'Threads', icon: ReplyIcon },
  { value: 'replies', label: 'Replies', icon: MembersIcon },
  { value: 'tagged', label: 'Tagged', icon: TagIcon },
]

export const communityTabs = [
  { value: 'threads', label: 'Threads', icon: ReplyIcon },
  { value: 'members', label: 'Members', icon: MembersIcon },
  { value: 'requests', label: 'Requests', icon: RequestIcon },
]
