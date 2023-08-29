type ModelSys = {
  raw: {
    createdAt: string;
    updatedAt: string;
    firstPublishedAt: string;
    publishedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

type ModelBase = {
  _id: string;
  _sys: ModelSys;
};

export type Blog = ModelBase & {
  title: string;
  slug: string;
  body: string;
  coverImage: {
    _id: string;
    altText: string;
    description: string;
    fileName: string;
    fileSize: number;
    fileType: string;
    height: number;
    metadata: unknown;
    src: string;
    title: string;
    width: number;
  } | null;
  author: ModelBase & {
    fullName: string;
    slug: string;
    biography: string;
    profileImage: string | null;
  };
  tags: (ModelBase & {
    name: string;
    slug: string;
  })[];
};
