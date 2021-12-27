import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const countAllPosts = async (): Promise<number> => {
  const url = `${POSTS_URL}`;
  const posts = await fetchJson<PostData[]>(url);
  return posts.length;
};
