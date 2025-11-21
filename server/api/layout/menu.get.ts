import { albumService } from "@/../server/services/albums.service";
import { postService } from "@/../server/services/posts.service";
import { userService } from "@/../server/services/users.service";

export default cachedEventHandler(
  async () => {
    await albumService.getAll();
    await postService.getAll();
    await userService.getAll();

    const [a, b, c] = await Promise.all([
      albumService.getAll(),
      postService.getAll(),
      userService.getAll(),
    ]);

    return [
      { label: "Home", url: "/" },
      { label: "Posts", url: "/posts" },
      { label: "Albums", url: "/albums" },
      { label: "Users", url: "/users" },
    ];
  },
  {
    maxAge: 60 * 60,
    swr: true,
  }
);
