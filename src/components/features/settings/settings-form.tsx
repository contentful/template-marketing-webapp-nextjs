import {
  Theme,
  FormHelperText,
  FormControl,
  FormControlLabel,
  Switch,
  Button,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import React, { useState } from 'react';

import { useContentfulContext } from '@src/contentful-context';
import SettingsIcon from '@src/icons/settings-icon.svg';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'auto',
    position: 'fixed',
    width: '100%',
    zIndex: 1150,
    [theme.breakpoints.up('md')]: {
      bottom: theme.spacing(28),
      boxShadow: '0 2px 30px rgba(0,0,0,0.29)',
      height: '70rem',
      maxHeight: `calc(100vh - ${theme.spacing(29)})`,
      right: theme.spacing(9),
      width: '42.3rem',
    },
    '& .MuiTypography-h5, & .MuiFormLabel-root, & .MuiInputBase-root, & .MuiFormHelperText-root, & .MuiTypography-body1, & .MuiButton-root':
      {
        fontFamily:
          '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
      },
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#192737',
    display: 'flex',
    padding: theme.spacing(5, 3),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5, 7),
    },
  },
  logo: {
    display: 'block',
    height: 'auto',
    marginRight: theme.spacing(3),
    width: '2.5rem',
  },
  headerTitle: {
    color: '#fff',
    fontSize: '2.4rem',
    fontWeight: 500,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '42.3rem',
    padding: '1.5rem 1rem 1rem',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      padding: '1.5rem 3rem 1rem',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    position: 'relative',
    '& .MuiInput-root': {
      backgroundColor: '#E5EBED',
    },
    '& .MuiAutocomplete-input': {
      color: '#2A3039',
    },
    '& .MuiInput-underline::before': {
      display: 'none',
    },
    '& .MuiInputLabel-shrink': {
      transform: 'translate(0, -0.5rem) scale(0.75)',
    },
  },
  formSection: {
    '& + &': {
      marginTop: theme.spacing(5.5),
    },
    '& .MuiFormHelperText-root': {
      color: '#7496a5',
      fontSize: '1.4rem',
      lineHeight: 1.2,
      marginTop: theme.spacing(1),
      maxWidth: 'calc(100% - 4.3rem)',
      opacity: 1,
    },
    '& .MuiFormLabel-root': {
      color: 'rgba(0, 0, 0, 0.7)',
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: 'rgba(0, 0, 0, 0.85)',
    },
    '& .MuiInputBase-root': {
      border: '1px solid rgba(195, 207, 213, 0.8)',
      fontSize: '1.6rem',
      paddingBottom: '0.7rem',
      paddingLeft: '1rem',
      paddingTop: '0.7rem',
    },
  },
  formSectionTitle: {
    borderBottom: '1px solid rgba(127, 145, 165, 0.5)',
    color: '#2a3039',
    fontSize: '1.8rem',
    marginBottom: theme.spacing(1),
    paddingBottom: theme.spacing(1.5),
  },
  formControlLabel: {
    marginLeft: 0,
    marginRight: 0,
    '& .MuiSwitch-root': {
      height: '3.2rem',
      padding: '0.6rem',
      width: '5.5rem',
    },
    '& .MuiSwitch-switchBase': {
      padding: '0.5rem',
      top: '0rem',
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(2.3rem)',
    },
    '& .MuiFormControlLabel-label': {
      flexGrow: 1,
      fontSize: '1.6rem',
    },
    '& .MuiSwitch-colorSecondary + .MuiSwitch-track': {
      backgroundColor: '#E5EBED',
      borderRadius: '1.7rem',
      height: '2rem',
      opacity: 1,
    },
    '& .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#3C80CF',
      opacity: 1,
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 5px rgba(0,0,0,0.29)',
      height: '2.2rem',
      width: '2.2rem',
    },
  },
  footer: {
    backgroundColor: '#fff',
    bottom: 0,
    // boxShadow: '0px -2px 4px -2px rgba(49,49,49,0.75)',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '-1rem',
    marginTop: 'auto',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(4),
    position: 'sticky',
    width: 'calc(100% + 2rem)',
    zIndex: 2,
    [theme.breakpoints.up('sm')]: {
      marginLeft: '-3rem',
      width: 'calc(100% + 6rem)',
    },
  },
  footerShadowContainer: {
    bottom: 0,
    height: '100%',
    left: 0,
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    '&::before': {
      content: '""',
      display: 'block',
      height: 'calc(100% + 1rem - 75px)',
    },
  },
  footerShadow: {
    backgroundColor: '#fff',
    bottom: 0,
    boxShadow: '0px -2px 4px -2px rgba(49,49,49,0.75)',
    height: '75px',
    marginLeft: '-1rem',
    marginTop: 'auto',
    position: 'sticky',
    width: 'calc(100% + 2rem)',
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      marginLeft: '-3rem',
      width: 'calc(100% + 6rem)',
    },
  },
  footerButton: {
    backgroundColor: '#e5ebed',
    border: '0.1rem solid #c3cfd5',
    borderRadius: '0.2rem',
    color: '#2d2f31',
    display: 'inline-block',
    fontSize: '1.4rem',
    height: '4rem',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
    padding: '0 1.4rem',
    transition: 'background .2s ease-in-out,opacity .2s ease-in-out,border-color 0.2s ease-in-out',
    width: 'calc(50% - 2rem)',
    '&:hover, &:focus': {
      backgroundColor: '#d3dce0',
      transform: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.6rem',
      marginLeft: '1.5rem',
      marginRight: '1.5rem',
      width: 'calc(50% - 6rem)',
    },
  },
  footerButtonPrimary: {
    backgroundImage: 'linear-gradient(0deg, #0eb87f, #14d997)',
    backgroundSize: '100% 200%',
    borderColor: '#0baa75',
    color: '#fff',
    '&:hover, &:focus': {
      backgroundPosition: '0 100%',
    },
    '&.Mui-disabled': {
      color: '#fff',
      opacity: 0.5,
    },
  },
}));

