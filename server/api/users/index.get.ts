import { userService } from "@/../server/features/users/users.service";

export default cachedEventHandler(
  async () => {
    return await userService.getAll();
  },
  {
    maxAge: 60 * 60,
    swr: true,
  }
);
