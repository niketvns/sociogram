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
    username: "niketvns",
    password: "niketmishra@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }
];
