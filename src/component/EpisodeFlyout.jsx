import React, { useState } from 'react'

import {Show} from '../data'
import { EuiButton, EuiFlexGroup, EuiFlexItem, EuiFlyout, EuiFlyoutBody, EuiFlyoutFooter, EuiFlyoutHeader, EuiImage, EuiSpacer, EuiStat, EuiText, EuiTitle, useCurrentEuiBreakpoint, useIsWithinBreakpoints } from '@elastic/eui'
import moment from 'moment';

export default function EpisodeFlyout({episode}) {
    const [isFlyoutVisible,setIsFlyoutVisible]=useState(false);
    const mobile=useIsWithinBreakpoints(['m'])
    let flyout;
    if(isFlyoutVisible){
        flyout=(
            <EuiFlyout size='s' type={mobile?'overlay':'push'} side='left' onClose={()=>setIsFlyoutVisible(false)}>
                <EuiFlyoutHeader hasBorder>
                    <EuiTitle size='s'>
                        <h1>{episode.title}</h1>
                    </EuiTitle>
                    <EuiSpacer size='m'/>
                    <EuiText>
                        <p>{moment(episode.released).format('MMMM D, YYYY')}</p>
                    </EuiText>
                </EuiFlyoutHeader>
                <EuiFlyoutBody>
                    <EuiImage src={episode.image} size="200px" alt={episode.title}/>
                    <EuiSpacer size='l'/>
                    <EuiFlexGroup>
                        <EuiFlexItem>
                            <EuiStat title={episode.seasonNumber} description="Season"/>
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <EuiStat title={episode.episodeNumber} description="Episode"/>
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <EuiStat title={episode.imDbRating} description="Rating"/>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                        <EuiSpacer size="l"/>
                        <EuiText>
                            <p>{episode.plot}</p>
                        </EuiText>
                </EuiFlyoutBody>
                <EuiFlyoutFooter></EuiFlyoutFooter>
            </EuiFlyout>
        )
    }
  return (
    <>
        <EuiButton fill onClick={()=>setIsFlyoutVisible(true)}>Details</EuiButton>
        {flyout}
    </>
  )
}
