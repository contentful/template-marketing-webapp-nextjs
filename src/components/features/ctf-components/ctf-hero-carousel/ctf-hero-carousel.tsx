import {useContentfulInspectorMode} from "@contentful/live-preview/react"
import {Container, Theme} from "@mui/material"
import {makeStyles} from "@mui/styles"
import clsx from "clsx"
import Image from "next/image"

import {HeroCarouselFieldsFragment} from "./__generated/ctf-hero-carousel.generated"

import {PageLink} from "@src/components/features/page-link"
import {getColorConfigFromPalette} from "@src/theme"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
    textAlign: "center",
    padding: theme.spacing(8, 0),
  },

  carouselWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: theme.spacing(10, 0),
  },

  carouselItemContainer: {
    margin: theme.spacing(2),
    padding: theme.spacing(4),
    border: "2px solid #ff5d2f",
  },

  carouselItemTitle: {
    marginTop: theme.spacing(0),
  },

  moreButton: {
    backgroundColor: "#ff5d2f",
    "&:hover": {
      backgroundColor: "#ff5d2f",
    },
  },
}))

export const CtfHeroCarousel = (props: HeroCarouselFieldsFragment) => {
  const {
    sys: {id},
    internalName,
    carouselProductsCollection,
  } = props

  const colorConfig = getColorConfigFromPalette()
  const carouselItems = carouselProductsCollection?.items
  const classes = useStyles()
  const inspectorMode = useContentfulInspectorMode({entryId: id})

  return (
    <Container
      maxWidth={false}
      className={clsx(classes.root)}
      {...inspectorMode({fieldId: "carousel"})}
    >
      <h1>{internalName}</h1>
      {carouselItems && (
        <section className={classes.carouselWrapper}>
          {carouselItems.map(
            (item, i) =>
              item &&
              item?.featuredImage && (
                <article key={`${item.internalName}${i}`} className={classes.carouselItemContainer}>
                  <Image
                    src={item?.featuredImage?.url || "none"}
                    width={202}
                    height={202}
                    alt={item?.featuredImage?.description || "broken image"}
                  />
                  <h3 className={classes.carouselItemTitle}>{item.name}</h3>
                  {item.targetPage && item.targetPage.slug && (
                    <PageLink
                      className={classes.moreButton}
                      page={item.targetPage}
                      variant="contained"
                      color={colorConfig.buttonColor}
                      isButton
                    >
                      More +
                    </PageLink>
                  )}
                </article>
              ),
          )}
        </section>
      )}
    </Container>
  )
}
