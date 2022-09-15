import React, { useContext } from 'react';
import { makeStyles, Theme, Container } from '@material-ui/core';
import LayoutContext from '@src/layout-context';
import { PersonFragment } from '@ctf-components/ctf-person/__generated__/PersonFragment';
import CardPerson from '@src/components/card-person/card-person';
import CardLeadership from '@src/components/card-leadership/card-leadership';
import Author from '@src/components/author/author';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

interface CtfPersonPropsInterface extends PersonFragment {
  previousComponent: string | null;
}

const CtfPerson = (props: CtfPersonPropsInterface) => {
  const layout = useContext(LayoutContext);
  const classes = useStyles();
  const isLeadership = props.cardStyle === false;

  return layout.parent === 'quote' ? (
    <div className={classes.root} style={{ maxWidth: layout.containerWidth }}>
      <Author {...props} />
    </div>
  ) : (
    <Container maxWidth={false}>
      <div className={classes.root} style={{ maxWidth: layout.containerWidth }}>
        {isLeadership ? (
          <CardLeadership {...props} />
        ) : (
          <CardPerson {...props} />
        )}
      </div>
    </Container>
  );
};

export default CtfPerson;
