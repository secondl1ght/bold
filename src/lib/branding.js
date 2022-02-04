const BRANDING = {
  projectName: "The Bold",

  superUserName: "bold",

  urls: {
    base: "bold.gallery",
    www: "www.bold.gallery",
    protocol: "https://bold.gallery",
    external: {
      twitter: "https://twitter.com/bold",
      telegram: "https://t.me/bold",
      blog: "https://blog.bold.gallery/",
      facebook: "https://facebook.com/bold",
      instagram: "https://www.instagram.com/bold/",
      discord: "https://discord.gg/XUxPs3YnQz",
    },
  },

  meta: {
    title: "The Bold",
    keywords: "Bitcoin Liquid NFT Art",
    description:
      "Upload, collect, and transact rare digital art on the Liquid Network",
    image: "https://bold.gallery/splash.png",
    url: "https://bold.gallery/",

    twitter: {
      card: "summary_large_image",
      creator: "@bold",
      site: "@bold",
    },

    artwork: (art) => ({
      title: `The Bold - ${art.title}`,
      image: `/api/ipfs/${art.filename}`,
      url: `https://bold.gallery/a/${art.slug}`,
    }),
  },

  emails: {
    support: "support@bold.gallery",
  },
};

export default BRANDING;
