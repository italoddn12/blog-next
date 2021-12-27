import { Container } from './styled';

export type PostCoverProps = {
  coverUrl: string;
  alt: string;
};

export const PostCover = ({ coverUrl, alt }: PostCoverProps) => {
  return (
    <Container
      src={`https://protected-coast-85961.herokuapp.com${coverUrl}`}
      alt={alt}
    />
  );
};
