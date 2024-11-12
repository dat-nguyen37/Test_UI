import { EuiBasicTable, EuiButton, EuiButtonEmpty, EuiButtonIcon, EuiDatePicker, EuiFieldSearch, EuiFieldText, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiFormControlLayout, EuiFormRow, EuiHeader, EuiIcon, EuiLink, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiPageTemplate, EuiPopover, EuiSelect, EuiText } from '@elastic/eui'
import moment from 'moment';
import React, { useState } from 'react'

export default function ListEventTeacher() {
    const [isModal,setIsModal]=useState(false)
    const [startDate, setStartDate] = useState(moment());

    const handleChange = (date) => {
        setStartDate(date);
    };

    const openModal=()=>setIsModal(true)
    const closeModal=()=>setIsModal(false)

    const modal=(
        <EuiModal onClose={closeModal} >
            <EuiModalHeader>
                <EuiModalHeaderTitle><h3>Thêm mới sự kiện</h3></EuiModalHeaderTitle>
            </EuiModalHeader>
            <EuiModalBody>
                <EuiFlexGrid columns={2}>
                    <EuiFlexItem>
                        <EuiFormRow label="Tên sự kiện">
                            <EuiFieldText placeholder='Giải bóng rổ khối 10'/>
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFormRow label="Đơn vị tổ chức">
                            <EuiFieldText placeholder='Phongf thể thao'/>
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFormRow label="Email liên lạc">
                            <EuiFieldText placeholder='info@ecotel.com'/>
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFormRow label="Địa điểm tổ chức">
                            <EuiFieldText placeholder='Sân vận động'/>
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFormRow label="Ngày giờ diễn ra">
                            <EuiDatePicker
                            showTimeSelect
                            selected={startDate}
                            onChange={handleChange}/>
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFormRow label="Phân loại">
                            <EuiSelect 
                                options={[
                                    {value:'',label:'Phân loại'},
                                    {value:'',label:'Sự kiện ngoại khóa'},
                                    {value:'',label:'Hoạt động'},
                                ]} fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
                </EuiFlexGrid>
            </EuiModalBody>
            <EuiModalFooter>
                <EuiFlexGroup justifyContent='flexEnd'>
                    <EuiButtonEmpty>Hủy</EuiButtonEmpty>
                    <EuiButton fill>Thêm mới sự kiện</EuiButton>
                </EuiFlexGroup>
            </EuiModalFooter>
        </EuiModal>
    )

    const columns=[
        {
            field:'ten',
            name:'Tên sự kiện/ hoạt động',
            render:(item)=>(
                <EuiLink>{item}</EuiLink>
            )
        },
        {field:'donvi',name:'Đơn vị tổ chức'},
        {field:'phanloai',name:'Phân loại'},
        {field:'email',name:'Email'},
        {field:'ngaybd',name:'Ngày diễn ra',width:'100px'},
        {field:'thoigian',name:'Thời gian',width:'80px'},
        {field:'diadiem',name:'Địa điểm tổ chức'},
        {
            name:'Thao tác',
            actions:[
                {
                    type:'icon',
                    render:()=>(
                        <EuiButtonEmpty iconType="plusInCircle">Tham gia</EuiButtonEmpty>
                    ),
                    onClick:()=>{}
                }
            ],
            width:'80px'
        },
        {
            name:'Thao tác',
            actions:[
                {
                    type:'icon',
                    render:()=>(
                        <EuiFlexGroup>
                            <EuiIcon type="documentEdit" color='primary'/>
                        </EuiFlexGroup>
                    ),
                    onClick:()=>{}
                },
                {
                    type:'icon',
                    render:()=>(
                        <EuiFlexGroup>
                            <EuiIcon type="trash" color='danger'/>
                        </EuiFlexGroup>
                    ),
                    onClick:()=>{}
                }
            ],
            width:'80px'
        },
    ]

    const items=[
        {'ten':'Giải bóng đá khối 10','donvi':'Phòng thể thao','phanloai':'Sự kiện ngoại khóa','email':'bachkhoa@gmail.com','ngaybd':'30/02/2024','thoigian':'6:50 pm','diadiem':'Sân vận động'},
        {'ten':'Giải bóng đá khối 11','donvi':'Phòng thể thao','phanloai':'Sự kiện ngoại khóa','email':'bachkhoa@gmail.com','ngaybd':'30/02/2024','thoigian':'6:50 pm','diadiem':'Sân vận động'},
        {'ten':'Giải bóng đá khối 12','donvi':'Phòng thể thao','phanloai':'Sự kiện ngoại khóa','email':'bachkhoa@gmail.com','ngaybd':'30/02/2024','thoigian':'6:50 pm','diadiem':'Sân vận động'},
        {'ten':'Giải bóng đá khối 13','donvi':'Phòng thể thao','phanloai':'Sự kiện ngoại khóa','email':'bachkhoa@gmail.com','ngaybd':'30/02/2024','thoigian':'6:50 pm','diadiem':'Sân vận động'},
        {'ten':'Giải bóng đá khối 14','donvi':'Phòng thể thao','phanloai':'Sự kiện ngoại khóa','email':'bachkhoa@gmail.com','ngaybd':'30/02/2024','thoigian':'6:50 pm','diadiem':'Sân vận động'},
        {'ten':'Giải bóng đá khối 15','donvi':'Phòng thể thao','phanloai':'Sự kiện ngoại khóa','email':'bachkhoa@gmail.com','ngaybd':'30/02/2024','thoigian':'6:50 pm','diadiem':'Sân vận động'},
        {'ten':'Giải bóng đá khối 16','donvi':'Phòng thể thao','phanloai':'Sự kiện ngoại khóa','email':'bachkhoa@gmail.com','ngaybd':'30/02/2024','thoigian':'6:50 pm','diadiem':'Sân vận động'},
        {'ten':'Giải bóng đá khối 17','donvi':'Phòng thể thao','phanloai':'Sự kiện ngoại khóa','email':'bachkhoa@gmail.com','ngaybd':'30/02/2024','thoigian':'6:50 pm','diadiem':'Sân vận động'},
        {'ten':'Giải bóng đá khối 18','donvi':'Phòng thể thao','phanloai':'Sự kiện ngoại khóa','email':'bachkhoa@gmail.com','ngaybd':'30/02/2024','thoigian':'6:50 pm','diadiem':'Sân vận động'},
        {'ten':'Giải bóng đá khối 19','donvi':'Phòng thể thao','phanloai':'Sự kiện ngoại khóa','email':'bachkhoa@gmail.com','ngaybd':'30/02/2024','thoigian':'6:50 pm','diadiem':'Sân vận động'},
    ]

    const [pageIndex,setPageIndex]=useState(0)
    const [pageSize,setPageSize]=useState(5)

    const onChange=({page})=>{
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
            <EuiFlexGroup direction='column'>
                <EuiFlexItem>
                    <EuiFlexGroup justifyContent='spaceBetween'>
                        <EuiFlexGroup alignItems='center' gutterSize='s'>
                            <EuiButtonIcon iconType="arrowLeft" display='fill' size='s'/>
                            <EuiText><h3>Sự kiện và hoạt động ngoại khóa</h3></EuiText>
                        </EuiFlexGroup>
                        <EuiButton onClick={openModal} iconType='plusInCircle' fill>Thêm sự kiện/ hoạt động</EuiButton>
                    </EuiFlexGroup>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFlexGroup>
                        <EuiFlexItem>
                            <EuiFormControlLayout style={{fontSize:'14px'}} fullWidth>
                                <EuiFieldSearch placeholder='Tìm kiếm theo tên sự kiện' fullWidth/>
                            </EuiFormControlLayout>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiFormControlLayout style={{fontSize:'14px'}} fullWidth>
                                <EuiSelect 
                                options={[
                                    {value:'',label:'Phân loại'},
                                    {value:'',label:'Sự kiện ngoại khóa'},
                                    {value:'',label:'Hoạt động'},
                                ]} fullWidth/>
                            </EuiFormControlLayout>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiFormControlLayout style={{fontSize:'14px'}}>
                                <EuiPopover
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
        }
        />
        <EuiPageTemplate.Section>
            <EuiBasicTable
            columns={columns}
            items={itemOfPages}
            pagination={paginations}
            onChange={onChange}/>
        </EuiPageTemplate.Section>
        {isModal && modal}
    </>
  )
}
