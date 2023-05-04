import { Theme, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { SettingsForm } from '@src/components/features/settings/settings-form';
import { useExternalSpaceAndPreview } from '@src/components/features/settings/useExternalSpaceAndPreview';
import SettingsIcon from '@src/icons/settings-icon.svg';
import typewriter from 'analytics';

const useStyles = makeStyles((theme: Theme) => ({
  toggle: {
    alignItems: 'center',
    appearance: 'none',
    backgroundColor: '#192737',
    border: 0,
    borderRadius: '50%',
    bottom: theme.spacing(3),
    boxShadow: '0 2px 6px rgba(0,0,0,0.29)',
    cursor: 'pointer',
    display: 'flex',
    height: '6rem',
    justifyContent: 'center',
    position: 'fixed',
    right: theme.spacing(3),
    width: '6rem',
    zIndex: 1130,
    [theme.breakpoints.up('md')]: {
      bottom: theme.spacing(9),
      right: theme.spacing(9),
    },
  },
  toggleImage: {
    display: 'block',
    transform: 'translateX(-1px)',
    width: '3rem',
  },
  animationEnter: {
    opacity: 0,
    transform: 'scale(0.1)',
    transformOrigin: 'bottom right',
  },
  animationEnterActive: {
    opacity: 1,
    transform: 'translateX(0)',
    transition: 'opacity 300ms, transform 300ms',
  },
  animationExit: {
    opacity: 1,
  },
  animationExitActive: {
    opacity: 0,
    transform: 'scale(0.1)',
    transformOrigin: 'bottom right',
    transition: 'opacity 300ms, transform 300ms',
  },
}));

export const Settings = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { shouldUseSpaceCredsFromParams } = useExternalSpaceAndPreview();

  const toolboxRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    if (settingsOpen === false) {
      document.body.classList.remove('is-scroll-locked');
      return;
    }

    if (window.matchMedia(theme.breakpoints.up('md').replace('@media ', '')).matches === true) {
      return;
    }

    document.body.classList.add('is-scroll-locked');
  }, [settingsOpen, theme.breakpoints]);

  const handleToolboxInteraction = (isOpen?: boolean) => {
    setSettingsOpen(currentState => {
      typewriter.toolboxInteracted({ isOpen: isOpen || !currentState });

      return isOpen || !currentState;
    });
  };

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handleClickOutside = event => {
      if (event.target === buttonRef.current || buttonRef.current?.contains(event.target)) return;

      if (toolboxRef.current && !toolboxRef.current.contains(event.target)) {
        handleToolboxInteraction(false);
      }
    };

    const handleEscape = event => {
      if (event.key === 'Escape') {
        handleToolboxInteraction(false);
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('keydown', handleEscape, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('keydown', handleEscape, true);
    };
  }, [enabled]);

  useEffect(() => {
    try {
      if (window.top?.location.href === window.location.href) {
        // Dont show the settings panel when embedded into an iframe (e.g. live preview)
        setEnabled(true);
      }
    } catch (err) {
      // window.top.location.href is not accessable for non same origin iframes
    }
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <CSSTransition
        in={settingsOpen}
        unmountOnExit
        timeout={300}
        classNames={{
          enter: classes.animationEnter,
          enterActive: classes.animationEnterActive,
          exit: classes.animationExit,
          exitActive: classes.animationExitActive,
        }}
      >
        <SettingsForm
          ref={toolboxRef}
          onClose={() => {
            handleToolboxInteraction(false);
          }}
        />
      </CSSTransition>
      {shouldUseSpaceCredsFromParams && (
        <button
          ref={buttonRef}
          className={classes.toggle}
          type="button"
          onClick={() => {
            handleToolboxInteraction();
          }}
          title="Toggle editorial toolbox"
        >
          <SettingsIcon className={classes.toggleImage} />
        </button>
      )}
    </>
  );
};
