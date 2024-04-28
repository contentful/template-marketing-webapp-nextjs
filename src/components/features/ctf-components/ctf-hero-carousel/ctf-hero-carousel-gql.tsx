import {useContentfulLiveUpdates} from "@contentful/live-preview/react"
import React from "react"

import {useCtfHeroCarouselQuery} from "./__generated/ctf-hero-carousel.generated"
import {CtfHeroCarousel} from "./ctf-hero-carousel"

interface CtfHeroGqlPropsInterface {
  id: string
  locale: string
  preview: boolean
}

export const CtfHeroCarouselGql = (props: CtfHeroGqlPropsInterface) => {
  const {id, locale, preview} = props
  const {data, isLoading} = useCtfHeroCarouselQuery({
    id,
    locale,
    preview,
  })

  const componentHeroCarousel = useContentfulLiveUpdates(data?.componentHeroCarousel)

  if (!componentHeroCarousel || isLoading) return null

  return <CtfHeroCarousel {...componentHeroCarousel} />
}
