import { GlobalConfig } from 'payload/types';
import link from '../fields/link';

const Navigation: GlobalConfig = {
  slug: 'navigation',
  fields: [
    {
      name: 'nav',
      label: 'Navigation',
      type: 'array',
      fields: [link],
    },
  ],
};

export default Navigation;
