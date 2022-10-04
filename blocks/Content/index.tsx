import React from 'react';
import { Block } from 'payload/types';
import RichText from '../../components/RichText';
import classes from './index.module.css';
import LocalizedRichText from '../../LocalizedRichText';

export type Type = {
  blockType: 'content';
  blockName?: string;
  content: unknown;
};

// export const Content: Block = {
//   slug: 'content',
//   labels: {
//     singular: 'Content',
//     plural: 'Content Blocks',
//   },
//   fields: [
//     {
//       name: 'content',
//       type: 'richText',
//     },
//   ],
// };

export const Content = LocalizedRichText;

export const Component: React.FC<Type> = (props) => {
  const { content } = props;

  return (
    <div className={classes.wrap}>
      <RichText
        content={content}
        className={classes.content}
      />
    </div>
  );
};

export default Content;
