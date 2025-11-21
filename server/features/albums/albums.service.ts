import { http } from '@/../server/features/shared/http-client'
import type { Album } from './album'

export const albumService = {
  getAll: async (): Promise<Album[]> => {
    return await http<Album[]>('/albums')
  },
  getById: async (id: number): Promise<Album> => {
    return await http<Album>(`/albums/${id}`)
  },
}
