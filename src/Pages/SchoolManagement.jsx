import { EuiButton, EuiButtonEmpty, EuiButtonGroup, EuiButtonIcon, EuiFieldSearch, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiFormControlLayout, EuiIcon, EuiImage, EuiPageBody, EuiPageSection, EuiPageTemplate, EuiPagination, EuiPanel, EuiPopover, EuiPopoverFooter, EuiPopoverTitle, EuiTable, EuiTableBody, EuiTableHeader, EuiTableHeaderCell, EuiTableRow, EuiTableRowCell, EuiText } from '@elastic/eui'
import React, { useEffect, useState } from 'react'
import Headers from '../component/Header'
import Footer from '../component/Footer'
export default function SchoolManagement() {
  const [isPopoverCity,setIsPopoverCity]=useState(false)
  const [isPopoverDistrict,setIsPopoverDistrict]=useState(false)
  const [isPopoverSchool,setIsPopoverSchool]=useState(false)

  const [selectedCity,setSelectedCity]=useState(null)
  const [selectedDistrict,setSelectedDistrict]=useState(null)
  const [selectedSchool,setSelectedSchool]=useState(null)

  const OpenPopoverCity=()=>setIsPopoverCity(!isPopoverCity)
  const ClosePopoverCity=()=>setIsPopoverCity(false)

  const OpenPopoverDistrict=()=>setIsPopoverDistrict(!isPopoverDistrict)
  const ClosePopoverDistrict=()=>setIsPopoverDistrict(false)

  const OpenPopoverSchool=()=>setIsPopoverSchool(!isPopoverSchool)  
  const ClosePopoverSchool=()=>setIsPopoverSchool(false)


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
    {'Logo':'/assets/avata.png','NameSchool':'Trường THPT chuyên Hà Nội1','Address':'Cầu giấy',"Gender":"Nữ","HeadMaster":"Trần Thùy Dươn",'Phone':"093743848"},
    {'Logo':'/assets/avata.png','NameSchool':'Trường THPT chuyên Hà Nội2','Address':'Cầu giấy',"Gender":"Nữ","HeadMaster":"Trần Thùy Dươn",'Phone':"093743848"},
    {'Logo':'/assets/avata.png','NameSchool':'Trường THPT chuyên Hà Nội3','Address':'Cầu giấy',"Gender":"Nữ","HeadMaster":"Trần Thùy Dươn",'Phone':"093743848"},
    {'Logo':'/assets/avata.png','NameSchool':'Trường THPT chuyên Hà Nội4','Address':'Cầu giấy',"Gender":"Nữ","HeadMaster":"Trần Thùy Dươn",'Phone':"093743848"},
    {'Logo':'/assets/avata.png','NameSchool':'Trường THPT chuyên Hà Nội5','Address':'Cầu giấy',"Gender":"Nữ","HeadMaster":"Trần Thùy Dươn",'Phone':"093743848"},
    {'Logo':'/assets/avata.png','NameSchool':'Trường THPT chuyên Hà Nội6','Address':'Cầu giấy',"Gender":"Nữ","HeadMaster":"Trần Thùy Dươn",'Phone':"093743848"},
    {'Logo':'/assets/avata.png','NameSchool':'Trường THPT chuyên Hà Nội7','Address':'Cầu giấy',"Gender":"Nữ","HeadMaster":"Trần Thùy Dươn",'Phone':"093743848"},
    {'Logo':'/assets/avata.png','NameSchool':'Trường THPT chuyên Hà Nội8','Address':'Cầu giấy',"Gender":"Nữ","HeadMaster":"Trần Thùy Dươn",'Phone':"093743848"},
    {'Logo':'/assets/avata.png','NameSchool':'Trường THPT chuyên Hà Nội9','Address':'Cầu giấy',"Gender":"Nữ","HeadMaster":"Trần Thùy Dươn",'Phone':"093743848"},
    {'Logo':'/assets/avata.png','NameSchool':'Trường THPT chuyên Hà Nội10','Address':'Cầu giấy',"Gender":"Nữ","HeadMaster":"Trần Thùy Dươn",'Phone':"093743848"},
    {'Logo':'/assets/avata.png','NameSchool':'Trường THPT chuyên Hà Nội11','Address':'Cầu giấy',"Gender":"Nữ","HeadMaster":"Trần Thùy Dươn",'Phone':"093743848"},
    {'Logo':'/assets/avata.png','NameSchool':'Trường THPT chuyên Hà Nội12','Address':'Cầu giấy',"Gender":"Nữ","HeadMaster":"Trần Thùy Dươn",'Phone':"093743848"},
    {'Logo':'/assets/avata.png','NameSchool':'Trường THPT chuyên Hà Nội13','Address':'Cầu giấy',"Gender":"Nữ","HeadMaster":"Trần Thùy Dươn",'Phone':"093743848"},
    {'Logo':'/assets/avata.png','NameSchool':'Trường THPT chuyên Hà Nội14','Address':'Cầu giấy',"Gender":"Nữ","HeadMaster":"Trần Thùy Dươn",'Phone':"093743848"},
    {'Logo':'/assets/avata.png','NameSchool':'Trường THPT chuyên Hà Nội15','Address':'Cầu giấy',"Gender":"Nữ","HeadMaster":"Trần Thùy Dươn",'Phone':"093743848"},

    ]
    const cities=[
      {name:'Hà Nội'},
      {name:'TP.Hồ Chí Minh'},
      {name:'Hải Phòng'},
    ]
    const [activePage, setActivePage] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [pageCount, setPageCount] = useState(1);

    useEffect(() => {
      const totalPageCount = Math.ceil(items.length / pageSize);
      setPageCount(totalPageCount);
    }, [items, pageSize]);
    
    const handleActivePage = (page) => {
      setActivePage(page);
    };
    const itemOfPage = items.slice(activePage * pageSize, (activePage + 1) * pageSize);
  return (
    <EuiPageTemplate gu>
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
                  <EuiFlexGroup justifyContent='spaceBetween'>
                    <EuiFlexItem grow={4}>
                      <EuiFieldSearch placeholder='Tìm kiếm theo tên trường học...' fullWidth/>
                    </EuiFlexItem>
                    <EuiFlexItem grow={10}>
                      <EuiFlexGroup alignItems='center' gutterSize='none' style={{background:"#F5F5F5",border:'1px solid gray',borderRadius:'5px'}}>
                        <EuiFlexItem grow={false} style={{paddingInline:'20px'}}><EuiIcon type="logstashFilter"/></EuiFlexItem>
                        <EuiFlexItem grow={false} style={{height:'100%',border:'1px solid gray'}}/>
                        <EuiFlexItem grow={false} style={{paddingInline:'20px'}}><EuiText size='s'><h5>Bộ lọc</h5></EuiText></EuiFlexItem>
                        <EuiFlexItem grow={false} style={{height:'100%',border:'1px solid gray'}}/>
                        <EuiFlexItem grow={false} style={{paddingInline:'20px'}}>
                          <EuiPopover
                          anchorPosition='downLeft'
                          panelStyle={{outline:'none',marginTop:'20px'}}
                          hasArrow={false}
                          isOpen={isPopoverCity}
                          closePopover={ClosePopoverCity}
                          button={
                            <EuiFlexGroup onClick={OpenPopoverCity}>
                              <EuiText size='s'><h5>{selectedCity ?? 'Tỉnh/ Thành'}</h5></EuiText>
                              <EuiIcon type="arrowDown" />
                            </EuiFlexGroup>
                          }>
                            <EuiPopoverTitle>
                              <EuiFieldSearch style={{outline:'none'}}/>
                            </EuiPopoverTitle>
                            <EuiFlexGroup direction='column'>
                                {cities.map(city=>(
                                  <EuiFlexItem>
                                    <EuiFlexGroup justifyContent='spaceBetween' alignItems='center' onClick={()=>setSelectedCity(city.name)}>
                                      <EuiFlexItem>
                                        <EuiText>{city.name}</EuiText>
                                      </EuiFlexItem>
                                      {selectedCity === city.name &&
                                        <EuiFlexItem grow={false}>
                                          <EuiIcon type="check" size='l'/>
                                        </EuiFlexItem>
                                        
                                      }
                                      </EuiFlexGroup>
                                  </EuiFlexItem>
                                ))}
                            </EuiFlexGroup>
                            </EuiPopover>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false} style={{height:'100%',border:'1px solid gray'}}/>
                        <EuiFlexItem grow={false} style={{paddingInline:'20px'}}>
                          <EuiPopover
                          hasArrow={false}
                          isOpen={isPopoverDistrict}
                          closePopover={ClosePopoverDistrict}
                          button={
                            <EuiFlexGroup onClick={OpenPopoverDistrict}>
                              <EuiText size='s'><h5>{selectedDistrict ?? 'Quận/ huyện'}</h5></EuiText>
                              <EuiIcon type="arrowDown" />
                            </EuiFlexGroup>
                          }>
                            </EuiPopover>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false} style={{height:'100%',border:'1px solid gray'}}/>
                        <EuiFlexItem grow={false} style={{paddingInline:'20px'}}>
                          <EuiPopover
                          hasArrow={false}
                          isOpen={isPopoverSchool}
                          closePopover={ClosePopoverSchool}
                          button={
                            <EuiFlexGroup onClick={OpenPopoverSchool}>
                              <EuiText size='s'><h5>{selectedSchool ?? 'Tiểu học'}</h5></EuiText>
                              <EuiIcon type="arrowDown" />
                            </EuiFlexGroup>
                          }>
                            </EuiPopover>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false} style={{height:'100%',border:'1px solid gray'}}/>
                        <EuiFlexItem style={{paddingInline:'20px'}}>
                          <EuiButtonEmpty iconType="editorUndo" color='danger'><EuiText color='danger' size='s'>Đặt lại</EuiText></EuiButtonEmpty>
                        </EuiFlexItem>
                      </EuiFlexGroup>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <EuiButtonEmpty color='ghost' style={{background:'#F5F5F5',width:'50px',fontSize:'32px'}}>+</EuiButtonEmpty>
                    </EuiFlexItem>
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
                            {itemOfPage.map(item=>(
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
                                      <EuiFlexGroup gutterSize='s' style={{border:'1px solid gray',borderRadius:'5px',background:'#f5f5f5'}}>
                                        <EuiButtonIcon iconType='documentEdit' color='text'/>
                                        <EuiFlexItem grow={false} style={{border:'1px solid gray'}}/>
                                        <EuiButtonIcon iconType='trash' color='danger'/>
                                      </EuiFlexGroup>
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
                          <span>Showing {activePage*pageSize+1}- {(activePage+1)*pageSize} of {items.length}</span>
                        </EuiText>
                      </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiPagination
                            pageCount={pageCount}
                            activePage={activePage}
                            onPageClick={(page) => handleActivePage(page)}/>
                        </EuiFlexItem>
                    </EuiFlexGroup>
          </EuiPageSection>
        </EuiPageBody>
        <Footer/>
    </EuiPageTemplate>
  )
}
