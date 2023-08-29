import { env } from '@/config/env';
import { createClient } from 'newt-client-js';

export const newtCdnClient = createClient({
  apiType: 'cdn',
  token: env.NEXT_PUBLIC_NEWT_CDN_API_TOKEN,
  spaceUid: env.NEXT_PUBLIC_NEWT_SPACE_UID,
});
