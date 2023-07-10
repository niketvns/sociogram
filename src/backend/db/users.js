import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils.js";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "41c8585c-5fab-4748-83c2-fb07bde54b86",
    firstName: "Niket",
    lastName: "Mishra",
    username: "niketmishra",
    password: "niketmishra@123",
    bio: "Aspiring Full Stack Developer | Frontend Web Developer | React JS | JavaScript",
    bookmarks: [],
    avatarUrl: "https://res.cloudinary.com/dyzu4lzqz/image/upload/v1687356575/sociogram/xfiwt6zmylz1pcy93fih.png",
    bannerUrl: 'https://res.cloudinary.com/dyzu4lzqz/image/upload/v1687381115/sociogram/niketsociogrambanner.jpg',
    website: "https://niketmishra.me/",
    createdAt: "2023-01-01T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "t7cZfWIp-q",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    bio: "Be yourself!",
    bookmarks: [],
    avatarUrl:
        "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp",
    bannerUrl: 'https://res.cloudinary.com/dyzu4lzqz/image/upload/v1688212872/user_banner.png',
    website: "https://romabulani.netlify.app/",
    createdAt: "2023-01-01T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "79Gksh9otl",
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    password: "johndoe123",
    bio: "Hello World",
    bookmarks: [],
    avatarUrl:
        "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554207/socialmedia/avatars/john-doe_gbkuda.webp",
    bannerUrl: 'https://res.cloudinary.com/dyzu4lzqz/image/upload/v1688212872/user_banner.png',
    website: "https://google.com/",
    createdAt: "2023-01-02T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "1T6Be1QpLm",
    firstName: "Jane",
    lastName: "Doe",
    username: "janedoe",
    password: "janedoe123",
    bio: "Whats in bio?",
    bookmarks: [],
    avatarUrl:
        "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554256/socialmedia/avatars/jane-doe_il3cvx.webp",
    bannerUrl: 'https://res.cloudinary.com/dyzu4lzqz/image/upload/v1688212872/user_banner.png',
    website: "https://romabulani.netlify.app/",
    createdAt: "2023-01-01T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "LCrc9f0Zl0",
    firstName: "Carl",
    lastName: "Smith",
    username: "carlsmith",
    password: "carlsmith123",
    bio: "Whats in bio?",
    avatarUrl:
        "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651563581/socialmedia/avatars/carl-smith_mehw0u.webp",
    bannerUrl: 'https://res.cloudinary.com/dyzu4lzqz/image/upload/v1688212872/user_banner.png',
    website: "https://romabulani.netlify.app/",
    createdAt: "2023-01-03T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "o5gzWjEeX_",
    firstName: "Ashutosh",
    lastName: "Singh",
    username: "ashutosh3_3",
    password: "ashutosh@123",
    bio: "Aspiring Frontend Engineer",
    bookmarks: [],
    avatarUrl: "https://res.cloudinary.com/dyzu4lzqz/image/upload/v1687356545/sociogram/b5ezrnlkadn8islkr4xg.jpg",
    bannerUrl: 'https://res.cloudinary.com/dyzu4lzqz/image/upload/v1688212872/user_banner.png',
    website: "https://ashutosh-neog-portfolio.netlify.app/",
    createdAt: "2023-01-04T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "M1NR81Bzlz",
    firstName: "Alex",
    lastName: "Maxwell",
    username: "alexmaxwell",
    password: "alexmaxwell123",
    bio: "What's up?",
    bookmarks: [],
    avatarUrl:
        "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652525373/socialmedia/avatars/alex-maxwell.webp",
    bannerUrl: 'https://res.cloudinary.com/dyzu4lzqz/image/upload/v1688212872/user_banner.png',
    website: "www.google.com",
    createdAt: "2023-01-05T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "qq8zWjEeXd",
    firstName: "Sophia",
    lastName: "Jones",
    username: "sophiajones",
    password: "sophiajones123",
    bio: "Frontend Engineer",
    bookmarks: [],
    avatarUrl:
        "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652525510/socialmedia/avatars/sophia-jones.webp",
    bannerUrl: 'https://res.cloudinary.com/dyzu4lzqz/image/upload/v1688212872/user_banner.png',
    website: "",
    createdAt: "2023-01-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
];
