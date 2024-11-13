import { EuiBasicTable, EuiButton, EuiButtonEmpty, EuiButtonIcon, EuiConfirmModal, EuiDatePicker, EuiFieldSearch, EuiFieldText, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiFormControlLayout, EuiFormRow, EuiHeader, EuiIcon, EuiLink, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiPageTemplate, EuiPopover, EuiPopoverTitle, EuiSelect, EuiSelectable, EuiText } from '@elastic/eui'
import moment from 'moment';
import React, { useState } from 'react'

export default function ListEventTeacher() {
    const [isPopoverYear,setIsPopoverYear]=useState(false)
    const openPopoverYear=()=>setIsPopoverYear(!isPopoverYear)
    const closePopoverYear=()=>setIsPopoverYear(false)

    const [isModalAddEvent,setIsModalAddEvent]=useState(false)
    const [isModalConfirm,setIsModalConfirm]=useState(false)
    const [optionYear,setOptionYear]=useState([
        {label:'2022'},
        {label:'2023'},
        {label:'2024'},
        {label:'2025'},
        {label:'2026'},
    ])
    const selectedYear = optionYear.filter((option) => option.checked === 'on');

    const [isPopoverEvent,setIsPopoverEvent]=useState(false)
    const openPopoverEvent=()=>setIsPopoverEvent(!isPopoverEvent)
    const closePopoverEvent=()=>setIsPopoverEvent(false)
    const [optionEvent,setOptionEvent]=useState([
        {label:'Tất cả'},
        {label:'Sự kiện ngoại khóa'},
        {label:'Hoạt động'},
    ])
    const selectedEvent = optionEvent.filter((option) => option.checked === 'on');

    const [startDate, setStartDate] = useState(moment());

    const handleChange = (date) => {
        setStartDate(date);
    };

    const openModalAddEvent=()=>setIsModalAddEvent(true)
    const closeModalAddEvent=()=>setIsModalAddEvent(false)


    const modalAddEvent=(
        <EuiModal onClose={closeModalAddEvent} >
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
                    <EuiButtonEmpty onClick={closeModalAddEvent}>Hủy</EuiButtonEmpty>
                    <EuiButton fill>Thêm mới sự kiện</EuiButton>
                </EuiFlexGroup>
            </EuiModalFooter>
        </EuiModal>
    )

    const openModalConfirm=()=>setIsModalConfirm(true)
    const closeModalConfirm=()=>setIsModalConfirm(false)
    const modalConfirm=(
        <EuiConfirmModal
        title="Xác nhận tham gia sự kiện"
        confirmButtonText="Xác nhận"
        cancelButtonText="Hủy"
        onConfirm={closeModalConfirm}
        onCancel={closeModalConfirm}>
            <EuiText size='s'>Ấn xác nhận đê đăng kí tham gia sự kiện: <b>Giải bóng đá khối 10</b></EuiText>
        </EuiConfirmModal>
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
                        <EuiButtonEmpty onClick={openModalConfirm} iconType="plusInCircle">Tham gia</EuiButtonEmpty>
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
                        <EuiButton onClick={openModalAddEvent} iconType='plusInCircle' fill>Thêm sự kiện/ hoạt động</EuiButton>
                    </EuiFlexGroup>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiFlexGroup>
                        <EuiFlexItem grow={5}>
                            <EuiFormControlLayout style={{fontSize:'14px'}} fullWidth>
                                <EuiFieldSearch placeholder='Tìm kiếm theo tên sự kiện' fullWidth/>
                            </EuiFormControlLayout>
                        </EuiFlexItem>
                        <EuiFlexItem grow={1}>
                            <EuiFormControlLayout style={{fontSize:'14px'}} fullWidth>
                            <EuiPopover
                                panelStyle={{outline:'none',width:'240px'}}
                                isOpen={isPopoverEvent}
                                closePopover={closePopoverEvent}
                                button={
                                    <EuiFormControlLayout
                                        clear={{ onClick: () => {} }}
                                        onClick={openPopoverEvent}
                                        isDropdown
                                    >
                                        <EuiFieldText
                                        type="text"
                                        placeholder='Phân loại'
                                        value={selectedEvent[0].label}
                                        fullWidth
                                        />
                                    </EuiFormControlLayout>
                                }>
                                    <EuiPopoverTitle paddingSize='s'>
                                        <EuiText size='s'>Phân loại sự kiện</EuiText>
                                    </EuiPopoverTitle>
                                    <EuiSelectable
                                    options={optionEvent}
                                    onChange={(newOptions)=>setOptionEvent(newOptions)}
                                    singleSelection>
                                        {(list)=>list}
                                    </EuiSelectable>
                                </EuiPopover>
                            </EuiFormControlLayout>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiFormControlLayout style={{fontSize:'14px'}}>
                                <EuiPopover
                                panelStyle={{outline:'none'}}
                                isOpen={isPopoverYear}
                                closePopover={closePopoverYear}
                                button={
                                    <EuiFlexGroup onClick={openPopoverYear} alignItems='center' gutterSize='s'>
                                        <EuiText color='blue'>Năm học: {selectedYear[0]?.label ?? '2024'}</EuiText>
                                        <EuiIcon type="arrowDown" color='blue'/>
                                    </EuiFlexGroup>
                                }>
                                    <EuiSelectable
                                    searchable
                                    options={optionYear}
                                    onChange={(newOptions)=>setOptionYear(newOptions)}
                                    singleSelection
                                    searchProps={{placeholder:'Tìm kiếm năm học'}}>
                                        {(list, search) => (
                                            <>
                                            {search}
                                            {list}
                                            </>
                                        )}
                                    </EuiSelectable>
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
        {isModalAddEvent && modalAddEvent}
        {isModalConfirm && modalConfirm}

    </>
  )
}
