import { apiService } from '@/../server/services/http/api.service'
import type { User } from '@/../server/types/user'

export const userService = {
  getAll: async (): Promise<User[]> => {
    return await apiService<User[]>('/users')
  },
  getById: async (id: number): Promise<User> => {
    return await apiService<User>(`/users/${id}`)
  },
}
