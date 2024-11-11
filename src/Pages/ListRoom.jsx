import React, { useState } from 'react'
import Headers from '../component/Headers'
import { EuiAvatar, EuiBasicTable, EuiButton, EuiButtonIcon, EuiFlexGroup, EuiFlexItem, EuiIcon, EuiLink, EuiPageSection, EuiPageTemplate, EuiPopover, EuiText } from '@elastic/eui'

export default function ListRoom() {
    const columns=[
        {field:'lop',name:'Lớp'},
        {field:'gvcn',name:'Giáo viên chủ nhiệm'},
        {field:'email',name:'email'},
        {field:'sdt',name:'Số điện thoại'},
        {field:'phonghoc',name:'Phòng học cố định'},
        {field:'sohs',name:'Số học sinh'},
        {
            field:'thaotac',
            name:'Thao tác',
            actions:[
                {
                    name:<span>edit</span>,
                    type:'icon',
                    render:()=>(
                        <EuiIcon type="documentEdit"/>
                    ),
                    onClick:()=>{}
                },
                {
                    name:<span>delete</span>,
                    type:'icon',
                    render:()=>(
                        <EuiIcon type="trash"/>
                    ),
                    onClick:()=>{}
                }
            ]
        },
    ]
    const items=[
        {'lop':'10A1','gvcn':'Le chi tuyen','email':'backkhoa@gmail.com','sdt':'034832323','phonghoc':10,'sohs':40},
        {'lop':'10A2','gvcn':'Le chi tuyen','email':'backkhoa@gmail.com','sdt':'034832323','phonghoc':10,'sohs':40},
        {'lop':'10A3','gvcn':'Le chi tuyen','email':'backkhoa@gmail.com','sdt':'034832323','phonghoc':10,'sohs':40},
        {'lop':'10A4','gvcn':'Le chi tuyen','email':'backkhoa@gmail.com','sdt':'034832323','phonghoc':10,'sohs':40},
        {'lop':'10A5','gvcn':'Le chi tuyen','email':'backkhoa@gmail.com','sdt':'034832323','phonghoc':10,'sohs':40},
        {'lop':'10A6','gvcn':'Le chi tuyen','email':'backkhoa@gmail.com','sdt':'034832323','phonghoc':10,'sohs':40},
        {'lop':'10A7','gvcn':'Le chi tuyen','email':'backkhoa@gmail.com','sdt':'034832323','phonghoc':10,'sohs':40},
        {'lop':'10A8','gvcn':'Le chi tuyen','email':'backkhoa@gmail.com','sdt':'034832323','phonghoc':10,'sohs':40},
        {'lop':'10A9','gvcn':'Le chi tuyen','email':'backkhoa@gmail.com','sdt':'034832323','phonghoc':10,'sohs':40},
        {'lop':'10A10','gvcn':'Le chi tuyen','email':'backkhoa@gmail.com','sdt':'034832323','phonghoc':10,'sohs':40},
        {'lop':'10A11','gvcn':'Le chi tuyen','email':'backkhoa@gmail.com','sdt':'034832323','phonghoc':10,'sohs':40},
        {'lop':'10A12','gvcn':'Le chi tuyen','email':'backkhoa@gmail.com','sdt':'034832323','phonghoc':10,'sohs':40}
    ]
    const [pageIndex,setPageIndex]=useState(0)
    const [pageSize,setPageSize]=useState(5)

    const onChange=({page})=>{
        const {index:pageIndex,size:pageSize}=page
        setPageIndex(pageIndex)
        setPageSize(pageSize)
    }

    const findItem=(items,pageIndex,pageSize)=>{
        let itemOfPages;
        if(!pageIndex && !pageSize){
            itemOfPages=items
        }else{
            itemOfPages=items.slice(pageIndex*pageSize,(pageIndex+1)*pageSize)
        }
        return {itemOfPages}
    }
    const {itemOfPages}=findItem(items,pageIndex,pageSize)

    const paginations={
        pageIndex,
        pageSize,
        totalItemCount:items.length,
        pageSizeOptions:[0,5,10]
    }
  return (
    <>
        <EuiPageTemplate.Header
        paddingSize='s'
        pageTitle={
            <EuiFlexGroup direction='column'>
                <EuiFlexItem>
                    <EuiFlexGroup justifyContent='spaceBetween' alignItems='center'>
                        <EuiFlexItem grow={false}>
                            <EuiFlexGroup gutterSize='s' alignItems='center'>
                                <EuiButtonIcon iconType="arrowLeft" display='fill' size='s'/>
                                <EuiText><h2>Danh sách lớp học</h2></EuiText>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiButton iconType="plusInCircle" fill>Thêm lớp học</EuiButton>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFlexGroup justifyContent='spaceBetween' alignItems='center'>
                        <EuiFlexItem grow={false}>
                            <EuiFlexGroup alignItems='center'>
                                <EuiAvatar name='D' imageUrl='/assets/avata.png'/>
                                <EuiText>Trường THPT Bách Khoa</EuiText>
                                <EuiText>Hiệu trưởng:Lê Chí Tuyền</EuiText>
                                <EuiText>Tổng số lớp học:30</EuiText>
                                <EuiText>SĐT:09938439</EuiText>
                                <EuiText>Email: ecotel@gmail.com</EuiText>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiPopover
                                button={
                                <EuiFlexGroup alignItems='center' gutterSize='s'>
                                    <EuiText color='blue'>Năm học: 2024</EuiText>
                                    <EuiIcon type="arrowDown" color='blue'/>
                                </EuiFlexGroup>
                            }>

                            </EuiPopover>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiFlexItem>
            </EuiFlexGroup>
        }
        />
        <EuiPageTemplate.Section>
            <EuiBasicTable
            items={itemOfPages}
            columns={columns}
            pagination={paginations}
            onChange={onChange}/>
        </EuiPageTemplate.Section>
    </>
  )
}
