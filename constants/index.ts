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
    route: '/create-post',
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
  { value: 'posts', label: 'Posts', icon: ReplyIcon },
  { value: 'replies', label: 'Replies', icon: MembersIcon },
  { value: 'tagged', label: 'Tagged', icon: TagIcon },
]

export const communityTabs = [
  { value: 'posts', label: 'Posts', icon: ReplyIcon },
  { value: 'members', label: 'Members', icon: MembersIcon },
  { value: 'requests', label: 'Requests', icon: RequestIcon },
]
