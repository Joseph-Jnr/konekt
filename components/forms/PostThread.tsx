'use client'

import * as z from 'zod'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormDescription,
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

interface AccountProfileProps {
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
        className='flex flex-col justify-start gap-10'
      >
        <FormField
          control={form.control}
          name='post'
          render={({ field }) => (
            <FormItem className='flex flex-col gap-3 w-full'>
              <FormControl className='no-focus border border-dark-4 bg-dark-3 text-light-1'>
                <Textarea
                  placeholder="What's on your mind?"
                  rows={10}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit' className='bg-purple-500'>
          Post
        </Button>
      </form>
    </Form>
  )
}

export default PostThread