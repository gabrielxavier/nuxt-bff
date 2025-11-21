import { http } from '@/../server/features/shared/http-client'
import type { User } from './user'

export const userService = {
  getAll: async (): Promise<User[]> => {
    return await http<User[]>('/users')
  },
  getById: async (id: number): Promise<User> => {
    return await http<User>(`/users/${id}`)
  },
}
