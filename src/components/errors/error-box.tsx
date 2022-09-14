import React from 'react'
import { makeStyles, Theme, Typography } from '@material-ui/core'
import clsx from 'clsx'

interface Props {
  className?: string
  children?: any,
}

const useStyles = makeStyles((theme: Theme) => ({
  errorBoxRoot: {
    color: theme.palette.error.dark,
    border: `1px solid ${theme.palette.error.dark}`,
    // background: theme.palette.,
    padding: theme.spacing(1),
    margin: theme.spacing(12, 0),
  },
}))

const ErrorBox = (props: Props) => {
  const classes = useStyles()
  return (
    <div className={clsx(classes.errorBoxRoot, props.className)}>
      <Typography variant="body1">
        {props.children}
      </Typography>
    </div>
  )
}

export default ErrorBox
