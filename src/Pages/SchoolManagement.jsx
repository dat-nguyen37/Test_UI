import { EuiButtonEmpty, EuiButtonIcon, EuiFieldSearch, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiImage, EuiPageBody, EuiPageSection, EuiPageTemplate, EuiPanel, EuiTable, EuiTableBody, EuiTableHeader, EuiTableHeaderCell, EuiTableRow, EuiTableRowCell, EuiText } from '@elastic/eui'
import React from 'react'
import Headers from '../component/Header'
import Footer from '../component/Footer'
export default function SchoolManagement() {
  const columns=[
    {field:"Logo",name:"Logo"},
    {field:"NameSchool",name:"Tên trường học"},
    {field:"Address",name:"Địa chỉ"},
    {field:"Gender",name:"Giới tính"},
    {field:"HeadMaster",name:"Hiệu trưởng"},
    {field:"Phone",name:"SĐT liên lạc"},
    {name:"Thao tác"},
]
const items=[
    {'Logo':'/assets/avata.png','NameSchool':'Trường THPT chuyên Hà Nội','Address':'Cầu giấy',"Gender":"Nữ","HeadMaster":"Trần Thùy Dươn",'Phone':"093743848"},
    {'Logo':'/assets/avata.png','NameSchool':'Trường THPT chuyên Hà Nội','Address':'Cầu giấy',"Gender":"Nữ","HeadMaster":"Trần Thùy Dươn",'Phone':"093743848"},
    {'Logo':'/assets/avata.png','NameSchool':'Trường THPT chuyên Hà Nội','Address':'Cầu giấy',"Gender":"Nữ","HeadMaster":"Trần Thùy Dươn",'Phone':"093743848"},
    {'Logo':'/assets/avata.png','NameSchool':'Trường THPT chuyên Hà Nội','Address':'Cầu giấy',"Gender":"Nữ","HeadMaster":"Trần Thùy Dươn",'Phone':"093743848"},
    {'Logo':'/assets/avata.png','NameSchool':'Trường THPT chuyên Hà Nội','Address':'Cầu giấy',"Gender":"Nữ","HeadMaster":"Trần Thùy Dươn",'Phone':"093743848"},
    {'Logo':'/assets/avata.png','NameSchool':'Trường THPT chuyên Hà Nội','Address':'Cầu giấy',"Gender":"Nữ","HeadMaster":"Trần Thùy Dươn",'Phone':"093743848"},

    ]
  return (
    <EuiPageTemplate>
        <Headers/>
        <EuiPageBody>
          <EuiPageSection style={{marginBlock:'-10px'}}>
            <EuiFlexGroup alignItems='center' gutterSize='m' responsive={false}>
              <EuiFlexItem grow={false}>
                <EuiButtonIcon display='fill' iconType='arrowLeft' size='m' color='accent' style={{background:'#FFFF'}}/>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiText>
                  <h3>Quản lý trường học</h3>
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPageSection>
          <EuiPageSection style={{marginBlock:'-10px'}}>
            <EuiPanel paddingSize='none'>
              <EuiFlexGroup direction='column' gutterSize='none'>
                <EuiFlexItem style={{padding:'20px'}}>
                  <EuiFlexGroup>
                    <EuiFieldSearch placeholder='Tìm kiếm theo tên trường học...'/>
                  </EuiFlexGroup>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiTable>
                        <EuiTableHeader>
                            {columns.map((column) => (
                                <EuiTableHeaderCell
                                key={column.field}
                                style={{
                                    backgroundColor: '#f5f5f5',
                                    padding:'1rem'
                                }}
                                >
                                {column.name}
                                </EuiTableHeaderCell>
                            ))}
                        </EuiTableHeader>
                        <EuiTableBody style={{padding:'20px'}}>
                            {items.map(item=>(
                                <EuiTableRow>
                                    <EuiTableRowCell
                                    style={{padding:'1rem'}}
                                    mobileOptions={{
                                        header:"Logo",
                                        
                                    }}>
                                      <EuiImage src={item.Logo} width='50' height='50'/>
                                    </EuiTableRowCell>
                                    <EuiTableRowCell
                                    style={{padding:'1rem'}}
                                    mobileOptions={{
                                        header:"Tên trường học"
                                    }}>{item.NameSchool}</EuiTableRowCell>
                                    <EuiTableRowCell
                                    style={{padding:'1rem'}}
                                    mobileOptions={{
                                        header:"Địa chỉ"
                                    }}>{item.Address}</EuiTableRowCell>
                                    <EuiTableRowCell
                                    style={{padding:'1rem'}}
                                    mobileOptions={{
                                        header:"Giới tính"
                                    }}>{item.Gender}</EuiTableRowCell>
                                    <EuiTableRowCell
                                    style={{padding:'1rem'}}
                                    mobileOptions={{
                                        header:"Hiệu trưởng"
                                    }}>{item.HeadMaster}</EuiTableRowCell>
                                    <EuiTableRowCell
                                    style={{padding:'1rem'}}
                                    mobileOptions={{
                                        header:"SĐT liên lạc"
                                    }}>{item.Phone}</EuiTableRowCell>
                                    <EuiTableRowCell
                                    style={{padding:'1rem'}}
                                    mobileOptions={{
                                        header:"Thao tác"
                                    }}>
                                      <EuiButtonIcon iconType='documentEdit' color='text'/>
                                      <EuiButtonIcon iconType='trash' color='danger'/>
                                    </EuiTableRowCell>
                                </EuiTableRow>
                            ))}
                        </EuiTableBody>
                    </EuiTable>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPanel>
          </EuiPageSection>
          <EuiPageSection style={{marginBlock:'-40px'}}>
          <EuiFlexGroup justifyContent='spaceBetween' alignItems='center' responsive={false} style={{padding:'1rem'}}>
                      <EuiFlexItem>
                        <EuiText>
                          <span>Showing 1- 09 of 78</span>
                        </EuiText>
                      </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiFlexGroup gutterSize='none' alignItems='center' style={{border:'1px solid gray',borderRadius:'1rem',background:''}}>
                                <EuiButtonEmpty iconType='arrowLeft' color='text'/>
                                <EuiButtonEmpty color='text'>1</EuiButtonEmpty>
                                <EuiButtonEmpty color='text'>2</EuiButtonEmpty>
                                <EuiButtonEmpty color='text'>3</EuiButtonEmpty>
                                <EuiButtonEmpty color='text'>...</EuiButtonEmpty>
                                <EuiButtonEmpty color='text'>8</EuiButtonEmpty>
                                <EuiButtonEmpty color='text'>9</EuiButtonEmpty>
                                <EuiButtonIcon iconType='arrowRight' color='text'/>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                    </EuiFlexGroup>
          </EuiPageSection>
        </EuiPageBody>
        <Footer/>
    </EuiPageTemplate>
  )
}
