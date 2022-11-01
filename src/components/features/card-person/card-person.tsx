import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { Avatar } from '@src/components/features/avatar';
import { PersonFieldsFragment } from '@src/components/features/ctf-components/ctf-person/__generated/ctf-person.generated';
import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';
import LayoutContext, { defaultLayout } from '@src/layout-context';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  avatar: {
    flexShrink: 0,
    marginRight: theme.spacing(13),
    width: '10rem',
  },
  name: {
    fontSize: '1.8rem',
    lineHeight: 1.333,
    marginBottom: theme.spacing(2),
    marginTop: 0,
  },
  bio: {
    color: '#797979',
    '& p': {
      fontSize: '1.8rem',
      lineHeight: 1.333,
    },
  },
}));

export const CardPerson = ({ name, bio, avatar }: PersonFieldsFragment) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {avatar && (
        <div className={classes.avatar}>
          <Avatar asset={avatar} />
        </div>
      )}
      <div>
        {name && <p className={classes.name}>{name}</p>}
        {bio && (
          <LayoutContext.Provider value={{ ...defaultLayout, parent: 'card-person' }}>
            <div>
              <CtfRichtext {...bio} className={classes.bio} />
            </div>
          </LayoutContext.Provider>
        )}
      </div>
    </div>
  );
};
