export async function fetchPosts() {
  // console.log(new Date().toLocaleTimeString());
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  console.table(posts);

  // console.log(new Date().toLocaleTimeString());
};