import { Menu } from '@mui/icons-material';
import { AppBar, Container, IconButton, Theme, Toolbar, Box, SvgIcon } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'next-i18next';

import { CtfImage } from '@ctf-components/ctf-image/ctf-image';
import { CtfNavigationGql } from '@ctf-components/ctf-navigation/ctf-navigation-gql';
import Link from '@src/components/link/link';
import { HEADER_HEIGHT, HEADER_HEIGHT_MD, CONTAINER_WIDTH } from '@src/theme';
import contentfulConfig from 'contentful.config';

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
}));

interface HeaderPropsInterface {
  onMenuClick?: () => any;
}

const Header = (props: HeaderPropsInterface) => {
  const { t } = useTranslation();
  const { onMenuClick } = props;
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="secondary" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Container
          className={classes.toolbarContent}
          disableGutters
          maxWidth={false}
          style={{
            maxWidth: `${CONTAINER_WIDTH / 10}rem`,
          }}>
          <Link href="/" withoutMaterial>
            <CtfImage
              url={contentfulConfig.header.logo}
              title="Logo"
              width={contentfulConfig.header.logoWidth}
              height={contentfulConfig.header.logoHeight}
            />
          </Link>
          {contentfulConfig.header.menu.length > 0 && (
            <Box display={{ xs: 'none', md: 'block' }}>
              <div className={classes.menuWrapper}>
                <CtfNavigationGql />
                <nav>
                  <ul className={classes.accountMenu}>
                    <li className={classes.accountMenuItem}>
                      <Link
                        href="/sign-up"
                        isButton
                        variant="contained"
                        color="primary"
                        size="small">
                        {t('common.signUp')}
                      </Link>
                    </li>
                    <li className={classes.accountMenuItem}>
                      <Link
                        href="/sign-in"
                        isButton
                        variant="text"
                        color="primary"
                        size="small"
                        startIcon={
                          <SvgIcon fontSize="inherit" viewBox="0 0 14 16">
                            <g clipPath="url(#clip0)" stroke="#000">
                              <path d="M9.447 15.278h-5.75v-.347h5.75a2.85 2.85 0 0 0 2.847-2.847v-8.39A2.85 2.85 0 0 0 9.447.847h-5.75V.5h5.75a3.2 3.2 0 0 1 3.194 3.194v8.39a3.2 3.2 0 0 1-3.194 3.194z" />
                              <path d="M10.28 7.889L6.83 4.44l-.251.251 3.448 3.449.252-.251z" />
                              <path d="M6.83 11.338l3.449-3.449-.251-.251-3.449 3.448.251.252z" />
                              <path d="M9.972 7.663H.5v.416h9.472v-.416z" />
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <path fill="#fff" d="M0 0h13.141v15.778H0z" />
                              </clipPath>
                            </defs>
                          </SvgIcon>
                        }>
                        {t('common.signIn')}
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </Box>
          )}
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
