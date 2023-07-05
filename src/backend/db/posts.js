import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils.js";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "R2lAuXvK7V",
    content:
        "Success is stumbling from failure to failure with no loss of enthusiasm. Love this quote by Winston Churchill.",
    mediaURL: "",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "LCrc9f0Zl0",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651563581/socialmedia/avatars/carl-smith_mehw0u.webp",
          firstName: "Carl",
          lastName: "Smith",
          username: "carlsmith",
          createdAt: "2022-01-03T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "t7cZfWIp-q",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp",
          createdAt: "2022-01-01T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "79Gksh9otl",
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554207/socialmedia/avatars/john-doe_gbkuda.webp",
          createdAt: "2022-01-02T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "41c8585c-5fab-4748-83c2-fb07bde54b86",
          avatarUrl: "https://res.cloudinary.com/dyzu4lzqz/image/upload/v1687356575/sociogram/xfiwt6zmylz1pcy93fih.png",
          firstName: "Niket",
          lastName: "Mishra",
          username: "niketmishra",
          createdAt: "2022-01-01T10:55:06+05:30",
          updatedAt: "2023-07-01T13:04:27+05:30",
          followers: [],
          following: []
        }
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "janedoe",
    createdAt: "2022-05-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "G5xd30tMCR",
    content:
        "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    mediaURL: "",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "LCrc9f0Zl0",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651563581/socialmedia/avatars/carl-smith_mehw0u.webp",
          firstName: "Carl",
          lastName: "Smith",
          username: "carlsmith",
          createdAt: "2022-01-03T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "t7cZfWIp-q",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp",
          createdAt: "2022-01-01T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "79Gksh9otl",
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554207/socialmedia/avatars/john-doe_gbkuda.webp",
          createdAt: "2022-01-02T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "alexmaxwell",
    createdAt: "2022-02-14T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "lF8cnfPAe9",
    content:
        "Life is like riding a bicycle. To keep your balance you must keep moving.",
    mediaURL: "",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          _id: "LCrc9f0Zl0",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651563581/socialmedia/avatars/carl-smith_mehw0u.webp",
          firstName: "Carl",
          lastName: "Smith",
          username: "carlsmith",
          createdAt: "2022-01-03T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "t7cZfWIp-q",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp",
          createdAt: "2022-01-01T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "79Gksh9otl",
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554207/socialmedia/avatars/john-doe_gbkuda.webp",
          createdAt: "2022-01-02T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "41c8585c-5fab-4748-83c2-fb07bde54b86",
          avatarUrl: "https://res.cloudinary.com/dyzu4lzqz/image/upload/v1687356575/sociogram/xfiwt6zmylz1pcy93fih.png",
          firstName: "Niket",
          lastName: "Mishra",
          username: "niketmishra",
          createdAt: "2022-01-01T10:55:06+05:30",
          updatedAt: "2023-07-01T13:04:27+05:30",
          followers: [],
          following: []
        }
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "niketmishra",
    createdAt: "2022-01-15T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "stfTkUi2Nt",
    content:
        "“Do not wait for the perfect time and place to enter, for you are already onstage.",
    mediaURL: "",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "LCrc9f0Zl0",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651563581/socialmedia/avatars/carl-smith_mehw0u.webp",
          firstName: "Carl",
          lastName: "Smith",
          username: "carlsmith",
          createdAt: "2022-01-03T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "t7cZfWIp-q",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp",
          createdAt: "2022-01-01T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        }
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "sophiajones",
    createdAt: "2022-05-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "quiTkUi2Nt",
    content: "It is a rough road that leads to the heights of greatness.",
    mediaURL: "",
    likes: {
      likeCount: 6,
      likedBy: [
        {
          _id: "LCrc9f0Zl0",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651563581/socialmedia/avatars/carl-smith_mehw0u.webp",
          firstName: "Carl",
          lastName: "Smith",
          username: "carlsmith",
          createdAt: "2022-01-03T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "t7cZfWIp-q",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp",
          createdAt: "2022-01-01T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "79Gksh9otl",
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554207/socialmedia/avatars/john-doe_gbkuda.webp",
          createdAt: "2022-01-02T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "41c8585c-5fab-4748-83c2-fb07bde54b86",
          avatarUrl: "https://res.cloudinary.com/dyzu4lzqz/image/upload/v1687356575/sociogram/xfiwt6zmylz1pcy93fih.png",
          firstName: "Niket",
          lastName: "Mishra",
          username: "niketmishra",
          createdAt: "2022-01-01T10:55:06+05:30",
          updatedAt: "2023-07-01T13:04:27+05:30",
          followers: [],
          following: []
        }
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "janedoe",
    createdAt: "2022-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "tHaThLyFQh",
    content:
        "Life has got all those twists and turns. You’ve got to hold on tight and off you go.",
    mediaURL: "",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "t7cZfWIp-q",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp",
          createdAt: "2022-01-01T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        }
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalika",
    createdAt: "2022-04-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "G-Gi3lSZP9",
    content: "When you have a dream, you’ve got to grab it and never let go.",
    mediaURL: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalika",
    createdAt: "2022-05-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "GeMUAdi9mh",
    content:
        "No matter what people tell you, words and ideas can change the world.",
    mediaURL: "",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "LCrc9f0Zl0",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651563581/socialmedia/avatars/carl-smith_mehw0u.webp",
          firstName: "Carl",
          lastName: "Smith",
          username: "carlsmith",
          createdAt: "2022-01-03T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "t7cZfWIp-q",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp",
          createdAt: "2022-01-01T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        }
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalika",
    createdAt: "2022-03-06T12:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "IyUlYXTrzZ",
    content: "Who's up for Pineapple Pastry?",
    mediaURL:
        "https://res.cloudinary.com/dtrjdcrme/image/upload/v1647014828/ecommerce/pineapplemuffin1.webp",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6nIffvImxo",
        username: "sophiajones",
        text: "Oh! That looks Delicious!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "niketmishra",
    createdAt: "2022-04-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "Ie92xOSVeU",
    content:
        "Check out this amazing video from BakinZone https://bakinzone.netlify.app/videos/qtlhdIfojmc",
    mediaURL: "",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "79Gksh9otl",
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554207/socialmedia/avatars/john-doe_gbkuda.webp",
          createdAt: "2022-01-02T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6fgd534s",
        username: "janedoe",
        text: "Yes! I am also learning from there!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "alexmaxwell",
    createdAt: "2022-04-12T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "xhzTkUyfNt",
    content: "Believe in yourself! Rest all will fall in place.",
    mediaURL: "",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          _id: "LCrc9f0Zl0",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651563581/socialmedia/avatars/carl-smith_mehw0u.webp",
          firstName: "Carl",
          lastName: "Smith",
          username: "carlsmith",
          createdAt: "2022-01-03T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "t7cZfWIp-q",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp",
          createdAt: "2022-01-01T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "79Gksh9otl",
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554207/socialmedia/avatars/john-doe_gbkuda.webp",
          createdAt: "2022-01-02T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "41c8585c-5fab-4748-83c2-fb07bde54b86",
          avatarUrl: "https://res.cloudinary.com/dyzu4lzqz/image/upload/v1687356575/sociogram/xfiwt6zmylz1pcy93fih.png",
          firstName: "Niket",
          lastName: "Mishra",
          username: "niketmishra",
          createdAt: "2022-01-01T10:55:06+05:30",
          updatedAt: "2023-07-01T13:04:27+05:30",
          followers: [],
          following: []
        }
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "unImWvIzbf",
        username: "niketmishra",
        text: "So True!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "sophiajones",
    createdAt: "2022-05-15T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "CCmJpDnnQQ",
    content:
        "You can get everything in life you want if you will just help enough other people get what they want.",
    mediaURL: "",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "LCrc9f0Zl0",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651563581/socialmedia/avatars/carl-smith_mehw0u.webp",
          firstName: "Carl",
          lastName: "Smith",
          username: "carlsmith",
          createdAt: "2022-01-03T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "t7cZfWIp-q",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp",
          createdAt: "2022-01-01T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "79Gksh9otl",
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554207/socialmedia/avatars/john-doe_gbkuda.webp",
          createdAt: "2022-01-02T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "niketmishra",
    createdAt: "2022-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "Z_TZT_3EAw",
    content:
        "If you believe something needs to exist, if it's something you want to use yourself, don't let anyone ever stop you from doing it.",
    mediaURL: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "johndoe",
    createdAt: "2022-01-12T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "e-knMEsoLq",
    content: "More is lost by indecision than wrong decision.",
    mediaURL: "",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "79Gksh9otl",
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554207/socialmedia/avatars/john-doe_gbkuda.webp",
          createdAt: "2022-01-02T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "alexmaxwell",
    createdAt: "2022-01-26T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "VY14RsXC7G",
    content:
        "The reason we struggle with insecurity is because we compare our behind-the-scenes with everyone else’s highlight reel.",
    mediaURL: "",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "LCrc9f0Zl0",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651563581/socialmedia/avatars/carl-smith_mehw0u.webp",
          firstName: "Carl",
          lastName: "Smith",
          username: "carlsmith",
          createdAt: "2022-01-03T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "t7cZfWIp-q",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp",
          createdAt: "2022-01-01T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "79Gksh9otl",
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554207/socialmedia/avatars/john-doe_gbkuda.webp",
          createdAt: "2022-01-02T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "carlsmith",
    createdAt: "2022-03-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "l9pedEMjZS",
    content: "If you don’t risk anything, you risk even more.",
    mediaURL: "",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "LCrc9f0Zl0",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651563581/socialmedia/avatars/carl-smith_mehw0u.webp",
          firstName: "Carl",
          lastName: "Smith",
          username: "carlsmith",
          createdAt: "2022-01-03T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "t7cZfWIp-q",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp",
          createdAt: "2022-01-01T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        }
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "sophiajones",
    createdAt: "2022-04-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "lbW4dlCpNC",
    content: "If it makes you nervous, you’re doing it right.",
    mediaURL: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "niketmishra",
    createdAt: "2022-04-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "k-Vwd2d7Vt",
    content:
        "I learned a long time ago that there is something worse than missing the goal, and that’s not pulling the trigger.",
    mediaURL: "",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          _id: "LCrc9f0Zl0",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651563581/socialmedia/avatars/carl-smith_mehw0u.webp",
          firstName: "Carl",
          lastName: "Smith",
          username: "carlsmith",
          createdAt: "2022-01-03T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "t7cZfWIp-q",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp",
          createdAt: "2022-01-01T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "79Gksh9otl",
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554207/socialmedia/avatars/john-doe_gbkuda.webp",
          createdAt: "2022-01-02T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "carlsmith",
    createdAt: "2022-01-14T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "xhzTkUi2Nt",
    content: "Nice Weather Today!!",
    mediaURL: "",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          _id: "LCrc9f0Zl0",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651563581/socialmedia/avatars/carl-smith_mehw0u.webp",
          firstName: "Carl",
          lastName: "Smith",
          username: "carlsmith",
          createdAt: "2022-01-03T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "t7cZfWIp-q",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp",
          createdAt: "2022-01-01T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "79Gksh9otl",
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554207/socialmedia/avatars/john-doe_gbkuda.webp",
          createdAt: "2022-01-02T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "okzxcf",
        username: "janedoe",
        text: "I agree!! Feels like we should go for outing. What say?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "niketmishra",
    createdAt: "2022-01-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "siFFxfYI1s",
    content: "Started my Baking journey! Look what I made.",
    mediaURL:
        "https://res.cloudinary.com/dtrjdcrme/video/upload/v1652188886/upload-socialmedia/oikev6eomsgahnvxcijd.mp4",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "carlsmith",
    createdAt: "2022-05-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "xhzTkUi2Nti",
    content: "What’s the point of having a voice if you’re gonna be silent in those moments you shouldn’t be?",
    mediaURL: "",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "LCrc9f0Zl0",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651563581/socialmedia/avatars/carl-smith_mehw0u.webp",
          firstName: "Carl",
          lastName: "Smith",
          username: "carlsmith",
          createdAt: "2022-01-03T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "t7cZfWIp-q",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp",
          createdAt: "2022-01-01T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "79Gksh9otl",
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554207/socialmedia/avatars/john-doe_gbkuda.webp",
          createdAt: "2022-01-02T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "okzxcf9s",
        username: "johndoe",
        text: "Yes, You are right!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "41c8585c-5fab-4748-83c2-fb07bde54b86",
        username: "niketmishra",
        text: "I agree ashutosh 👍👍",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      }
    ],
    username: "ashutosh3_3",
    createdAt: "2022-01-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "3XHvLP1fg",
    content: "I made this cake for my friend's birthday. Check it out",
    mediaURL:
        "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652188492/upload-socialmedia/cakegif_q11mfm.webp",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "79Gksh9otl",
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554207/socialmedia/avatars/john-doe_gbkuda.webp",
          createdAt: "2022-01-02T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6nImWvImxo",
        username: "johndoe",
        text: "That's mouth watering! Could you make one for my Birthday as well?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "janedoe",
    createdAt: "2022-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "MTYtVhecCj",
    content:
        "You are never too old to set another goal or to dream a new dream.",
    mediaURL: "",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "LCrc9f0Zl0",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651563581/socialmedia/avatars/carl-smith_mehw0u.webp",
          firstName: "Carl",
          lastName: "Smith",
          username: "carlsmith",
          createdAt: "2022-01-03T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "t7cZfWIp-q",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp",
          createdAt: "2022-01-01T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalika",
    createdAt: "2022-03-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "3XHvLP9kC",
    content: "Yayy! Its my Birthday Today. Made this cake for myself!",
    mediaURL:
        "https://res.cloudinary.com/dtrjdcrme/image/upload/v1647014336/ecommerce/chocolatecake4.webp",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "LCrc9f0Zl0",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651563581/socialmedia/avatars/carl-smith_mehw0u.webp",
          firstName: "Carl",
          lastName: "Smith",
          username: "carlsmith",
          createdAt: "2022-01-03T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "t7cZfWIp-q",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp",
          createdAt: "2022-01-01T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
        {
          _id: "79Gksh9otl",
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          avatarUrl:
              "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554207/socialmedia/avatars/john-doe_gbkuda.webp",
          createdAt: "2022-01-02T10:55:06+05:30",
          updatedAt: formatDate(),
          followers: [],
          following: []
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "EO7iOPN9n8",
        username: "carlsmith",
        text: "Happy Birthday! Enjoy your Day!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "QK52wf6HI1",
        username: "janedoe",
        text: "Wow! Looks Amazzing! Happy Birthday!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "adarshbalika",
    createdAt: "2022-03-15T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "Ie92xOSVeUXR",
    content:
        "उसूलों पर जहाँ आँच आए टकराना ज़रूरी है\nजो ज़िंदा हो तो फिर ज़िंदा नज़र आना ज़रूरी है",
    mediaURL: "",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "41c8585c-5fab-4748-83c2-fb07bde54b86",
          avatarUrl: "https://res.cloudinary.com/dyzu4lzqz/image/upload/v1687356575/sociogram/xfiwt6zmylz1pcy93fih.png",
          firstName: "Niket",
          lastName: "Mishra",
          username: "niketmishra",
          createdAt: "2022-01-01T10:55:06+05:30",
          updatedAt: "2023-07-01T13:04:27+05:30",
          followers: [],
          following: []
        }
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6fgd534s",
        username: "janedoe",
        text: "Good One!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "niketmishra",
    createdAt: "2022-04-12T10:55:06+05:30",
    updatedAt: formatDate(),
  },
];
