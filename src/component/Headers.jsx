import { EuiAvatar, EuiButton, EuiButtonEmpty, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiHeader, EuiHeaderBreadcrumbs, EuiHeaderSection, EuiHeaderSectionItem, EuiHeaderSectionItemButton, EuiIcon, EuiImage, EuiKeyPadMenu, EuiKeyPadMenuItem, EuiPageHeader, EuiPageHeaderContent, EuiPopover, EuiPopoverTitle, EuiText } from '@elastic/eui'
import React, { useState } from 'react'

export default function Headers({clickSideBar}) {
    const [popoverUser,setPopoverUser]=useState(false)
    const [popoverApp,setPopoverApp]=useState(false)

    const openPopoverUser=()=>setPopoverUser(!popoverUser)
    const closePopoverUser=()=>setPopoverUser(false)

    const openPopoverApp=()=>setPopoverApp(!popoverApp)
    const closePopoverApp=()=>setPopoverApp(false)

  return (
    <EuiPageHeader>
            <EuiPageHeaderContent>
                <EuiHeader style={{width:'100%'}}>
                    <EuiHeaderSection>
                        <EuiHeaderSectionItem>
                            <EuiButtonEmpty onClick={clickSideBar} iconType="menu" color='text'/>
                            <EuiImage src="/assets/logo.png" width="100px" height="25px"/>
                        </EuiHeaderSectionItem>
                        <EuiHeaderSectionItem style={{padding:'10px'}}>
                            <EuiAvatar name='S' type='space' size='s' color="#68C4A2"/>
                        </EuiHeaderSectionItem>
                        <EuiHeaderBreadcrumbs
                            max={2}
                            breadcrumbs={[
                                {text:"Analytics",href:"#"},
                                {text:"Analytics",href:"#"},
                                {text:"Analytics",href:"#"},
                                {text:"Analytics",href:"#"},
                                {text:"Analytics",href:"#"},
                                {text:"Hồ sơ học sinh"},
                            ]}/>
                    </EuiHeaderSection>
                    <EuiHeaderSection side="right">
                        <EuiFlexGroup gutterSize='xs'>
                            <EuiHeaderSectionItem>
                                <EuiHeaderSectionItemButton notification={'2'}>
                                    <EuiIcon type="bell" size='m'/>
                                </EuiHeaderSectionItemButton>
                            </EuiHeaderSectionItem>
                            <EuiHeaderSectionItem>
                                <EuiHeaderSectionItemButton notification={'2'}>
                                    <EuiIcon type="email" size='m'/>
                                </EuiHeaderSectionItemButton>
                            </EuiHeaderSectionItem>
                            <EuiHeaderSectionItem>
                                <EuiPopover
                                panelStyle={{outline:'none'}}
                                isOpen={popoverUser}
                                closePopover={closePopoverUser}
                                button={
                                    <EuiHeaderSectionItemButton onClick={openPopoverUser}>
                                        <EuiAvatar name='EL' color="#68C4A2" size='s'/>
                                    </EuiHeaderSectionItemButton>
                                }>
                                    <EuiFlexGroup gutterSize='s' alignItems='center'>
                                        <EuiFlexItem grow={false}>
                                            <EuiAvatar name='DN' imageUrl='/assets/avata.png' size='xl'/>
                                        </EuiFlexItem>
                                        <EuiFlexItem>
                                            <EuiText>Dat Nguyen</EuiText>
                                            <EuiFlexGroup>
                                                <EuiButtonEmpty>Chỉnh sửa hồ sơ</EuiButtonEmpty>
                                                <EuiButtonEmpty>Đăng xuất</EuiButtonEmpty>
                                            </EuiFlexGroup>
                                        </EuiFlexItem>
                                    </EuiFlexGroup>
                                </EuiPopover>
                            </EuiHeaderSectionItem>
                            <EuiHeaderSectionItem>
                                <EuiPopover
                                panelStyle={{width:'288px'}}
                                isOpen={popoverApp}
                                closePopover={closePopoverApp}
                                button={
                                    <EuiHeaderSectionItemButton onClick={openPopoverApp}>
                                        <EuiIcon type="apps" size='m'/>
                                    </EuiHeaderSectionItemButton>
                                }>
                                    <EuiKeyPadMenu>
                                        <EuiKeyPadMenuItem label="Dashboard">
                                            <EuiIcon type="dashboardApp" size="l" />
                                        </EuiKeyPadMenuItem>

                                        <EuiKeyPadMenuItem label="Canvas">
                                            <EuiIcon type="canvasApp" size="l" />
                                        </EuiKeyPadMenuItem>

                                        <EuiKeyPadMenuItem isSelected label="Lens">
                                            <EuiIcon type="lensApp" size="l" />
                                        </EuiKeyPadMenuItem>

                                        <EuiKeyPadMenuItem label="Visualize">
                                            <EuiIcon type="visualizeApp" size="l" />
                                        </EuiKeyPadMenuItem>

                                        <EuiKeyPadMenuItem label="Graph">
                                            <EuiIcon type="graphApp" size="l" />
                                        </EuiKeyPadMenuItem>

                                        <EuiKeyPadMenuItem label="Advanced Settings">
                                            <EuiIcon type="advancedSettingsApp" size="l" />
                                        </EuiKeyPadMenuItem>
                                        <EuiKeyPadMenuItem label="Timelion">
                                            <EuiIcon type="timelionApp" size="l" />
                                        </EuiKeyPadMenuItem>
                                    </EuiKeyPadMenu>
                                </EuiPopover>
                            </EuiHeaderSectionItem>
                        </EuiFlexGroup>
                    </EuiHeaderSection>
                </EuiHeader>
            </EuiPageHeaderContent>
        </EuiPageHeader>
  )
}
