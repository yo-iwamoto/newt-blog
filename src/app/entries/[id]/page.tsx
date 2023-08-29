import { newtCdnClient } from '@/lib/newt';
import { notFound } from 'next/navigation';
import type { Blog } from '@/types/types';

export const revalidate = 86400;

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const res = await newtCdnClient
    .getContent<Blog>({
      appUid: 'blog',
      modelUid: 'article',
      contentId: id,
    })
    .catch((err) => {
      console.error(err);
      notFound();
    });

  return <h1>{res.title}</h1>;
}
