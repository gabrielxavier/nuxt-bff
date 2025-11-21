import { userService } from "@/../server/services/users.service";

export default cachedEventHandler(
  async () => {
    return await userService.getAll();
  },
  {
    maxAge: 60 * 60,
    swr: true,
  }
);
