import { fetchUsers } from "./js/api/fetch-users.js";
import { fetchPosts } from "./js/api/fetch-posts.js";


async function getContent() {
  await fetchPosts();
  fetchUsers();
};

getContent();

console.log('ddwadawdwawa');
