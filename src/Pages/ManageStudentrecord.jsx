import { EuiAvatar, EuiBasicTable, EuiButton, EuiButtonEmpty, EuiButtonIcon, EuiFieldText, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiFormRow, EuiHealth, EuiHorizontalRule, EuiIcon, EuiLink, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiPageSection, EuiPageTemplate, EuiPopover, EuiSelectable, EuiSpacer, EuiText, EuiTextArea } from '@elastic/eui'
import React, { useState } from 'react'

export default function ManageStudentrecord() {

    const column1=[
        {
            field:'monhoc',
            name:'Môn học',
            render:(item)=>(
                <EuiText color='blue' size='xs'>{item}</EuiText>
            ),
            footer:()=>{
                return <EuiText size='xs' color='blue'><b>ĐTB tất cả các môn học</b></EuiText>
            }
        },
        {
            field:'hk1',
            name:'Học kì I',
            width:'70px',
            footer:({items})=>{
                const total = items.reduce((sum, item) => sum + item.hk1, 0);
                const average = (total / items.length).toFixed(1);
                return <EuiText size='xs'>{average}</EuiText>
            }
        },
        {
            field:'hk2',
            name:'Học kì II',
            width:'70px',
            footer:({items})=>{
                const total = items.reduce((sum, item) => sum + item.hk2, 0);
                const average = (total / items.length).toFixed(1);
                return <EuiText size='xs'>{average}</EuiText>
            }
        },
        {
            field:'cuoinam',
            name:'Cuối năm',
            width:'70px',
            footer:({items})=>{
                const total = items.reduce((sum, item) => sum + item.cuoinam, 0);
                const average = (total / items.length).toFixed(1);
                return <EuiText size='xs'>{average}</EuiText>
            }
        },
        {
            field:'gv',
            name:'Giáo viên phụ trách',
            footer:()=>{
                return <EuiText size='xs'>Giáo viên chủ nhiệm</EuiText>
            }
        },
        {
            field:'thaotac',
            name:'',
            render:()=>(
                <EuiIcon type="indexEdit" onClick={()=>setIsModal1(true)} color='blue'/>
            ),
            footer:()=>{
                return <EuiIcon type="indexEdit" onClick={()=>setIsModal1(true)} color='blue'/>
            },
            width:'70px'
        },
    ]

    const item1=[
        {monhoc:'Toán học',hk1:10,hk2:10,cuoinam:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Ngữ văn',hk1:10,hk2:10,cuoinam:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Tiếng anh',hk1:10,hk2:10,cuoinam:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Vật lý',hk1:10,hk2:10,cuoinam:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Hóa học',hk1:10,hk2:10,cuoinam:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Sinh học',hk1:10,hk2:10,cuoinam:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Địa lý',hk1:10,hk2:10,cuoinam:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Lịch sử',hk1:10,hk2:10,cuoinam:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Giáo dục công dân',hk1:10,hk2:10,cuoinam:10,gv:'Lê Chí Tuyền'},
        {monhoc:'Công nghệ',hk1:10,hk2:10,cuoinam:10,gv:'Lê Chí Tuyền'},
    ]
    const [pageIndex,setPageIndex]=useState(0)
    const [pageSize,setPageSize]=useState(10)

    const onChange=({page})=>{
        const {index:pageIndex,size:pageSize}=page
        setPageIndex(pageIndex)
        setPageSize(pageSize)
    }
    const itemOfPage=(item1,pageIndex,pageSize)=>{
        let itemOfPages;
        if(!pageIndex && !pageSize){
            itemOfPages=item1
        }else{
            itemOfPages=item1.slice(pageIndex*pageSize,(pageIndex+1)*pageSize)
        }
        return {itemOfPages}
    }
    const {itemOfPages}=itemOfPage(item1,pageIndex,pageSize)
    const paginations={
        pageIndex,
        pageSize,
        totalItemCount:item1.length,
        pageSizeOptions:[0,5,10]
    }

    const column2=[
        {
            field:'hk',
            name:'Học kỳ',
            render:(item)=>(
                <EuiText color='blue' size='xs'>{item}</EuiText>
            )
        },
        {field:'hocluc',name:'Xếp loại học lực'},
        {field:'hanhkiem',name:'Xếp loại hạnh kiểm'},
    ]

    const item2=[
        {hk:'Học kì 1',hocluc:'Giỏi',hanhkiem:'Giỏi'},
        {hk:'Học kì 2',hocluc:'Giỏi',hanhkiem:'Giỏi'},
        {hk:'Cả năm',hocluc:'Giỏi',hanhkiem:'Giỏi'},
    ]

    const [isModal1,setIsModal1]=useState(false)
    const [isModal2,setIsModal2]=useState(false)

    const [isPopoverYear,setPopoverYear]=useState(false)
    const [yearOptions,setYearOption]=useState([
        {label:'2020'},
        {label:'2021'},
        {label:'2022'},
        {label:'2023'},
        {label:'2024'},
        {label:'2025'},
    ])
    const selectedYear=yearOptions.filter(option=>option.checked==="on")

  return (
    <>
     <EuiPageTemplate.Header
     paddingSize='s'
     style={{background:'#FFF'}}
     bottomBorder={false}
     pageTitle={
        <EuiFlexGroup direction='column'>
            <EuiFlexGroup alignItems='center'>
                <EuiFlexGroup alignItems='center' gutterSize='s'>
                    <EuiButtonIcon iconType="arrowLeft" display='fill' size='s'/>
                    <EuiText><h2>Danh bạ học sinh</h2></EuiText>
                </EuiFlexGroup>
                <EuiButton iconType="indexEdit" fill>Chỉnh sửa</EuiButton>
            </EuiFlexGroup>
            <EuiFlexGroup>
                <EuiFlexGroup alignItems='center' gutterSize='m'>
                    <EuiAvatar name='DN'/>
                    <EuiText><b>Họ và tên:&nbsp;</b>Lê Chí Tuyền</EuiText>
                    <EuiText><b>Lớp:&nbsp;</b>12A12</EuiText>
                    <EuiText><b>Trường:&nbsp;THPT Bách Khoa</b></EuiText>
                    <EuiText><b>Ngày sinh:&nbsp;</b>20/10/2024</EuiText>
                    <EuiText><b>Email:&nbsp;</b>lechituyen@gmail.com</EuiText>
                </EuiFlexGroup>
                <EuiPopover
                isOpen={isPopoverYear}
                closePopover={()=>setPopoverYear(false)}
                button={
                    <EuiFlexGroup alignItems='center' gutterSize='s' onClick={()=>setPopoverYear(!isPopoverYear)}>
                        <EuiText color='blue'>Năm học:&nbsp;{selectedYear[0]?.label ?? '2024'}</EuiText>
                        <EuiIcon type="arrowDown" color='blue'/>
                    </EuiFlexGroup>
                }>
                    <EuiSelectable
                        searchable
                        singleSelection
                        options={yearOptions}
                        onChange={(option)=>setYearOption(option)}
                        searchProps={{placeholder:'Tìm kiếm năm học'}}>
                            {(list, search) => (
                                <>
                                {search}
                                {list}
                                </>
                            )}
                    </EuiSelectable>
                </EuiPopover>
            </EuiFlexGroup>
        </EuiFlexGroup>
     }/>
      <EuiPageTemplate.Section>
        <EuiHorizontalRule margin='xs' style={{height:2}}/>
        <EuiFlexGroup>
            <EuiFlexItem>
                <EuiFlexGroup direction='column' gutterSize='none'>
                    <EuiFlexItem grow={false}>
                        <EuiFlexGroup>
                            <EuiText>Điểm tổng kết:<b>10</b></EuiText>
                            <EuiText>Hạnh kiểm:<b>Tốt</b></EuiText>
                        </EuiFlexGroup>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                        <EuiHorizontalRule margin='xs' style={{height:2}}/>
                        <EuiBasicTable
                        columns={column1}
                        items={itemOfPages}
                        onChange={onChange}
                        pagination={paginations}/>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiFlexItem>
            <EuiFlexItem>
                <EuiFlexGroup direction='column'>
                    <EuiFlexItem grow={false}>
                        <EuiFlexGroup direction='column' gutterSize='none'>
                            <EuiFlexItem grow={false}>
                                <EuiFlexGroup alignItems='center' justifyContent='spaceBetween'>
                                    <EuiText><b>Tổng kết</b></EuiText>
                                    <EuiLink onClick={()=>setIsModal2(true)}>Chỉnh sửa</EuiLink>
                                </EuiFlexGroup>
                            </EuiFlexItem>
                            <EuiHorizontalRule margin='xs' style={{height:2}}/>
                            <EuiBasicTable
                            columns={column2}
                            items={item2}/>
                        </EuiFlexGroup>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                        <EuiFlexGroup direction='column'>
                            <EuiHealth>Chứng chỉ nghề phổ thông</EuiHealth>
                            <EuiHealth>Giải thưởng tron kì thi cấp huyện trở lên</EuiHealth>
                            <EuiHealth>Khen thưởng đặc biệt khác</EuiHealth>
                            <EuiFormRow label="Nhận xét của giáo viên chủ nhiệm" fullWidth>
                            <EuiTextArea placeholder='' fullWidth/>
                        </EuiFormRow>
                    </EuiFlexGroup>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiFlexItem>
        </EuiFlexGroup>
        <EuiFlexGroup justifyContent='flexEnd'>
            <EuiButton>Lưu</EuiButton>
        </EuiFlexGroup>
      </EuiPageTemplate.Section>
      {isModal1 && 
        <EuiModal style={{width:'600px'}} onClose={()=>setIsModal1(false)}>
            <EuiModalHeader>
                <EuiModalHeaderTitle>Yêu cầu sửa điểm môn học</EuiModalHeaderTitle>
            </EuiModalHeader>
            <EuiModalBody>
                <EuiFlexGrid columns={2}>
                    <EuiFlexItem>
                        <EuiFormRow label="Học kì 1" fullWidth>
                            <EuiFieldText placeholder='10' fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFormRow label="Học kì 2" fullWidth>
                            <EuiFieldText placeholder='10' fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFormRow label="Cuối năm"fullWidth>
                            <EuiFieldText placeholder='10' fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFormRow label="Giáo viên phụ trách" fullWidth>
                            <EuiFieldText placeholder='Lê Chí Tuyền' fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
                </EuiFlexGrid>
            </EuiModalBody>
            <EuiModalFooter>
                <EuiFlexGroup justifyContent='flexEnd'>
                    <EuiButtonEmpty onClick={()=>setIsModal1(false)}>Hủy</EuiButtonEmpty>
                    <EuiButton fill onClick={()=>setIsModal1(false)}>Xác nhận</EuiButton>
                </EuiFlexGroup>
            </EuiModalFooter>
        </EuiModal>}
        {isModal2 && 
        <EuiModal style={{width:'600px'}} onClose={()=>setIsModal2(false)}>
            <EuiModalHeader>
                <EuiModalHeaderTitle>Sửa xếp loại</EuiModalHeaderTitle>
            </EuiModalHeader>
            <EuiModalBody>
                <EuiFlexGrid columns={2}>
                    <EuiFlexItem>
                        <EuiFormRow label="Học lực kì 1" fullWidth>
                            <EuiFieldText placeholder='Giỏi' fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFormRow label="Học lực kì 2" fullWidth>
                            <EuiFieldText placeholder='Giỏi' fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFormRow label="Hạnh kiểm kì 1" fullWidth>
                            <EuiFieldText placeholder='Tốt' fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFormRow label="Hạnh kiểm kì 2" fullWidth>
                            <EuiFieldText placeholder='Tốt' fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFormRow label="Học lực cả năm"fullWidth>
                            <EuiFieldText placeholder='Giỏi' fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFormRow label="Hạnh kiểm cả năm" fullWidth>
                            <EuiFieldText placeholder='Tốt' fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
                </EuiFlexGrid>
                <EuiSpacer/>
                <EuiFlexGroup direction='column'>
                    <EuiFlexItem>
                        <EuiFormRow label="Chứng chỉ nghề nghiệp phổ thông" fullWidth>
                            <EuiFieldText placeholder='...' fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFormRow label="Giải thưởng trong các kì thi cấp huyện trở lên:" fullWidth>
                            <EuiFieldText placeholder='...' fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFormRow label="Khen thưởng đặc biệt khác:" fullWidth>
                            <EuiFieldText placeholder='...' fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFormRow label="Nhận xét của giáo viên chủ nhiệm" fullWidth>
                            <EuiTextArea placeholder='...' fullWidth/>
                        </EuiFormRow>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiModalBody>
            <EuiModalFooter>
                <EuiFlexGroup justifyContent='flexEnd'>
                    <EuiButtonEmpty onClick={()=>setIsModal2(false)}>Hủy</EuiButtonEmpty>
                    <EuiButton fill onClick={()=>setIsModal2(false)}>Xác nhận</EuiButton>
                </EuiFlexGroup>
            </EuiModalFooter>
        </EuiModal>}
    </>
  )
}
