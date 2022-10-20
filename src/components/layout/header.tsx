import { Menu } from '@mui/icons-material';
import { AppBar, Container, IconButton, Theme, Toolbar, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { CtfNavigationGql } from '@ctf-components/ctf-navigation/ctf-navigation-gql';
import Link from '@src/components/link/link';
import Logo from '@src/icons/colorful-coin-logo.svg';
import { HEADER_HEIGHT, HEADER_HEIGHT_MD, CONTAINER_WIDTH } from '@src/theme';

const useStyles = makeStyles((theme: Theme) => ({
  appbar: {
    boxShadow: '0 2px 6px #00000021',
  },
  toolbar: {
    height: HEADER_HEIGHT_MD,
    [theme.breakpoints.up('md')]: {
      height: HEADER_HEIGHT,
    },
  },
  toolbarContent: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'space-between',
  },
  logo: {
    display: 'block',
    maxWidth: '120px',
    height: 'auto',
  },
  menuWrapper: {
    alignItems: 'center',
    display: 'flex',
  },
  accountMenu: {
    alignItems: 'center',
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },

  accountMenuItem: {
    '& + &': {
      marginLeft: theme.spacing(8),

      [theme.breakpoints.up('lg')]: {
        marginLeft: theme.spacing(10),
      },
    },
    '& .MuiButton-startIcon': {
      marginRight: '0.4rem',
    },
    '& .MuiButton-iconSizeSmall > :first-child': {
      fontSize: '1.5rem',
    },
  },
  corporateLogo: {
    display: 'block',
    height: 'auto',
    width: '113px',
  },
}));

interface HeaderPropsInterface {
  onMenuClick?: () => any;
}

const Header = (props: HeaderPropsInterface) => {
  const { onMenuClick } = props;
  const classes = useStyles();

  return (
    <AppBar position="sticky" color="secondary" className={classes.appbar}>
      <Toolbar>
        <Container
          className={classes.toolbarContent}
          disableGutters
          maxWidth={false}
          style={{
            maxWidth: `${CONTAINER_WIDTH / 10}rem`,
          }}>
          <Link href="/" withoutMaterial>
            <Logo className={classes.corporateLogo} />
          </Link>
          <Box display={{ xs: 'none', md: 'block' }}>
            <div className={classes.menuWrapper}>
              <CtfNavigationGql />
            </div>
          </Box>
        </Container>

        {/* menu button */}
        <Box display={{ md: 'none' }}>
          <IconButton onClick={() => onMenuClick && onMenuClick()}>
            <Menu />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
