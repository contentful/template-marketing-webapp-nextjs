import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { PersonFieldsFragment } from '@ctf-components/ctf-person/__generated/ctf-person.generated';
import Avatar from '@src/components/avatar/avatar';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  avatar: {
    display: 'inline-block',
    width: '11.4rem',
  },
  name: {
    fontSize: '2.5rem',
    lineHeight: 1.52,
    marginBottom: 0,
    marginTop: theme.spacing(3),
  },
}));

interface CtfAuthorPropsInterface extends PersonFieldsFragment {}

const CtfAuthor = (props: CtfAuthorPropsInterface) => {
  const { name, avatar } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {avatar && (
        <div className={classes.avatar}>
          <Avatar asset={avatar} />
        </div>
      )}
      {name && <p className={classes.name}>{name}</p>}
    </div>
  );
};

export default CtfAuthor;
