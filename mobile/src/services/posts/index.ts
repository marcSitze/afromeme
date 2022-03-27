import config from "../../config";

export const getPosts = async () => {
  const result = await fetch(config.API + '/api/posts');
  return result;
}