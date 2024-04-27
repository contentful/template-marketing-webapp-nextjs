import {useContentfulInspectorMode} from "@contentful/live-preview/react"
import {Theme, Container} from "@mui/material"
import {makeStyles} from "@mui/styles"

import {FooterFieldsFragment} from "./__generated/ctf-footer.generated"

import {
  getLinkDisplayText,
  getLinkHrefPrefix,
} from "@src/components/features/ctf-components/ctf-navigation/utils"
import {CtfRichtext} from "@src/components/features/ctf-components/ctf-richtext/ctf-richtext"
import {Link} from "@src/components/shared/link"
import {useContentfulContext} from "@src/contentful-context"
import {CONTAINER_WIDTH} from "@src/theme"

const useStyles = makeStyles((theme: Theme) => ({
  footerContainer: {
    backgroundColor: "#212121",
    color: "#fff",
  },
  footer: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    flexWrap: "wrap",
    maxWidth: `${CONTAINER_WIDTH / 10}rem`,
    paddingBottom: theme.spacing(5),
    paddingTop: theme.spacing(8),
    [theme.breakpoints.up("sm")]: {
      paddingBottom: theme.spacing(10),
      paddingTop: theme.spacing(10),
    },
  },
  footerRichText: {
    "& > div": {
      padding: 0,
    },
  },
  menuWrapper: {
    alignItems: "flex-start",
    display: "flex",
    flexWrap: "wrap",
    marginLeft: theme.spacing(-8),
  },
  menuColumn: {
    paddingLeft: theme.spacing(8),
  },
  menu: {
    listStyle: "none",
    margin: theme.spacing(0, 0, 8),
    padding: 0,
    width: "17.2rem",
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
    },
  },
  menuItem: {
    fontSize: "1.8rem",
    fontWeight: 400,
    lineHeight: 1.2,
    margin: theme.spacing(0, 0, 4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
  menuItemTitle: {
    marginBottom: theme.spacing(6),
  },
  submenu: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    "& $menuItem": {
      fontWeight: 400,
    },
  },
  submenuItem: {
    "& a": {
      borderBottom: "1px solid transparent",
      color: "#aaa",
      display: "inline-block",
      minWidth: 0,
      transition: "border-bottom-color 0.2s ease-in-out",
    },

    "&:hover, &:focus, &:focus-within": {
      "& > a": {
        borderBottomColor: "#7C7C7C",
      },
    },
  },
  footerEndSection: {
    marginLeft: "auto",
  },
  companyAddress: {
    paddingLeft: theme.spacing(8),
    "& p": {
      margin: theme.spacing(3, 0, 6),
      color: "#fff",
    },
  },
  copyright: {
    paddingTop: theme.spacing(12),
    "& p": {
      color: "#fff",
    },
  },
}))

export const CtfFooter = (props: FooterFieldsFragment) => {
  const footerContent = props.items[0]
  const companyAddress = footerContent?.companyAddress
  const copyright = footerContent?.copyright

  const {locale} = useContentfulContext()
  const inspectorMode = useContentfulInspectorMode()

  const renderMenuGroupLinks = (menuGroup, listClassName) => {
    return menuGroup?.items?.map(menuItem => {
      const href = getLinkHrefPrefix(menuItem)
      const linkText = getLinkDisplayText(menuItem)
      return (
        <li
          key={menuItem.sys.id}
          className={listClassName}
          {...inspectorMode({
            entryId: menuItem.sys.id,
            fieldId: "pageName",
          })}
        >
          <Link href={href} className={classes.menuItem}>
            {linkText}
          </Link>
        </li>
      )
    })
  }

  const classes = useStyles()
  const containerProps = footerContent?.sys?.id
    ? inspectorMode({
        entryId: footerContent.sys.id,
        fieldId: "menuItems",
        locale,
      })
    : undefined

  return (
    <>
      <Container {...containerProps} maxWidth={false} className={classes.footerContainer}>
        <footer className={classes.footer}>
          {footerContent?.menuItemsCollection?.items?.length && (
            <nav role="navigation" className={classes.menuWrapper}>
              {footerContent.menuItemsCollection.items.map(
                menuItem =>
                  menuItem && (
                    <div key={menuItem.sys.id} className={classes.menuColumn}>
                      <ul className={classes.menu}>
                        <li>
                          <p
                            className={classes.menuItemTitle}
                            {...inspectorMode({
                              entryId: menuItem.sys.id,
                              fieldId: "groupName",
                              locale,
                            })}
                          >
                            {menuItem.groupName}
                          </p>
                          {menuItem.featuredPagesCollection && (
                            <ul className={classes.submenu}>
                              {renderMenuGroupLinks(
                                menuItem.featuredPagesCollection,
                                classes.submenuItem,
                              )}
                            </ul>
                          )}
                        </li>
                      </ul>
                    </div>
                  ),
              )}
              {companyAddress && (
                <div className={classes.companyAddress}>
                  <CtfRichtext className={classes.footerRichText} {...companyAddress} />
                </div>
              )}
            </nav>
          )}
          {copyright && (
            <div className={classes.copyright}>
              <CtfRichtext className={classes.footerRichText} {...copyright} />
            </div>
          )}
        </footer>
      </Container>
    </>
  )
}
