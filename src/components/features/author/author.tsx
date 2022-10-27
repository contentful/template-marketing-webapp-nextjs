import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { Avatar } from '@src/components/features/avatar';
import { PersonFieldsFragment } from '@src/components/features/ctf-components/ctf-person/__generated/ctf-person.generated';

const useStyles = makeStyles((theme: Theme) => ({
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

interface AuthorPropsInterface extends PersonFieldsFragment {}

export const Author = (props: AuthorPropsInterface) => {
  const { name, avatar } = props;

  const classes = useStyles();

  return (
    <div>
      {avatar && (
        <div className={classes.avatar}>
          <Avatar asset={avatar} />
        </div>
      )}
      {name && <p className={classes.name}>{name}</p>}
    </div>
  );
};
