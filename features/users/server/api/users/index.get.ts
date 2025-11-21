import { userService } from "@/../features/users/services/users.service";

export default cachedEventHandler(
  async () => {
    return await userService.getAll();
  },
  {
    maxAge: 60 * 60,
    swr: true,
  }
);
