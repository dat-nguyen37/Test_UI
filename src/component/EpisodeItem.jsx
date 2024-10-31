import { EuiButton, EuiCard, EuiImage, EuiPanel } from '@elastic/eui'
import React from 'react'
import EpisodeFlyout from './EpisodeFlyout'

export default function EpisodeItem({episode}) {
  return (
    <EuiCard
    title={episode.title}
    image={<EuiImage src={episode.image} size="200px" alt={episode.title} />}    description={episode.plot.slice(0,80)}
    footer={
        <EpisodeFlyout episode={episode}/>
    }/>
  )
}
