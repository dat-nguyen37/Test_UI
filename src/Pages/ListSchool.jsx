import { EuiBasicTable, EuiButton, EuiButtonIcon, EuiFieldSearch,EuiCollapsibleNavGroup,EuiListGroup,EuiListGroupItem, EuiFlexGroup, EuiFlexItem, EuiFormControlLayout, EuiFormRow, EuiIcon, EuiLink, EuiPageTemplate, EuiPopover, EuiSelect, EuiText } from '@elastic/eui'
import React, { useState } from 'react'
import Headers from '../component/Headers'
import Footer from '../component/Footer'
import SideBar from '../component/SideBar'

export default function ListSchool() {

    const columns=[
        {field:'tentruong',name:'Tên trường học'},
        {field:'diachi',name:'Địa chỉ'},
        {field:'email',name:'Email'},
        {field:'sodienthoai',name:'Số điện thoại'},
        {field:'hieutruong',name:'Hiệu trưởng'},
        {field:'giamsatkn',name:'Giám sát kết nối'},
        {
            field:'thaotac',
            name:'Thao tác',
            actions:[
                {
                    name:<span>edit</span>,
                    type:'icon',
                    render: () => (
                        <EuiIcon type="documentEdit" color='green' />
                      ),
                    href: 'https://elastic.co',
                    
                },
                {
                    name:<span>delete</span>,
                    type:'icon',
                    render: () => (
                        <EuiIcon type="trash" color="red" />
                      ),
                    href: 'https://elastic.co',
                }
            ]},
    ]
    const items=[
        {'tentruong':'THPT Bách Khoa1','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383','hieutruong':'Lê Chí Tuyền','giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa2','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383','hieutruong':'Lê Chí Tuyền','giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa3','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383','hieutruong':'Lê Chí Tuyền','giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa4','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383','hieutruong':'Lê Chí Tuyền','giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa5','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383','hieutruong':'Lê Chí Tuyền','giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa6','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383','hieutruong':'Lê Chí Tuyền','giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa7','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383','hieutruong':'Lê Chí Tuyền','giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa8','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383','hieutruong':'Lê Chí Tuyền','giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa9','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383','hieutruong':'Lê Chí Tuyền','giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa10','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383','hieutruong':'Lê Chí Tuyền','giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa11','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383','hieutruong':'Lê Chí Tuyền','giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa12','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383','hieutruong':'Lê Chí Tuyền','giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa13','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383','hieutruong':'Lê Chí Tuyền','giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa14','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383','hieutruong':'Lê Chí Tuyền','giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa15','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383','hieutruong':'Lê Chí Tuyền','giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa16','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383','hieutruong':'Lê Chí Tuyền','giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa16','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383','hieutruong':'Lê Chí Tuyền','giamsatkn':'1000GB'},
        {'tentruong':'THPT Bách Khoa17','diachi':'Số 1 Đại Cồ Việt, HÀ Nội','email':'bachkhoa@gmail.com','sodienthoai':'038436383','hieutruong':'Lê Chí Tuyền','giamsatkn':'1000GB'},
    ]

    const [pageIndex,setPageIndex]=useState(0)
    const [pageSize,setPageSize]=useState(5)

    const onChangeTable=({page})=>{
        const {index:pageIndex,size:pageSize}=page
        setPageIndex(pageIndex)
        setPageSize(pageSize)
    }

    const findItem=(items,pageIndex,pageSize)=>{
        let itemOfPage;
        if(!pageIndex && !pageSize)
        {
            itemOfPage=items
        }else{
            itemOfPage=items.slice(pageIndex*pageSize,(pageIndex+1)*pageSize)
        }
        return {itemOfPage};
    }
    const {itemOfPage}=findItem(items,pageIndex,pageSize)
    const pagination={
        pageIndex,
        pageSize,
        totalItemCount:items.length,
        pageSizeOptions:[10,5,0],
    }
  return (
    <>
    <EuiPageTemplate>
        {/* <EuiPageTemplate.Sidebar minWidth='220px' paddingSize='s'>
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
        </EuiPageTemplate.Sidebar> */}
            <EuiPageTemplate.Header
            paddingSize='m'
            pageTitle={
                <EuiFlexGroup direction='column'>
                    <EuiFlexItem>
                        <EuiFlexGroup justifyContent='spaceBetween'>
                            <EuiFlexItem grow={false}>
                                <EuiFlexGroup alignItems='center' gutterSize='s'>
                                    <EuiButtonIcon iconType="arrowLeft" display='fill' size='s'/>
                                    <EuiText><h3>Danh sách trường học</h3></EuiText>
                                </EuiFlexGroup>
                            </EuiFlexItem>
                            <EuiFlexItem grow={false}>
                                <EuiButton iconType="plusInCircle" fill>Thêm trường học</EuiButton>
                            </EuiFlexItem>
                        </EuiFlexGroup>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFlexGroup alignItems='center'>
                            <EuiFlexItem grow={3}>
                                <EuiFormControlLayout style={{fontSize:'14px'}} fullWidth>
                                    <EuiFieldSearch placeholder='Tìm kiếm theo tên trường' fullWidth/>
                                </EuiFormControlLayout>
                            </EuiFlexItem>
                            <EuiFlexItem>
                            <EuiFormControlLayout style={{fontSize:'14px'}} fullWidth>
                                <EuiSelect
                                options={[
                                    {value:'',text:'Tỉnh/ thành'}
                                ]} fullWidth/>
                                </EuiFormControlLayout>
                            </EuiFlexItem>
                            <EuiFlexItem>
                                <EuiFormControlLayout style={{fontSize:'14px'}} fullWidth>
                                    <EuiSelect
                                    options={[
                                        {value:'',text:'Quận/ huyện'}
                                    ]} fullWidth/>
                                </EuiFormControlLayout>
                            </EuiFlexItem>
                            <EuiFlexItem>
                                <EuiFormControlLayout style={{fontSize:'14px'}} fullWidth>
                                    <EuiSelect
                                    options={[
                                        {value:'',text:'Hệ đào tạo'}
                                    ]} fullWidth/>
                                </EuiFormControlLayout>
                            </EuiFlexItem>
                            <EuiFlexItem>
                            <EuiFormControlLayout style={{fontSize:'14px'}} fullWidth>
                                <EuiPopover
                                    hasArrow={false}
                                    button={
                                        <EuiFlexGroup alignItems='center' gutterSize='s'>
                                            <EuiText color='blue'>Năm học: 2024</EuiText>
                                            <EuiIcon type="arrowDown" color='blue'/>
                                        </EuiFlexGroup>
                                    }>
                                    </EuiPopover>
                                </EuiFormControlLayout>
                            </EuiFlexItem>
                        </EuiFlexGroup>
                    </EuiFlexItem>
                </EuiFlexGroup>
            }/>
            <EuiPageTemplate.Section>
                <EuiBasicTable
                tableLayout='auto'
                columns={columns}
                items={itemOfPage}
                pagination={pagination}
                onChange={onChangeTable}/>
            </EuiPageTemplate.Section>
    </EuiPageTemplate>
    </>
  )
}
