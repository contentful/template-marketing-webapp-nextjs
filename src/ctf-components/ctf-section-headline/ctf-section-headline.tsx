import { Theme, Typography } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

import { Markdown } from '@src/components/features/markdown';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(4, 0, 2),
    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(6, 0),
    },
  },

  headline: {
    marginBottom: theme.spacing(3),
    fontWeight: 'bold',
  },

  subline: {},

  centered: {
    '& $headline': {
      textAlign: 'center',
    },
    '& $subline': {
      textAlign: 'center',
    },
  },
}));

type Props = {
  sectionHeadline?: string | null;
  sectionSubline?: string | null;
  headerAlignment?: string | null; // 'Left-aligned | 'Center-aligned'
};
export type SectionHeadlinesProps = Props;

const CtfSectionHeadline = (props: Props) => {
  const classes = useStyles();

  if (!props.sectionHeadline && !props.sectionSubline) return <></>;
  const centered = props.headerAlignment === 'Center-aligned';

  return (
    <div className={clsx(classes.root, { [classes.centered]: centered })}>
      {props.sectionHeadline && (
        <Typography className={classes.headline} variant="h3">
          {props.sectionHeadline}
        </Typography>
      )}
      {props.sectionSubline && <Markdown className={classes.subline} text={props.sectionSubline} />}
    </div>
  );
};

export default CtfSectionHeadline;
