import { EuiFlexGroup, EuiLink, EuiPageSection, EuiText } from '@elastic/eui'
import React from 'react'

export default function Footer() {
  return (
    <EuiPageSection paddingSize='none' style={{background:'#FFFFFF',marginTop:'10px'}}>
        <EuiFlexGroup justifyContent='flexEnd' style={{padding:'10px 40px'}}>
            <EuiLink href='mailto:info@ecotel.com.vn'>info@ecotel.com.vn</EuiLink>
        </EuiFlexGroup>
    </EuiPageSection>
  )
}
