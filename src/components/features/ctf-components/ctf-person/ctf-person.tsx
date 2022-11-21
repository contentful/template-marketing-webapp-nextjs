import { Theme, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { PersonFieldsFragment } from './__generated/ctf-person.generated';

import { Author } from '@src/components/features/author';
import { CardLeadership } from '@src/components/features/card-leadership';
import { CardPerson } from '@src/components/features/card-person';
import { useLayoutContext } from '@src/layout-context';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

interface CtfPersonPropsInterface extends PersonFieldsFragment {
  previousComponent: string | null;
}

export const CtfPerson = (props: CtfPersonPropsInterface) => {
  const layout = useLayoutContext();
  const classes = useStyles();
  const isLeadership = props.cardStyle === false;

  return layout.parent === 'quote' ? (
    <div className={classes.root} style={{ maxWidth: layout.containerWidth }}>
      <Author {...props} />
    </div>
  ) : (
    <Container maxWidth={false}>
      <div className={classes.root} style={{ maxWidth: layout.containerWidth }}>
        {isLeadership ? <CardLeadership {...props} /> : <CardPerson {...props} />}
      </div>
    </Container>
  );
};
