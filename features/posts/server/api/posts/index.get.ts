import { postService } from "@/../features/posts/services/posts.service";

export default cachedEventHandler(
  async () => {
    return await postService.getAll();
  },
  {
    maxAge: 60 * 60,
    swr: true,
  }
);
