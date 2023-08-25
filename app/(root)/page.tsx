import PostCard from '@/components/cards/PostCard'
import { fetchPosts } from '@/lib/actions/post.actions'
import { CreateIcon } from '@/public/assets'
import { currentUser } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'

export default async function Home() {
  const result = await fetchPosts(1, 30)
  const user = await currentUser()

  return (
    <div className='relative'>
      <h1 className='head-text text-left'>Home</h1>

      <section className='mt-9 flex flex-col gap-10'>
        {result.posts.length === 0 ? (
          <p className='noresult'>No posts found</p>
        ) : (
          <>
            {result.posts.map((post) => (
              <PostCard
                key={post._id}
                id={post._id}
                currentUserId={user?.id || ''}
                parentId={post.parentId}
                content={post.text}
                author={post.author}
                community={post.community}
                createdAt={post.createdAt}
                comments={post.children}
              />
            ))}
          </>
        )}
      </section>

      <Link
        href='/create-post'
        className='floating-icon w-12 h-12 bg-primary-500 rounded-full fixed right-6 bottom-24 flex items-center justify-center lg:hidden'
      >
        <Image src={CreateIcon} alt='Create Post' />
      </Link>
    </div>
  )
}
