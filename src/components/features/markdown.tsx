import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React from 'react';
import parse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import breaks from 'remark-breaks';
import { unified } from 'unified';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    ...theme.typography.body1,
    ...theme.typography.body2,
    ...theme.typography.h2,
    ...theme.typography.h3,
    ...theme.typography.h4,
    ...theme.typography.h5,
    ...theme.typography.h6,
    '& p': {
      ...theme.typography.body1,
    },
    '& a': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
    },
    '& li': {
      ...theme.typography.body1,
      marginBottom: theme.spacing(3),
    },
    '& strong, b': {
      fontWeight: 600,
    },
  },
}));

const renderer = unified()
  .use(parse)
  .use(breaks)
  .use(rehypeReact, { createElement: React.createElement });
type Props = {
  text: string;
  className?: string;
};

export const Markdown = (props: Props) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, props.className)}>
      {(renderer.processSync(props.text) as any).result}
    </div>
  );
};
