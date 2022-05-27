import config from "../../config";

export const getPosts = async () => {
  console.log('getPostsService...');
  try {
    const result = await fetch(config.API + '/api/posts');
    const data = await result.json();
    return data;
  } catch (err) {
    console.error('GetPostsServicee: ', err);
  }
}