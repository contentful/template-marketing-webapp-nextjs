import {Avatar as MuiAvatar} from "@mui/material"
import {makeStyles} from "@mui/styles"
import React, {useMemo} from "react"

import {AssetFieldsFragment} from "../ctf-components/ctf-asset/__generated/ctf-asset.generated"

const useStyles = makeStyles(() => ({
  avatarRoot: {
    width: `100%`,
    height: 0,
    padding: `50%`,
    position: `relative`,
  },
  avatar: {
    width: "100%",
    height: "100%",
    position: `absolute`,
    top: 0,
    left: 0,
  },
}))

interface AvatarPropsInterface {
  asset: AssetFieldsFragment
  widthPx?: number
}

export const Avatar = (props: AvatarPropsInterface) => {
  const {asset, widthPx = 250} = props
  const url = useMemo(() => `${asset.url}?w=${widthPx}`, [asset.url, widthPx])
  const classes = useStyles()
  return (
    <div className={classes.avatarRoot}>
      <MuiAvatar className={classes.avatar} src={url} />
    </div>
  )
}
