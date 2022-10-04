import { CollectionConfig, Block } from 'payload/types';

const RichTextBlock: Block = {
  slug: 'richText',
  labels: {
    singular: 'Rich Text',
    plural: 'Rich Text Blocks',
  },
  fields: [
    {
      name: 'content',
      localized: true,
      type: 'richText',
    },
  ],
};

const LocalizedRichText: CollectionConfig = {
  slug: 'localizedRichText',
  labels: {
    singular: 'LocalizedRichText',
    plural: 'LocalizedRichTexts',
  },
  fields: [
    {
      label: 'Test Rich Text',
      name: 'richText',
      type: 'richText',
      localized: true,
      required: true,
    },
    {
      label: 'Test Rich Text in Blocks',
      name: 'richTextBlocks',
      type: 'blocks',
      blocks: [RichTextBlock],
    },
  ],
};

export default LocalizedRichText;
