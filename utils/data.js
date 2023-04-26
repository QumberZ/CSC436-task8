const getCurrentUser = () => {
  return {
    id: 1,
    email: "mgargano@gmail.com",
    name: "Mat Gargano",
    bio: "The quick brown fox.....",
    avatar: "https://placebear.com/200/200",
  };
};

const getLinks = (userId) => {
  return [
    {
      id: 1,
      userId: 1,
      url: "https://twitter.com/foobar",
      order: 4,
      linkType: "social",
      title: "Twitter",
    },
    {
      id: 2,
      userId: 1,
      url: "https://facebook.com/foobar",
      order: 2,
      linkType: "social",
      title: "Facebook",
    },
    {
      id: 3,
      userId: 1,
      url: "https://instagram.com/foobar",
      order: 3,
      linkType: "social",
      title: "Instagram",
    },
    {
      id: 4,
      userId: 1,
      url: "https://Snapchat.com/foobar",
      order: 1,
      linkType: "social",
      title: "Snapchat",
    },
    {
      id: 5,
      userId: 1,
      url: "https://instagram.com/foobar",
      order: 3,
      linkType: "link",
      title: "Instagram Link",
    },
    {
      id: 6,
      userId: 1,
      url: "https://Snapchat.com/foobar",
      order: 1,
      linkType: "link",
      title: "Snapchat Link",
    },
    {
      id: 1,
      userId: 1,
      url: "https://twitter.com/foobar",
      order: 4,
      linkType: "link",
      title: "Twitter Link",
    },
    {
      id: 2,
      userId: 1,
      url: "https://facebook.com/foobar",
      order: 2,
      linkType: "link",
      title: "Facebook Link",
    },
  ];
};

const getLinksFiltered = (userId, by) => {
  if (!["social", "link"].includes(by)) {
    return false;
  }

  return getLinks()
    .filter(({ linkType }) => linkType === by)
    .sort((a, b) => a.order - b.order);
};

const getSocialLinks = (userId) => {
  return getLinksFiltered(userId, "social");
};

const getLinksLinks = (userId) => {
  return getLinksFiltered(userId, "link");
};

export { getLinksLinks, getSocialLinks, getCurrentUser };
