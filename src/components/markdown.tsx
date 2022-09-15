import React from 'react';
import clsx from 'clsx';
import { Theme, makeStyles } from '@material-ui/core';
import { unified } from 'unified';
import parse from 'rehype-parse';
import breaks from 'remark-breaks';
import rehypeReact from 'rehype-react'

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

const renderer = unified().use(parse).use(breaks).use(rehypeReact, {createElement: React.createElement});
interface Props {
  text: string;
  className?: string;
}

const Markdown = (props: Props) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, props.className)}>
      {(renderer.processSync(props.text) as any).result}
    </div>
  );
};

export default Markdown;
