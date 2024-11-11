import React from 'react'
import { EuiAccordion, EuiAvatar, EuiBreadcrumbs, EuiButton, EuiButtonEmpty, EuiButtonIcon, EuiCollapsibleNavGroup, EuiConfirmModal, EuiDatePicker, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiFormRow, EuiHeader, EuiHeaderBreadcrumbs, EuiHeaderLogo, EuiHeaderSection, EuiHeaderSectionItem, EuiHeaderSectionItemButton, EuiIcon, EuiImage, EuiLink, EuiListGroup, EuiListGroupItem, EuiPage, EuiPageHeader, EuiPageHeaderContent, EuiPageSection, EuiPageSidebar, EuiPageTemplate, EuiPanel, EuiSelect, EuiSpacer, EuiText, useGeneratedHtmlId } from '@elastic/eui'

export default function SideBar() {
  return (
    <>
        <EuiFlexGroup alignItems='center' gutterSize='m' responsive={false} style={{padding:'4px 8px'}}>
            <EuiFlexItem grow={false} style={{padding:'5px',border:'1px sold gray',borderRadius:'50%',boxShadow:'1px 1px 4px rgba(0, 0, 0, 0.7)'}}>
                <EuiIcon type="gear"/>
            </EuiFlexItem>
            <EuiText><strong>SCM</strong></EuiText>
        </EuiFlexGroup>
        <EuiCollapsibleNavGroup 
            isCollapsible 
            initialIsOpen={true} 
            title={<EuiText style={{fontWeight:'bold'}}>Quản lý tài khoản</EuiText>} 
            style={{borderBlockStart:'none'}}>
            <EuiListGroup flush gutterSize='none'>
                <EuiListGroupItem label='Danh sách tài khoản' style={{paddingBlock:'none'}}/>
                <EuiListGroupItem label='Thêm mới tài khoản' style={{}}/>
            </EuiListGroup>
        </EuiCollapsibleNavGroup>
            <EuiListGroup gutterSize='none' style={{padding:'4px 8px'}}>
                <EuiListGroupItem label="Quản lý trường học" style={{fontWeight:'bold'}}/>
                <EuiListGroupItem label='Quản lý lớp học'/>
            </EuiListGroup>
            <EuiListGroup gutterSize='none' style={{padding:'4px 8px'}}>
                <EuiListGroupItem label='Sự kiện & HĐNK' style={{fontWeight:'bold'}}/>
                <EuiListGroupItem label='Tạo mới sự kiện & HĐNK'/>
            </EuiListGroup>
            <EuiListGroup gutterSize='none' style={{padding:'4px 8px'}}>
                <EuiListGroupItem label='Quản lý giảng dạy' style={{fontWeight:'bold'}}/>
                <EuiListGroupItem label='Sổ đầu bài'/>
                <EuiListGroupItem label='Thời khóa biểu'/>
            </EuiListGroup>
            <EuiListGroup gutterSize='none' style={{padding:'4px 8px'}}>
                <EuiListGroupItem label='Quản lý tài chính' style={{fontWeight:'bold'}}/>
                <EuiListGroupItem label='Tiền'/>
                <EuiListGroupItem label='Tiền'/>
            </EuiListGroup>
            <EuiListGroup gutterSize='none' style={{padding:'4px 8px'}}>
                <EuiListGroupItem label='Cơ sở vật chất' style={{fontWeight:'bold'}}/>
                <EuiListGroupItem label='Bảo mật'/>
                <EuiListGroupItem label='Thiết bị'/>
            </EuiListGroup>
    </>
  )
}
