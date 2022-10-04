import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Page from './collections/Page';
import Media from './collections/Media';
import Navigation from './globals/Navigation';

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    Page,
    Media,
  ],
  globals: [
    Navigation,
  ],
  localization: {
    locales: [
      'en-US',
      'pl-PL',
    ],
    defaultLocale: 'pl-PL',
    fallback: true,
  },
});
