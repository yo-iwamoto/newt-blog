import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NEWT_API_TOKEN: z.string(),
  },
  client: {
    NEXT_PUBLIC_NEWT_CDN_API_TOKEN: z.string(),
    NEXT_PUBLIC_NEWT_SPACE_UID: z.string(),
  },
  runtimeEnv: {
    NEWT_API_TOKEN: process.env.NEWT_API_TOKEN,
    NEXT_PUBLIC_NEWT_CDN_API_TOKEN: process.env.NEXT_PUBLIC_NEWT_CDN_API_TOKEN,
    NEXT_PUBLIC_NEWT_SPACE_UID: process.env.NEXT_PUBLIC_NEWT_SPACE_UID,
  },
});
