import React, { useState } from 'react'
import Headers from '../component/Headers'
import { EuiAccordion, EuiBasicTable, EuiButton, EuiButtonEmpty, EuiButtonIcon, EuiCard, EuiCollapsibleNavGroup, EuiFieldSearch, EuiFieldText, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiFormControlLayout, EuiIcon, EuiLink, EuiListGroup, EuiListGroupItem, EuiPage, EuiPageSection, EuiPageSidebar, EuiPageTemplate, EuiPopover, EuiPopoverTitle, EuiSelect, EuiSpacer, EuiText } from '@elastic/eui'
import { css } from '@emotion/react'

export default function Student() {
    const [isPopover,setIsPopover]=useState(false)
    const [isSideBar,setIsSideBar]=useState(false)
    const openPopover=()=>setIsPopover(!isPopover)
    const closePopover=()=>setIsPopover(false)

    const openSideBar=()=>setIsSideBar(!isSideBar)
    const closeSideBar=()=>setIsSideBar(false)

    const columns=[
        {field:"TietHoc",name:"Tiết học"},
        {field:"Thu2",name:"Thứ hai"},
        {field:"Thu3",name:"Thứ ba"},
        {field:"Thu4",name:"Thứ tư"},
        {field:"Thu5",name:"Thứ năm"},
        {field:"Thu6",name:"Thứ sáu"},
        {field:"Thu7",name:"Thứ bảy"},
    ]
    const items=[
        {'TietHoc':1,'Thu2':'Toán','Thu3':'Toán',"Thu4":'Toán',"Thu5":'Toán','Thu6':'Toán','Thu7':'Toán'},
        {'TietHoc':2,'Thu2':'Vật lý','Thu3':'Toán',"Thu4":'Toán',"Thu5":'Toán','Thu6':'Toán','Thu7':'Toán'},
        {'TietHoc':3,'Thu2':'Ngữ văn','Thu3':'Toán',"Thu4":'Toán',"Thu5":'Toán','Thu6':'Toán','Thu7':'Toán'},
        {'TietHoc':4,'Thu2':'Hóa học','Thu3':'Toán',"Thu4":'Toán',"Thu5":'Toán','Thu6':'Toán','Thu7':'Toán'},
        {'TietHoc':5,'Thu2':'Tiếng anh','Thu3':'Toán',"Thu4":'Toán',"Thu5":'Toán','Thu6':'Toán','Thu7':'Toán'}
        ]
  return (
    <>
        <Headers openSideBar={openSideBar}/>
        <EuiPageTemplate>
                {isSideBar&&<EuiPageTemplate.Sidebar paddingSize='l' minWidth='220px'>
                    <EuiFlexGroup alignItems='center' gutterSize='m' responsive={false}>
                        <EuiFlexItem grow={false} style={{padding:'5px',border:'1px sold gray',borderRadius:'50%',background:'white',boxShadow:'1px 1px 4px rgba(0, 0, 0, 0.7)'}}>
                            <EuiIcon type="gear"/>
                        </EuiFlexItem>
                        <EuiText><strong>SCM</strong></EuiText>
                    </EuiFlexGroup>
                    <EuiSpacer/>
                    <EuiAccordion
                        initialIsOpen={true}
                        buttonContent={<EuiText><b>Quản lý tài khoản</b></EuiText>}
                        arrowDisplay='right'
                        style={{paddingInline:''}}
                     >
                        <EuiListGroup flush gutterSize='none'>
                            <EuiListGroupItem label="Chỉnh sửa thông tin"/>
                            <EuiListGroupItem href='#' color='primary' label={<b>Hồ sơ cá nhân</b>}/>
                        </EuiListGroup>
                    </EuiAccordion>
                    <EuiAccordion
                        initialIsOpen={true}
                        buttonContent={<EuiText><b>Học tập</b></EuiText>}
                        arrowDisplay='none'
                     >
                        <EuiListGroup flush gutterSize='none'>
                            <EuiListGroupItem label="Thời khóa biểu"/>
                            <EuiListGroupItem label="Danh sách lớp"/>
                        </EuiListGroup>
                    </EuiAccordion>
                    <EuiAccordion
                        initialIsOpen={true}
                        buttonContent={<EuiText><b>Sự kiện & HĐNK</b></EuiText>}
                        arrowDisplay='none'
                     >
                        <EuiListGroup flush gutterSize='none'>
                            <EuiListGroupItem label="Danh sách sự kiện"/>
                            <EuiListGroupItem label="Sự kiện đã tham gia"/>
                        </EuiListGroup>
                    </EuiAccordion>
                    <EuiAccordion
                        initialIsOpen={true}
                        buttonContent={<EuiText><b>Học phí</b></EuiText>}
                        arrowDisplay='none'
                     >
                        <EuiListGroup flush gutterSize='none'>
                            <EuiListGroupItem label="Đóng học phí"/>
                        </EuiListGroup>
                    </EuiAccordion>

                </EuiPageTemplate.Sidebar>}
            <EuiPageTemplate.Header
            paddingSize='m'
            pageTitle={
                <EuiFlexGroup alignItems='center'>
                    <EuiFlexItem grow={false}>
                        <EuiText><h2>Dashboard</h2></EuiText>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFormControlLayout style={{fontSize:'14px'}} fullWidth>
                            <EuiFieldSearch placeholder='Tìm kiếm chức năng' fullWidth/>
                        </EuiFormControlLayout>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                        <EuiButtonIcon iconType='indexSettings' color='text' display='fill'/>
                    </EuiFlexItem>
                </EuiFlexGroup>
            }/>
            <EuiPageTemplate.Section color='plain'>
                <EuiFlexGroup>
                    <EuiFlexItem>
                        <EuiFlexGroup>
                            <b>Thời khóa biểu</b>
                            <b>Lê Chí Tuyền</b>
                            <span>Lớp: 12A1</span>
                        </EuiFlexGroup>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                        <EuiPopover
                        panelPaddingSize='none'
                        anchorPosition='upLeft'
                        panelStyle={{outline:'none',width:'200px'}}
                        hasArrow={false}
                        isOpen={isPopover}
                        closePopover={closePopover}
                        button={
                            <EuiFlexGroup onClick={openPopover} alignItems='center' style={{color:'blue'}}>
                                <EuiText><p>Năm học: 2024</p></EuiText>
                                <EuiIcon type="arrowDown"/>
                            </EuiFlexGroup>
                        }>
                            <EuiPopoverTitle style={{border:'none'}} paddingSize='s'>
                                <EuiFieldSearch placeholder='Tìm kiếm năm học'/>
                            </EuiPopoverTitle>
                            <EuiFlexGroup direction='column' gutterSize='none' responsive={false}>
                                {[1023,2024,2025,2026].map(year=>(
                                    <EuiFlexItem style={{borderTop:'1px solid #F5F5F5',padding:'5px'}}>
                                        <EuiFlexGroup alignItems='center' gutterSize='s' responsive={false}>
                                            <EuiFlexItem grow={false}>
                                                <EuiIcon type="check"/>
                                            </EuiFlexItem>
                                            <EuiFlexItem>
                                                <EuiText>{year}</EuiText>
                                            </EuiFlexItem>
                                        </EuiFlexGroup>
                                    </EuiFlexItem>
                                ))}
                            </EuiFlexGroup>
                            </EuiPopover>
                    </EuiFlexItem>
                </EuiFlexGroup>
                <EuiBasicTable
                    tableLayout='auto'
                    columns={columns}
                    items={items}
                />
                <EuiSpacer/>
                <EuiFlexGrid columns={4}>
                    {[1,2,3,4,5,6,7,8].map(item=>(
                        <EuiFlexItem>
                        <EuiCard
                            image="/assets/card.png"
                            paddingSize='s'
                            icon={<EuiIcon size="xxl" type="package" color='white'/>}
                            title="Hồ sơ cá nhân"
                            description={
                                <p>
                                    <EuiText size='xs'>Quản lý tài khoản</EuiText>
                                    <EuiText size='xs'>Quản lý thông tin cá nhân</EuiText>
                                </p>
                            }
                            footer={
                                <EuiButton fullWidth style={{marginBlockStart:'-16px'}}>Select</EuiButton>
                            }
                            betaBadgeProps={{
                                label:'Beta'
                            }}
                        />
                    </EuiFlexItem>
                    ))}
                </EuiFlexGrid>
            </EuiPageTemplate.Section>
            <EuiSpacer/>
            <EuiPageTemplate.BottomBar paddingSize='s' color='#343741'>
                <EuiFlexGroup justifyContent='spaceBetween' alignItems='center'>
                    <EuiText color='#FFFFFF'>School Connected M- Hệ thống quản lý trường học</EuiText>
                    <EuiLink href='Mailto:info@ecotel.com'><EuiText color='#FFFFFF'>info@ecotel.com</EuiText></EuiLink>
                </EuiFlexGroup>
            </EuiPageTemplate.BottomBar>
        </EuiPageTemplate>
    </>
  )
}
