import { request } from "./request";

const __BASE_URL = 'https://cno-documention.ghost.io/ghost/api/v4/content/';
const __API_KEY = '72bf9fc7b0aabcceec343c7eaa';



export const getAllPosts = () => request(`${__BASE_URL}posts/?key=${__API_KEY}&include=tags&order=published_at%20asc`);