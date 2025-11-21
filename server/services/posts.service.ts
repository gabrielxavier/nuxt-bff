import { apiService } from '@/../server/services/http/api.service'
import type { Post, PostsFilters } from '@/../server/types/post'

export const postService = {
  getAll: async (filters?: PostsFilters): Promise<Post[]> => {
    const data = await apiService<Post[]>('/posts', { params: filters })
    return data
  },
  getById: async (id: number): Promise<Post> => {
    const data = await apiService<Post>(`/posts/${id}`)
    return data
  }
}
