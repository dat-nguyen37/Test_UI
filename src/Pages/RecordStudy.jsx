import { EuiAccordion, EuiAvatar, EuiBreadcrumbs, EuiButton, EuiButtonEmpty, EuiButtonIcon, EuiCollapsibleNavGroup, EuiConfirmModal, EuiDatePicker, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiFormRow, EuiHeader, EuiHeaderBreadcrumbs, EuiHeaderLogo, EuiHeaderSection, EuiHeaderSectionItem, EuiHeaderSectionItemButton, EuiIcon, EuiImage, EuiLink, EuiListGroup, EuiListGroupItem, EuiPage, EuiPageHeader, EuiPageHeaderContent, EuiPageSection, EuiPageSidebar, EuiPageTemplate, EuiPanel, EuiSelect, EuiSpacer, EuiText } from '@elastic/eui'
import moment from 'moment';
import React, { useState } from 'react'

export default function RecordStudy() {
    const [isModal,setIsModal]=useState(false)
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [startDate, setStartDate] = useState(moment());

    const closeModal = () => setIsModal(false);
    const showModal = () => setIsModal(true);
    let modal;
    if(isModal){
        modal=(
            <EuiConfirmModal
            title="Xác nhận thay đổi"
            cancelButtonText="Hủy"
            confirmButtonText="Xác nhận"
            onCancel={closeModal}
            onConfirm={closeModal}
            >
                <p>Bạn đã thay đổi các thông tin: Ngày sinh, Số điện thoại của phụ huynh</p>
            </EuiConfirmModal>
        )
    }

    const handleChange = (date) => {
        setStartDate(date);
    };
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
      };
  return (
    <EuiPageTemplate style={{background:'white'}}>
        {isNavOpen && 
            <EuiPageSidebar minWidth='220px'>
                <EuiFlexGroup>
                    <EuiIcon/>
                    <EuiText><strong>SCM</strong></EuiText>
                </EuiFlexGroup>
                <EuiAccordion buttonContent="Quản lý tài khoản">
                    <EuiCollapsibleNavGroup isCollapsible={true}
  initialIsOpen={true}>
                        <EuiListGroup>
                            <EuiListGroupItem label="Danh sách tài khoản"/>
                        </EuiListGroup>
                    </EuiCollapsibleNavGroup>
                </EuiAccordion>
            </EuiPageSidebar>
            }
        <EuiPageHeader>
            <EuiPageHeaderContent>
                <EuiHeader style={{width:'100%'}}>
                    <EuiHeaderSection>
                        <EuiHeaderSectionItem>
                            <EuiButtonEmpty onClick={toggleNav} iconType="menu" color='text'/>
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
                                <EuiHeaderSectionItemButton>
                                    <EuiAvatar name='EL' color="#68C4A2" size='s'/>
                                </EuiHeaderSectionItemButton>
                            </EuiHeaderSectionItem>
                            <EuiHeaderSectionItem>
                                <EuiIcon type="apps" size='m'/>
                            </EuiHeaderSectionItem>
                        </EuiFlexGroup>
                    </EuiHeaderSection>
                </EuiHeader>
            </EuiPageHeaderContent>
        </EuiPageHeader>
        <EuiPageTemplate.Header
            pageTitle={
            <EuiFlexGroup alignItems='center' gutterSize='m'>
                <EuiButtonIcon display='fill' iconType='arrowLeft' size='m'/>
                <EuiText><h1>Hồ sơ học sinh</h1></EuiText>
            </EuiFlexGroup>}
            rightSideItems={[<EuiButton fill iconType="documentEdit">Chỉnh sửa</EuiButton>]}/>
        <EuiPageSection>
            <EuiFlexGroup>
                <EuiPanel grow={false} style={{minWidth:'300px'}}>
                    <EuiFlexGroup direction='column'>
                        <EuiFlexItem>
                            <EuiFlexGroup direction='column'>
                                <EuiImage src='/assets/avata.png' width="150" height="150" style={{borderRadius:'50%'}}/>
                                <EuiText textAlign='center'><h3>Lê Chí Tuyền</h3></EuiText>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false} style={{border:'1px solid '}}/>
                        <EuiFlexItem>
                            <EuiFlexGroup direction='column' gutterSize='m'>
                                <EuiText><strong>ID học sinh:&nbsp;</strong>20242024</EuiText>
                                <EuiText><strong>Trạng thái học tập:&nbsp;</strong>Đang học</EuiText>
                                <EuiText><strong>Điểm trung bình:&nbsp;</strong>3.7</EuiText>
                                <EuiText><strong>Học lực:&nbsp;</strong>Giỏi</EuiText>
                                <EuiText><strong>Hạnh kiểm:&nbsp;</strong>Tốt</EuiText>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <EuiImage src='/assets/qr.png' size="s"/>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiPanel>
                <EuiPanel>
                    <EuiText><h3>Thông tin cá nhân</h3></EuiText>
                    <EuiSpacer/>
                    <EuiFlexGroup direction='column'>
                        <EuiFlexItem>
                            <EuiFlexGroup>
                                <EuiFlexItem grow={2}>
                                    <EuiFormRow label="Họ" fullWidth>
                                        <EuiFieldText placeholder='Họ' fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={2}>
                                <EuiFormRow label="Tên đệm và tên" fullWidth>
                                        <EuiFieldText placeholder='Tên đệm và tên' fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={1}>
                                <EuiFormRow label="Giới tính" fullWidth>
                                        <EuiSelect options={[{label:'Nam'},{label:'Nữ'}]} fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <EuiFlexGroup>
                                <EuiFlexItem grow={2}>
                                    <EuiFormRow label="Email" fullWidth>
                                        <EuiFieldText placeholder='Email    ' fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={2}>
                                <EuiFormRow label="Số điện thoại" fullWidth>
                                        <EuiFieldText placeholder='Số điện thoại' fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={1}>
                                <EuiFormRow label="Ngày sinh" fullWidth>
                                        <EuiDatePicker selected={startDate} onChange={handleChange} fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <EuiFlexGroup>
                                <EuiFlexItem grow={2}>
                                    <EuiFormRow label="Địa chỉ thường trú" fullWidth>
                                        <EuiFieldText placeholder='Địa chỉ thường trú' fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={2}>
                                    <EuiFormRow label="Trường" fullWidth>
                                        <EuiFieldText placeholder='Trường' fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={1}>
                                    <EuiFormRow label="Lớp" fullWidth>
                                        <EuiFieldText placeholder='Lớp' fullWidth/> 
                                    </EuiFormRow>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                    <EuiSpacer/>
                    <EuiText><h3>Thông tin phụ huynh</h3></EuiText>
                    <EuiSpacer/>
                    <EuiFlexGroup direction='column'>
                        <EuiFlexItem>
                            <EuiFlexGroup>
                                <EuiFlexItem grow={2}>
                                    <EuiFormRow label="Họ và tên mẹ" fullWidth>
                                        <EuiFieldText placeholder='Họ và tên mẹ' fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={2}>
                                <EuiFormRow label="Đơn vị công tác" fullWidth>
                                        <EuiFieldText placeholder='Đơn vị công tác' fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={1}>
                                    <EuiFormRow label="Số điện thoại" fullWidth>
                                        <EuiFieldText placeholder='Số điện thoại' fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <EuiFlexGroup>
                                <EuiFlexItem grow={2}>
                                    <EuiFormRow label="Họ và tên bố" fullWidth>
                                        <EuiFieldText placeholder='Họ và tên bố' fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={2}>
                                    <EuiFormRow label="Đơn vị công tác" fullWidth>
                                        <EuiFieldText placeholder='Đơn vị công tác' fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={1}>
                                    <EuiFormRow label="Số điện thoại" fullWidth>
                                        <EuiFieldText placeholder='Số điện thoại' fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <EuiFlexGroup>
                                <EuiFlexItem grow={2}>
                                    <EuiFormRow label="Khi cần liên hệ với" fullWidth>
                                        <EuiFieldText placeholder='Khi cần liên hệ với' fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={2}>
                                    <EuiFormRow label="Quan hệ" fullWidth>
                                        <EuiFieldText placeholder='Quan hệ' fullWidth/>
                                    </EuiFormRow>
                                </EuiFlexItem>
                                <EuiFlexItem grow={1}>
                                    <EuiFormRow label="Số điện thoại" fullWidth>
                                        <EuiFieldText placeholder='Số điện thoại' fullWidth/> 
                                    </EuiFormRow>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                    <EuiSpacer/>
                    <EuiFlexGroup justifyContent='flexEnd'>
                        <EuiButton iconType='plusInCircle'>Đặt lại</EuiButton>
                        <EuiButton fill onClick={showModal} iconType='save'>Lưu</EuiButton>
                    </EuiFlexGroup>
                </EuiPanel>
            </EuiFlexGroup>
        </EuiPageSection>
        <EuiPageSection style={{background:'#343741'}}>
            <EuiFlexGroup justifyContent='spaceBetween' alignItems='center'>
                <EuiText color='#FFFFFF'>School Connected M- Hệ thống quản lý trường học</EuiText>
                <EuiLink href='Mailto:info@ecotel.com'><EuiText color='#FFFFFF'>info@ecotel.com</EuiText></EuiLink>
            </EuiFlexGroup>
        </EuiPageSection>
        {modal}
    </EuiPageTemplate>
  )
}
