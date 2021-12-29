import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const getCategoryPosts = async (query = ''): Promise<PostData[]> => {
  const url = `https://protected-coast-85961.herokuapp.com/api/posts?${query}`;
  const posts = await fetchJson<PostData[]>(url);
  return posts;
};
