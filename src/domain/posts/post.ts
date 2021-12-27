export type PostID = number;

export type PostData = {
  id: PostID;
  attributes: PostAtributes;
};

export type PostAtributes = {
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: CoverData;
  authors: {
    data: [
      {
        id: PostID;
        attributes: AuthorAtributes;
      },
    ];
  };
  category: {
    data: CategoryData;
  };
};

export type CoverData = {
  data: {
    id: PostID;
    attributes: CoverAtributes;
  };
};

export type CoverAtributes = {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: PostCoverFormatThumbnail;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
};

export type PostCoverFormatThumbnail = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
};

export type AuthorAtributes = {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type CategoryData = {
  id: PostID;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};