interface SettingsFormPropsInterface {
  onClose: () => void;
}

export const SettingsForm: React.FC<SettingsFormPropsInterface> = props => {
  const { onClose } = props;
  const router = useRouter();

  const classes = useStyles();
  const { previewActive } = useContentfulContext();
  const [newPreviewActive, setNewPreviewActive] = useState(previewActive || false);
  const [isDirty, setIsDirty] = useState(false);

  const onSubmit = async event => {
    event.preventDefault();

    if (isDirty === false) {
      return;
    }

    const queryParams = queryString.parse(window.location.search);

    if (previewActive !== newPreviewActive) {
      if (newPreviewActive === false) {
        delete queryParams.preview;
      } else {
        queryParams.preview = '1';
      }
    }

    router.push(
      `${router.pathname}?${queryString.stringify(queryParams)}`,
      `${router.asPath.split('?')[0]}${
        queryString.stringify(queryParams) ? `?${queryString.stringify(queryParams)}` : ''
      }`,
    );
  };

  return (
    <section className={classes.root}>
      <header className={classes.header}>
        <SettingsIcon className={classes.logo} />
        <Typography className={classes.headerTitle} variant="h1">
          Editorial Toolbox
        </Typography>
      </header>
      <div className={classes.container}>
        <form className={classes.form} onSubmit={onSubmit}>
          <div className={classes.formSection}>
            <Typography className={classes.formSectionTitle} variant="h5">
              General settings
            </Typography>

            <FormControl margin="dense" fullWidth>
              <FormControlLabel
                className={classes.formControlLabel}
                labelPlacement="start"
                control={
                  <Switch
                    checked={newPreviewActive}
                    onChange={(_event, checked) => {
                      setNewPreviewActive(checked);
                      setIsDirty(true);
                    }}
                  />
                }
                label="Preview mode"
              />
              <FormHelperText>
                View draft entries, assets and unpublished content changes.
              </FormHelperText>
            </FormControl>
          </div>

          <footer className={classes.footer}>
            <Button
              className={classes.footerButton}
              type="button"
              variant="text"
              color="primary"
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              className={clsx(classes.footerButton, classes.footerButtonPrimary)}
              type="submit"
              variant="text"
              color="primary"
              onClick={onClose}
              disabled={!isDirty}
            >
              Apply changes
            </Button>
          </footer>
          <div className={classes.footerShadowContainer}>
            <div className={classes.footerShadow} />
          </div>
        </form>
      </div>
    </section>
  );
};
