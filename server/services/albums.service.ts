import { apiService } from '@/../server/services/http/api.service'
import type { Album } from '@/../server/types/album'

export const albumService = {
  getAll: async (): Promise<Album[]> => {
    return await apiService<Album[]>('/albums')
  },
  getById: async (id: number): Promise<Album> => {
    return await apiService<Album>(`/albums/${id}`)
  },
}
