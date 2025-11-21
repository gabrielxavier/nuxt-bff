import { albumService } from "@/../server/services/albums.service";

export default cachedEventHandler(
  async () => {
    return await albumService.getAll();
  },
  {
    maxAge: 60 * 60,
    swr: true,
  }
);
