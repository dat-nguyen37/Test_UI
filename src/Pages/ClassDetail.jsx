import { EuiAvatar, EuiBasicTable, EuiButton, EuiButtonIcon, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiFormRow, EuiHorizontalRule, EuiIcon, EuiPageTemplate, EuiSelect, EuiText } from '@elastic/eui'
import React, { useState } from 'react'

export default function ClassDetail() {
    const columns=[
        {
            field:'avatar',
            name:'',
            render:(item)=>(
                <EuiAvatar name='DN' src={item}/>
            ),
            width:'50px'
        },
        {field:'hoten',name:'Họ và tên học sinh'},
        {field:'id',name:'ID học sinh'},
        {field:'email',name:'Email'},
        {field:'sdt',name:'Số điện thoại liên lạc'},
        {field:'gioitinh',name:'Giới tính',width:'70px'},
        {field:'tk1',name:'Điểm tổng kết HK1'},
        {field:'tk2',name:'Điểm tổng kết HK2'},
        {field:'ngaysinh',name:'Ngày sinh',width:'90px'},
        {field:'hoatdong',name:'Hoạt động tham gia'},
        {
            name:'Thao tác',
            width:'80px',
            actions:[
                {
                    name:<span>edit</span>,
                    type:'icon',
                    render:()=>(
                        <EuiIcon type="documentEdit" color='primary'/>
                    ),
                    onClick:()=>{}
                },
                {
                    name:<span>delete</span>,
                    type:'icon',
                    render:()=>(
                        <EuiIcon type="trash" color='danger'/>
                    ),
                    onClick:()=>{}
                },
            ]
        },
    ]
    const items=[
        {'avatar':'/assets/avata.png','hoten':'Le Chi Tuyen','id':1323,'email':'info@ecotel.com','sdt':'08388343','gioitinh':'nam','tk1':10,'tk2':10,'ngaysinh':'20/10/2024','hoatdong':4324324},
        {'hoten':'Le Chi Tuyen','id':1323,'email':'info@ecotel.com','sdt':'08388343','gioitinh':'nam','tk1':10,'tk2':10,'ngaysinh':'20/10/2024','hoatdong':4324324},
        {'hoten':'Le Chi Tuyen','id':1323,'email':'info@ecotel.com','sdt':'08388343','gioitinh':'nam','tk1':10,'tk2':10,'ngaysinh':'20/10/2024','hoatdong':4324324},
        {'hoten':'Le Chi Tuyen','id':1323,'email':'info@ecotel.com','sdt':'08388343','gioitinh':'nam','tk1':10,'tk2':10,'ngaysinh':'20/10/2024','hoatdong':4324324},
        {'hoten':'Le Chi Tuyen','id':1323,'email':'info@ecotel.com','sdt':'08388343','gioitinh':'nam','tk1':10,'tk2':10,'ngaysinh':'20/10/2024','hoatdong':4324324},
        {'hoten':'Le Chi Tuyen','id':1323,'email':'info@ecotel.com','sdt':'08388343','gioitinh':'nam','tk1':10,'tk2':10,'ngaysinh':'20/10/2024','hoatdong':4324324},
        {'hoten':'Le Chi Tuyen','id':1323,'email':'info@ecotel.com','sdt':'08388343','gioitinh':'nam','tk1':10,'tk2':10,'ngaysinh':'20/10/2024','hoatdong':4324324},
    ]

    const [pageIndex,setPageIndex]=useState(0)
    const [pageSize,setPageSize]=useState(5)

    const onChangeTable=({page})=>{
        const {index:pageIndex,size:pageSize}=page
        setPageIndex(pageIndex)
        setPageSize(pageSize)
    }

    const itemOfPage=(items,pageIndex,pageSize)=>{
        let itemOfPages;
        if(!pageIndex && !pageSize){
            itemOfPages=items
        }else{
            itemOfPages=items.slice(pageIndex*pageSize,(pageIndex+1)*pageSize)
        }
        return {itemOfPages}
    }
    const {itemOfPages}=itemOfPage(items,pageIndex,pageSize)
    const paginations={
        pageIndex,
        pageSize,
        totalItemCount:items.length,
        pageSizeOptions:[0,5,10]
    }
  return (
    <>
    <EuiPageTemplate.Header
    paddingSize='m'
    pageTitle={
        <EuiFlexGroup alignItems='center' gutterSize='s'>
            <EuiButtonIcon iconType="arrowLeft" display='fill' size='s'/>
            <EuiText><h3>Thông tin chi tiết lớp học</h3></EuiText>
        </EuiFlexGroup>
    }
    rightSideItems={[
        <EuiFlexGroup>
            <EuiButton fill iconType="list">Thông tin lớp học</EuiButton>
            <EuiButton fill iconType="documentEdit">Chỉnh sửa thông tin lớp học</EuiButton>
        </EuiFlexGroup>
    ]}/>
    <EuiPageTemplate.Section paddingSize='s' grow={false}>
        <EuiFlexGroup direction='column' gutterSize='m'>
            <EuiText><h3>10A1-THPT Bách Khoa</h3></EuiText>
            <EuiFlexGroup>
                    <EuiFlexItem grow={3}>
                        <EuiFormRow label="Tên lớp học" fullWidth>
                            <EuiFieldText placeholder='10A1' fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem grow={3}>
                        <EuiFormRow label="Sĩ số" fullWidth>
                            <EuiFieldText placeholder='40' fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem grow={1}>
                        <EuiFormRow label="Khối lớp" fullWidth>
                            <EuiSelect
                            options={[
                                {value:'10',label:10},
                                {value:'11',label:11},
                                {value:'12',label:12},
                            ]} fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem grow={2}>
                        <EuiFormRow label="Phòng học cố định" fullWidth>
                            <EuiFieldText placeholder='D3-101' fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
            </EuiFlexGroup>
            <EuiFlexGroup>
                    <EuiFlexItem>
                        <EuiFormRow label="Giáo viên chủ nhiệm" fullWidth>
                            <EuiFieldText placeholder='Lê Chí Tuyền' fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFormRow label="SĐT" fullWidth>
                            <EuiFieldText placeholder='0983737373' fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFormRow label="Email" fullWidth>
                            <EuiFieldText placeholder='ìno@ecotel.com.vn' fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
            </EuiFlexGroup>
        </EuiFlexGroup>
    </EuiPageTemplate.Section>
    <EuiPageTemplate.Section paddingSize='s'>
        <EuiFlexGroup justifyContent='spaceBetween'>
            <EuiText><h3>Danh sách học sinh</h3></EuiText>
            <EuiButton iconType="plusInCircle" fill>Thêm học sinh</EuiButton>
        </EuiFlexGroup>
        <EuiText>Sĩ số: <b>40</b></EuiText>
        <EuiHorizontalRule margin='none' style={{height:2}}/>
        <EuiBasicTable
        border={true}
        items={itemOfPages  }
        columns={columns}
        pagination={paginations}
        onChange={onChangeTable}/>
    </EuiPageTemplate.Section>
    </>
  )
}
