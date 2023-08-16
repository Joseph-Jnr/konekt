'use client'

import * as z from 'zod'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { usePathname, useRouter } from 'next/navigation'

//import { updateUser } from '@/lib/actions/user.actions'
import { PostValidation } from '@/lib/validations/post'
import { createPost } from '@/lib/actions/post.actions'

interface Prop {
  user: {
    id: string
    objectId: string
    username: string
    name: string
    bio: string
    image: string
  }
  btnTitle: string
}

const PostThread = ({ userId }: { userId: string }) => {
  const router = useRouter()
  const pathname = usePathname()

  const form = useForm({
    resolver: zodResolver(PostValidation),
    defaultValues: {
      post: '',
      accountId: userId,
    },
  })

  const onSubmit = async (values: z.infer<typeof PostValidation>) => {
    await createPost({
      text: values.post,
      author: userId,
      communityId: null,
      path: pathname,
    })

    router.push('/')
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col justify-start gap-4 bg-glassmorphism backdrop-blur-lg  p-5 rounded-lg mb-20'
      >
        <FormField
          control={form.control}
          name='post'
          render={({ field }) => (
            <FormItem className='flex flex-col gap-3 w-full'>
              <FormControl className='no-focus border border-dark-4 bg-dark-3 text-light-1'>
                <Textarea
                  placeholder="What's on your mind?"
                  rows={5}
                  {...field}
                />
              </FormControl>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />

        <Button type='submit' className='bg-purple-500 hover:bg-purple-600'>
          Post
        </Button>
      </form>
    </Form>
  )
}

export default PostThread
