import { http } from '@/../server/features/shared/http-client'
import type { Post, PostsFilters } from './post'

export const postService = {
  getAll: async (filters?: PostsFilters): Promise<Post[]> => {
    const data = await http<Post[]>('/posts', { params: filters })
    return data
  },
  getById: async (id: number): Promise<Post> => {
    const data = await http<Post>(`/posts/${id}`)
    return data
  }
}
