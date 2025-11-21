import { postService } from "@/../server/services/posts.service";

export default cachedEventHandler(
  async (event) => {
    const id = Number(getRouterParam(event, "id"));

    return await postService.getById(id);
  },
  {
    maxAge: 60 * 60,
    swr: true,
  }
);
