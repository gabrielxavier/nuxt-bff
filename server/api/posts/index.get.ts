import { postService } from "@/../server/features/posts/posts.service";

export default cachedEventHandler(
  async () => {
    return await postService.getAll();
  },
  {
    maxAge: 60 * 60,
    swr: true,
  }
);
