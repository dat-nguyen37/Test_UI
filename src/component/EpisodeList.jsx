import React from 'react'
import {EuiFlexGrid, EuiFlexGroup,EuiFlexItem, useIsWithinBreakpoints} from '@elastic/eui'
import EpisodeItem from './EpisodeItem'
export default function EpisodeList({episodes}) {
    const isMobile = useIsWithinBreakpoints(['xs', 's']);
  return (
    <EuiFlexGrid columns={4} responsive={true}>
        {episodes.map(episode=>(
            <EuiFlexItem key={episode.id}>
                <EpisodeItem episode={episode}/>
            </EuiFlexItem>
))}
    </EuiFlexGrid>
  )
}
