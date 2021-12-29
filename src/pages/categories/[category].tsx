import { GetServerSideProps } from 'next';
import HomePage from '../../containers/HomePage';
import { getCategoryPosts } from '../../data/posts/get-category-posts';
import { PostData } from '../../domain/posts/post';

export type CategoryProps = {
  posts: PostData[];
  category: string;
};

export default function Category({ posts, category }: CategoryProps) {
  return <HomePage category={category} posts={posts} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const urlQuery = `populate[category][filters][name][$containsi]=${ctx.query.category}&populate=cover`;
  const allPosts = await getCategoryPosts(urlQuery);
  const posts = [];
  allPosts.forEach((value) => {
    if (value.attributes.category.data !== null) {
      posts.push(value);
    }
  });
  return {
    props: { posts, category: ctx.query.category },
  };
};
