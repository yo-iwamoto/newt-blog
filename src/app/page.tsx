import { newtCdnClient } from '@/lib/newt';
import { k } from '@kuma-ui/core';
import Link from 'next/link';
import type { Blog } from '@/types/types';

export const revalidate = 86400;

export default async function Page() {
  const res = await newtCdnClient.getContents<Blog>({
    appUid: 'blog',
    modelUid: 'article',
  });

  console.log(res);
  return (
    <main>
      <k.ul display='grid' gap={4} maxWidth={800} mx='auto' my={20}>
        {res.items.map((item) => (
          <li key={item._id}>
            <Link href={`/entries/${item._id}`}>
              <p>{item.title}</p>
            </Link>
          </li>
        ))}
      </k.ul>
    </main>
  );
}
