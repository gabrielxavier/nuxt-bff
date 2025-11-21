export default cachedEventHandler(
  async () => {
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
