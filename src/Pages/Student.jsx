import React, { useState } from 'react'
import Headers from '../component/Headers'
import { EuiBasicTable, EuiButtonIcon, EuiFieldSearch, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiFormControlLayout, EuiIcon, EuiLink, EuiPage, EuiPageSection, EuiPageTemplate, EuiPopover, EuiPopoverTitle, EuiSelect, EuiText } from '@elastic/eui'

export default function Student() {
    const [isPopover,setIsPopover]=useState(false)
    const openPopover=()=>setIsPopover(!isPopover)
    const closePopover=()=>setIsPopover(false)

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
        <EuiPageTemplate>
        <Headers/>
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
            </EuiPageTemplate.Section>
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
