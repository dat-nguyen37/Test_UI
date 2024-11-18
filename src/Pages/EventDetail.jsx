import { EuiAvatar, EuiBasicTable, EuiButton, EuiButtonIcon, EuiDatePicker, EuiFieldText, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiFormRow, EuiHealth, EuiHorizontalRule, EuiIcon, EuiPageTemplate, EuiSelect, EuiText, EuiTitle } from '@elastic/eui'
import moment from 'moment';
import React, { useState } from 'react'

export default function EventDetail() {
    const [startDate, setStartDate] = useState(moment());

    const columns=[
        {
            field:'avatar',
            name:'',
            render:(item)=>(
                <EuiAvatar name='DN' imageUrl={item}/>
            ),
            width:'50px'
        },
        {field:'hoten',name:'Họ và tên học sinh'},
        {field:'id',name:'ID học sinh'},
        {field:'email',name:'Email'},
        {field:'sdt',name:'Số điện thoại liên lạc'},
        {field:'gt',name:'Giới tính'},
        {field:'ns',name:'Ngày sinh'},
        {
            field:'thaotac',
            name:'Thao tác',
            actions:[
                {
                    name:<span>edit</span>,
                    type:'icon',
                    render:()=>(
                        <EuiIcon type="indexEdit" color='primary'/>
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
                }
            ]
        },
        {
            field:'trangthai',
            name:'Trạng thái',
            dataType:'boolean',
            render: (item) => {
                const color = item==='online' ? 'success' : 'danger';
                const label = item==='online' ? 'Online' : 'Offline';
                return <EuiHealth color={color}>{label}</EuiHealth>;
              },
        },
    ]
    const items=[
        {hoten:'Lê Chí Tuyền',id:'73737731',email:'info@gmail.com',sdt:3434343343,gt:'Nam',ns:'20242024',trangthai:'online'},
        {hoten:'Lê Chí Tuyền',id:'73737732',email:'info@gmail.com',sdt:3434343343,gt:'Nam',ns:'20242024',trangthai:'offline'},
        {hoten:'Lê Chí Tuyền',id:'73737733',email:'info@gmail.com',sdt:3434343343,gt:'Nam',ns:'20242024',trangthai:'online'},
        {hoten:'Lê Chí Tuyền',id:'73737734',email:'info@gmail.com',sdt:3434343343,gt:'Nam',ns:'20242024',trangthai:'online'},
        {hoten:'Lê Chí Tuyền',id:'73737735',email:'info@gmail.com',sdt:3434343343,gt:'Nam',ns:'20242024',trangthai:'online'},
        {hoten:'Lê Chí Tuyền',id:'73737736',email:'info@gmail.com',sdt:3434343343,gt:'Nam',ns:'20242024',trangthai:'online'},
        {hoten:'Lê Chí Tuyền',id:'73737737',email:'info@gmail.com',sdt:3434343343,gt:'Nam',ns:'20242024',trangthai:'offline'},
        {hoten:'Lê Chí Tuyền',id:'73737738',email:'info@gmail.com',sdt:3434343343,gt:'Nam',ns:'20242024',trangthai:'online'},
        {hoten:'Lê Chí Tuyền',id:'73737739',email:'info@gmail.com',sdt:3434343343,gt:'Nam',ns:'20242024',trangthai:'offline'},
        {hoten:'Lê Chí Tuyền',id:'73737730',email:'info@gmail.com',sdt:3434343343,gt:'Nam',ns:'20242024',trangthai:'online'},
    ]

    const [pageIndex,setPageIndex]=useState(0)
    const [pageSize,setPageSize]=useState(5)

    const onChange=({page})=>{
        const {index:pageIndex,size:pageSize}=page
        setPageIndex(pageIndex)
        setPageSize(pageSize)
    }

    const userByPage=(items,pageIndex,pageSize)=>{
        let userByPages;
        if(!pageIndex && !pageSize){
            userByPages=items
        }else{
            userByPages=items.slice(pageIndex*pageSize,(pageIndex+1)*pageSize)
        }
        return {userByPages}
    }
    const {userByPages}=userByPage(items,pageIndex,pageSize)

    const paginations={
        pageIndex,
        pageSize,
        totalItemCount:items.length,
        pageSizeOptions:[0,5,10]
    }
    const [selectedItems, setSelectedItems] = useState([]);
    const onSelectionChange = (selection) => {
      setSelectedItems(selection);
    };
    const selection={
        selectable:(item)=>item.trangthai==='online',
        selectableMessage:(selectable)=>
            !selectable ? 'Người này không thể chọn' : undefined,
        onSelectionChange,
        }

  return (
    <>
        <EuiPageTemplate.Header
        paddingSize='m'
        pageTitle={
            <EuiFlexGroup alignItems='center' gutterSize='s'>
                <EuiButtonIcon iconType="arrowLeft" display='fill' size='s'/>
                <EuiText><h2>Chi tiết sự kiện/ hoạt động ngoại khóa</h2></EuiText>
            </EuiFlexGroup>
        }
        rightSideItems={[
            <EuiFlexGroup alignItems='center' gutterSize='s'>
                <EuiButton>Chỉnh sửa</EuiButton>
                <EuiButton fill iconType="plusInCircle">Lưu thay đổi</EuiButton>
                <EuiButton color='danger' fill>Xóa sự kiện/ hoạt động</EuiButton>
            </EuiFlexGroup>
        ]}/>

        <EuiPageTemplate.Section grow={false}>
            <EuiFlexGroup direction='column'>
                <EuiTitle><h4>Giải bóng đá khối 10</h4></EuiTitle>
                <EuiFlexGroup alignItems='center'>
                    <EuiFlexItem>
                        <EuiFormRow label="Tên sự kiện/ hoạt động ngoại khóa" fullWidth>
                            <EuiFieldText placeholder='10A1' fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFormRow label="Đơn vị tổ chức" fullWidth>
                            <EuiFieldText placeholder='Phòng thể thao' fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFormRow label="Phân loại" fullWidth>
                            <EuiSelect options={[
                                {value:'Hoạt động ngoại khóa',label:'Hoạt động ngoại khóa'},
                                {value:'Sự kiện',label:'Sự kiện'},
                            ]} fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
                </EuiFlexGroup>
                <EuiFlexGroup alignItems='center'>
                    <EuiFlexItem>
                        <EuiFormRow label="Địa điểm tổ chức" fullWidth>
                            <EuiFieldText placeholder='Sân vận động' fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFormRow label="Ngày - giờ diễn ra" fullWidth>
                            <EuiDatePicker
                            showTimeSelect
                            selected={startDate}
                            onChange={(date)=>setStartDate(date)}/>
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFormRow label="Email" fullWidth>
                            <EuiFieldText placeholder='info@ecotel.com.vn' fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiFlexGroup>
        </EuiPageTemplate.Section>
        <EuiPageTemplate.Section>
            <EuiFlexGroup direction='column' gutterSize='s'>
                <EuiFlexGroup justifyContent='spaceBetween' alignItems='center'>
                    <EuiText><h4>Danh sách học sinh đăng kí tham gia</h4></EuiText>
                    <EuiButton iconType="documentEdit" fill>Thêm học sinh</EuiButton>
                </EuiFlexGroup>
                <EuiText>Tổng số: 100</EuiText>
                <EuiHorizontalRule margin='none'/>
                <EuiBasicTable 
                selection={selection}
                columns={columns}
                items={userByPages}
                itemId="id"
                pagination={paginations}
                onChange={onChange}/>
            </EuiFlexGroup>
        </EuiPageTemplate.Section>
    </>
  )
}
