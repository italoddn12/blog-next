import { DiscussionEmbed } from 'disqus-react';
import { SITE_URL_LOCAL } from '../config/app-config';
import { Container } from './styled';

export type CommentsProps = {
  slug: string;
  title: string;
};

export const Comments = ({ slug, title }: CommentsProps) => {
  return (
    <Container>
      <DiscussionEmbed
        shortname="meublog-14"
        config={{
          url: `${SITE_URL_LOCAL}/post/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Container>
  );
};
