import { MenuItem, Select, SvgIcon, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: Theme) => ({
  localeMenu: {
    alignItems: 'center',
    display: 'flex',
    '& > svg': {
      marginRight: theme.spacing(2),
    },
  },
}));

export const LanguageSelector = () => {
  const { locale, locales } = useRouter();
  const classes = useStyles();
  const router = useRouter();

  const languageNames = new Intl.DisplayNames([], {
    type: 'language',
  });

  return locales && locales.length > 1 ? (
    <div className={classes.localeMenu}>
      <SvgIcon>
        <g clipPath="url(#clip-footer-lang)">
          <path
            d="M24 12A11.9994 11.9994 0 0012.5496.0132V0h-1.1v.0132a11.9992 11.9992 0 000 23.9767v.0132h1.1v-.0132A11.9998 11.9998 0 0024 12zM6.8886 12a20.7853 20.7853 0 01.5005-4.6108 20.4957 20.4957 0 014.0605-.4936v10.2088a20.495 20.495 0 01-4.0605-.4936A20.7846 20.7846 0 016.8886 12zm-.6905 4.294a13.2433 13.2433 0 01-2.1797-.8789c-1.8559-.9606-2.92-2.2054-2.92-3.4151 0-1.2097 1.0641-2.4545 2.92-3.4151a13.2461 13.2461 0 012.1797-.8781 22.7198 22.7198 0 000 8.588v-.0008zM15.4135 4.02c.357.699.6511 1.4285.8789 2.1797a22.0049 22.0049 0 00-3.7444-.4033V1.1747c1.0315.2678 2.052 1.2704 2.8655 2.8453zm-3.9639-2.8453v4.6202a22.0043 22.0043 0 00-3.7429.4032 13.246 13.246 0 01.879-2.1797c.8142-1.5732 1.8348-2.576 2.8639-2.8437zm0 17.0296v4.621c-1.0291-.2686-2.0497-1.2704-2.8648-2.8461a13.2145 13.2145 0 01-.8788-2.1797 21.835 21.835 0 003.7436.4048zm1.1 4.621v-4.621a21.843 21.843 0 003.7444-.4032 13.2216 13.2216 0 01-.8789 2.1797c-.8151 1.5741-1.8356 2.5759-2.8655 2.8445zm0-5.7209V6.8956a20.5034 20.5034 0 014.0612.4936c.3383 1.5134.5062 3.06.5006 4.6108a20.7918 20.7918 0 01-.5006 4.6108 20.5027 20.5027 0 01-4.0612.4936zm5.2515-9.3976a13.1944 13.1944 0 012.1797.8789c1.8566.9606 2.9208 2.2053 2.9208 3.4151 0 1.2097-1.0658 2.4537-2.9224 3.4128a13.1915 13.1915 0 01-2.1797.8788 22.1419 22.1419 0 00.4103-4.294 22.1415 22.1415 0 00-.4087-4.2916zM22.4648 8.96c-1.1459-1.0556-2.8686-1.919-4.9494-2.477-.5582-2.0793-1.4215-3.802-2.4763-4.9488a10.9403 10.9403 0 017.4257 7.425v.0008zM8.9593 1.5343C7.9045 2.681 7.0412 4.4039 6.483 6.483c-2.0793.5582-3.802 1.4215-4.9487 2.4763a10.9429 10.9429 0 017.425-7.425zm-7.425 13.5064c1.1467 1.0548 2.8694 1.9181 4.9487 2.4747.5582 2.0793 1.4215 3.802 2.4763 4.9479a10.9396 10.9396 0 01-7.425-7.4226zm13.5063 7.4242c1.0549-1.1459 1.9182-2.8687 2.4748-4.9495 2.0792-.5581 3.802-1.4215 4.9479-2.4763a10.9382 10.9382 0 01-7.4227 7.4258z"
            fill="#000"
          />
        </g>
        <defs>
          <clipPath id="clip-footer-lang">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </SvgIcon>
      <Select
        value={locale}
        onChange={event => {
          router.push({ pathname: router.pathname, query: router.query }, router.asPath, {
            locale: String(event.target.value),
          });
        }}
      >
        {locales?.map(availableLocale => (
          <MenuItem key={availableLocale} value={availableLocale}>
            {languageNames.of(availableLocale)}
          </MenuItem>
        ))}
      </Select>
    </div>
  ) : null;
};
