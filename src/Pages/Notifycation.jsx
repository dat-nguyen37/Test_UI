import { EuiBasicTable, EuiButton, EuiButtonEmpty, EuiButtonIcon, EuiDatePicker, EuiFieldSearch, EuiFieldText, EuiFilePicker, EuiFlexGroup, EuiFlexItem, EuiFormControlLayout, EuiFormRow, EuiHorizontalRule, EuiI18n, EuiIcon, EuiModal, EuiModalBody, EuiModalFooter, EuiModalHeader, EuiModalHeaderTitle, EuiPageTemplate, EuiPopover, EuiProvider, EuiSelectable, EuiText, EuiTextArea } from '@elastic/eui'
import moment from 'moment'
import React, { useEffect, useState } from 'react'


export default function Notifycation({setLanguage }) {
  const columns=[
    {
      field:'ten',
      name:'Tên thông báo',
      render:(item)=>(
        <EuiText color='blue'>{item}</EuiText>
      )
    },
    {field:'phanloai',name:'Phân loại'},
    {field:'ngay',name:'Ngày thông báo'},
    {field:'thoigian',name:'Thời gian'},
    {field:'ngươithem',name:'Người thêm'},
    {
      field:'thaotac',
      name:'Thao tác',
      render:()=>(
        <EuiFlexGroup gutterSize='s'>
          <EuiIcon type="indexEdit" color='primary'/>
          <EuiIcon type="trash" color='danger'/>
        </EuiFlexGroup>
      )
    },
  ]
  const items=[
    {ten:'Thu học phí khối 10',phanloai:'Học phí',ngay:'30/02/2024',thoigian:'6:50pm',ngươithem:'Admin1'},
    {ten:'Thu học phí khối 10',phanloai:'Học phí',ngay:'30/02/2024',thoigian:'6:50pm',ngươithem:'Admin1'},
    {ten:'Thu học phí khối 10',phanloai:'Học phí',ngay:'30/02/2024',thoigian:'6:50pm',ngươithem:'Admin1'},
    {ten:'Thu học phí khối 10',phanloai:'Học phí',ngay:'30/02/2024',thoigian:'6:50pm',ngươithem:'Admin1'},
    {ten:'Thu học phí khối 10',phanloai:'Học phí',ngay:'30/02/2024',thoigian:'6:50pm',ngươithem:'Admin1'},
    {ten:'Thu học phí khối 10',phanloai:'Học phí',ngay:'30/02/2024',thoigian:'6:50pm',ngươithem:'Admin1'},
    {ten:'Thu học phí khối 10',phanloai:'Học phí',ngay:'30/02/2024',thoigian:'6:50pm',ngươithem:'Admin1'},
    {ten:'Thu học phí khối 10',phanloai:'Học phí',ngay:'30/02/2024',thoigian:'6:50pm',ngươithem:'Admin1'},
  ]

  const [startDate,setStartDate]=useState(moment())
  const [pageIndex,setPageIndex]=useState(0)
  const [pageSize,setPageSize]=useState(5)
  const onChange=({page})=>{
    const {index:pageIndex,size:pageSize}=page
    setPageIndex(pageIndex)
    setPageSize(pageSize)
  }
 
  const itemOfPage=(items,pageIndex,pageSize)=>{
    let itemOfPages;
    if(!pageIndex && !pageSize)
    {
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

  const [options,setOptions]=useState([
    {label:'Tất cả'},
    {label:'Phụ huynh'},
    {label:'Giáo viên bộ môn'},
    {label:'Học sinh'},
  ])

  return (
    <>
      <div>
        <EuiButton onClick={() => setLanguage('en')}>English</EuiButton>
        <EuiButton onClick={() => setLanguage('vi')}>Tiếng Việt</EuiButton>
      </div>
        <EuiPageTemplate.Header
        pageTitle={
            <EuiFlexGroup direction='column'>
                <EuiFlexGroup>
                    <EuiFlexGroup alignItems='center' gutterSize='s'>
                        <EuiButtonIcon iconType="arrowLeft" display='fill' size='s'/>
                        <EuiText><h3>Danh sách thông báo</h3></EuiText>
                    </EuiFlexGroup>
                    <EuiButton iconType="plusInCircle" fill><EuiI18n token="euiButton.submit" default="Thêm thông báo mới"/></EuiButton>
                </EuiFlexGroup>
                <EuiFlexGroup alignItems='center'>
                    <EuiFlexItem grow={5}>
                      <EuiFormControlLayout style={{fontSize:'14px'}} fullWidth>
                        <EuiFieldSearch placeholder='Tìm kiếm theo tên thông báo...' fullWidth/>
                      </EuiFormControlLayout>
                    </EuiFlexItem>
                    <EuiFlexItem grow={1}>
                      <EuiFormControlLayout style={{fontSize:'14px'}}>
                        <EuiPopover
                        button={
                          <EuiFormControlLayout isDropdown clear={()=>{}} fullWidth>
                            <EuiFieldText placeholder='Phân loại' fullWidth/>
                          </EuiFormControlLayout>
                        }>
                        </EuiPopover>
                      </EuiFormControlLayout>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <EuiFormControlLayout style={{fontSize:'14px'}}>
                        <EuiPopover 
                        button={
                          <EuiFlexGroup onClick={()=>{}} alignItems='center' gutterSize='s'>
                              <EuiText color='blue'>Năm học: {'2024'}</EuiText>
                              <EuiIcon type="arrowDown" color='blue'/>
                          </EuiFlexGroup>
                        }>

                        </EuiPopover>
                      </EuiFormControlLayout>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiFlexGroup>
        }/>
        <EuiHorizontalRule margin='none'/>
        <EuiPageTemplate.Section>
          <EuiBasicTable
          columns={columns}
          items={itemOfPages}
          onChange={onChange}
          pagination={paginations}/>
      </EuiPageTemplate.Section>
      <EuiModal style={{width:'700px',maxHeight:'500px'}}>
        <EuiModalHeader>
          <EuiModalHeaderTitle>Thêm mới thông báo</EuiModalHeaderTitle>
        </EuiModalHeader>
        <EuiModalBody>
          <EuiFlexGroup direction='column'>
            <EuiFlexGroup alignItems='center'>
              <EuiFlexItem>
                <EuiFormRow label="Tên thông báo">
                  <EuiFieldText placeholder='Thông báo thu học phí'/>
                </EuiFormRow>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiFormRow label="Phân loại">
                  <EuiFieldText placeholder='Thông báo thu học phí'/>
                </EuiFormRow>
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiFlexGroup alignItems='center'>
              <EuiFlexItem grow={1}>
                <EuiFormRow label="Ngày-giờ diễn ra">
                  <EuiDatePicker showTimeSelect selected={startDate} onChange={(date)=>setStartDate(date)}/>
                </EuiFormRow>
              </EuiFlexItem>
              <EuiFlexItem>
                  <EuiPopover
                  panelStyle={{ display: 'block'}}
                  hasArrow={false}
                  isOpen={true}
                  button={
                      <EuiFormRow label="Người nhận thông báo" fullWidth>
                    <EuiFormControlLayout clear={()=>{}} isDropdown fullWidth>
                    <EuiFieldText fullWidth placeholder="Người nhận thông báo"/>
                    </EuiFormControlLayout>
                  </EuiFormRow>
                  }>
                    <EuiSelectable
                    options={options}
                    searchable
                    onChange={(option)=>setOptions(option)}
                    singleSelection
                    searchProps={{placeholder:'Tìm kiếm người dùng'}}
                    >
                      {(list,search)=>(
                        <>
                        {search}
                        {list}
                        </>
                      )}
                      </EuiSelectable>
                  </EuiPopover>
                  </EuiFlexItem>
            </EuiFlexGroup>
            <EuiFlexGroup alignItems='center'>
              <EuiFlexItem>
                <EuiFormRow label="Mô tả thông báo">
                  <EuiTextArea rows={5}/>
                </EuiFormRow>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiFormRow label="Thêm ảnh">
                  <EuiFilePicker/>
                </EuiFormRow>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexGroup>
        </EuiModalBody>
        <EuiModalFooter>
          <EuiFlexGroup justifyContent='flexEnd'>
            <EuiButtonEmpty>Hủy</EuiButtonEmpty>
            <EuiButton fill>Thêm mới sự kiện</EuiButton>
          </EuiFlexGroup>
        </EuiModalFooter>
      </EuiModal>
    </>
  )
}
