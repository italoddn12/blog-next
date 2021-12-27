import { Container, PostCardCover, PostCardHeading } from './styled';
import Link from 'next/link';
import { SITE_URL } from '../../config/app-config';

export type PostCardProps = {
  slug: string;
  tittle: string;
  cover: string;
};

export const PostCard = ({ slug, tittle, cover }: PostCardProps) => {
  return (
    <Container>
      <PostCardCover>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a>
            <img src={`${SITE_URL}${cover}`} alt={tittle} />
          </a>
        </Link>
      </PostCardCover>

      <PostCardHeading>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a>{tittle}</a>
        </Link>
      </PostCardHeading>
    </Container>
  );
};
