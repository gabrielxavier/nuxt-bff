import { http } from '@/../server/shared/http-client'
import type { Post, PostsFilters } from '@/../features/posts/types/post'

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
