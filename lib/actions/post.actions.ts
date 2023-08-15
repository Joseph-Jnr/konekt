'use server'

import { revalidatePath } from 'next/cache'
import Post from '../models/post.model'
import User from '../models/user.model'
import { connectToDB } from '../mongoose'

interface Props {
  text: string
  author: string
  communityId: string | null
  path: string
}

export async function createPost({ text, author, communityId, path }: Props) {
  try {
    connectToDB()

    const createdPost = await Post.create({
      text,
      author,
      community: null,
    })

    //Update user model
    await User.findByIdAndUpdate(author, {
      $push: { posts: createdPost._id },
    })

    revalidatePath(path)
  } catch (error: any) {
    throw new Error(`Error creating post: ${error.message}`)
  }
}

export async function fetchPosts(pageNumber = 1, pageSize = 20) {
  connectToDB()

  //Calculate the number of posts to skip
  const skipAmount = (pageNumber - 1) * pageSize

  //Fetch posts that have no parents (top-level)
  const postQuery = Post.find({ parentId: { $in: [null, undefined] } })
    .sort({
      createdAt: 'desc',
    })
    .skip(skipAmount)
    .limit(pageSize)
    .populate({ path: 'author', model: User })
    .populate({
      path: 'children',
      populate: {
        path: 'author',
        model: User,
        select: '_id name parentId image',
      },
    })

  const totalPostsCount = await Post.countDocuments({
    parentId: { $in: [null, undefined] },
  })

  const posts = await postQuery.exec()

  const isNext = totalPostsCount > skipAmount + posts.length

  return { posts, isNext }
}
