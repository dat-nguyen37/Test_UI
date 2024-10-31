import { EuiAvatar, EuiFieldSearch, EuiFlexGroup, EuiHeader, EuiHeaderLogo, EuiHeaderSection, EuiHeaderSectionItem, EuiHeaderSectionItemButton, EuiIcon, EuiImage, EuiPageHeader, EuiPageTemplate, EuiText } from '@elastic/eui'
import React from 'react'

export default function Header() {
  return (
    <EuiHeader style={{height:'70px'}}>
        <EuiHeaderSection style={{gap:20}}>
            <EuiHeaderSectionItem>
                <EuiHeaderLogo iconType="menu"/>
            </EuiHeaderSectionItem>
            <EuiHeaderSectionItem>
                <EuiImage src='/assets/logo.png' width="100px" height="25px"/>
            </EuiHeaderSectionItem>
            <EuiHeaderSectionItem>
                <EuiFieldSearch placeholder='Search' style={{borderRadius:"24px",width:'400px'}}/>
            </EuiHeaderSectionItem>
        </EuiHeaderSection>
        <EuiHeaderSection side='right'>
            <EuiFlexGroup gutterSize='s'>
            <EuiHeaderSectionItem>
                <EuiHeaderSectionItemButton notification={'2'}>
                    <EuiIcon type="editorComment" size='xl'/>
                </EuiHeaderSectionItemButton>
            </EuiHeaderSectionItem>
            <EuiHeaderSectionItem>
                <EuiHeaderSectionItemButton notification={'2'}>
                    <EuiIcon type="bell" size='l'/>
                </EuiHeaderSectionItemButton>
            </EuiHeaderSectionItem>
            <EuiHeaderSectionItem>
                <EuiHeaderSectionItemButton>
                    <EuiFlexGroup alignItems='center' gutterSize='m'>
                        <EuiAvatar name="John Username" imageUrl='/assets/avata.png' size="l" />
                        <EuiText>
                            <b>Lê chí tuyền</b>
                            <p style={{fontSize:'14px'}}>Học sinh</p>
                        </EuiText>
                        <EuiIcon type='arrowDown' style={{padding:'4px',border:'1px solid',borderRadius:'50%'}}/>
                    </EuiFlexGroup>
                </EuiHeaderSectionItemButton>
            </EuiHeaderSectionItem>
            </EuiFlexGroup>
        </EuiHeaderSection>
    </EuiHeader>
  )
}
