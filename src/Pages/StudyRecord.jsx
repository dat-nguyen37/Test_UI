import { EuiAvatar, EuiBasicTable, EuiButton, EuiButtonEmpty, EuiButtonGroup, EuiButtonIcon, EuiFieldText, EuiFilterButton, EuiFilterGroup, EuiFlexGroup, EuiFlexItem, EuiFormLabel, EuiIcon, EuiPage, EuiPageBody, EuiPageSection, EuiPageTemplate, EuiPanel, EuiPopover, EuiPopoverFooter, EuiPopoverTitle, EuiTable, EuiTableBody, EuiTableHeader, EuiTableHeaderCell, EuiTableRow, EuiTableRowCell, EuiText } from '@elastic/eui'
import React, { useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

export default function StudyRecord() {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [isSeletedId,setIsSelectedId]=useState(1)
    const [startIndex, setStartIndex] = useState(0);
    const [pageIndex, setPageIndex] = useState(0);

    const ClosePopover=()=>{setIsPopoverOpen(!isPopoverOpen)}
    const OpenPopover=()=>{setIsPopoverOpen(!isPopoverOpen)}

    const selectedId=(id)=>{
        setIsSelectedId(id)
    }
    const optionYears=[
        {id:0,label:'2021'},
        {id:1,label:'2022'},
        {id:2,label:'2023'},
        {id:3,label:'2024'},
        {id:4,label:'2025'},
        {id:5,label:'2026'},
        {id:6,label:'2027'},
    ]
    const handleNextYear = () => {
        if (startIndex + 5 < optionYears.length) {
            setStartIndex(startIndex + 5);
        }
    };
    const handlePreviousYear = () => {
        if (startIndex - 5 >= 0) {
            setStartIndex(startIndex - 5);
        }
    };
    const onTableChange = (page)=> {
        if (page) {
          const { index: pageIndex, size: pageSize } = page;
          setPageIndex(pageIndex);
        }
    }
    const pagination = {
        pageIndex: 1,
        pageSize: 5,
        totalItemCount: 10,
      };

      const columns=[
        {field:"STT",name:"STT"},
        {field:"TMH",name:"Tên môn học"},
        {field:"KTM",name:"KT Miệng"},
        {field:"KT15",name:"KT 15'"},
        {field:"KT45",name:"KT 45'"},
        {field:"Thi",name:"Thi"},
        {field:"Sum",name:"Tổng"},
    ]
    const items=[
        {'STT':1,'TMH':'Toán','KTM':10,"KT15":10,"KT45":10,'Thi':10,'Sum':10},
        {'STT':2,'TMH':'Vật lý','KTM':10,"KT15":'10',"KT45":10,'Thi':10,'Sum':10},
        {'STT':3,'TMH':'Ngữ văn','KTM':10,"KT15":'10',"KT45":10,'Thi':10,'Sum':10},
        {'STT':4,'TMH':'Hóa học','KTM':10,"KT15":'10',"KT45":10,'Thi':10,'Sum':10},
        {'STT':5,'TMH':'Tiếng anh','KTM':10,"KT15":'10',"KT45":10,'Thi':10,'Sum':10}
        ]

  return (
    <EuiPageTemplate>
        <Header/>
        <EuiPageBody>
            <EuiPageSection style={{marginBlock:'-20px'}}>
                <EuiFlexGroup alignItems='center' gutterSize='m'>
                    <EuiFlexItem grow={false}>
                        <EuiButtonIcon 
                        display='fill' 
                        iconType="arrowLeft"
                        size='m'
                        color='accent'
                        style={{background:'#FFFF',boxShadow:'0 1px 4px rgba(0, 0, 0, 0.08)'}}/>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                        <EuiText><h3>Học bạ học sinh</h3></EuiText>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiPageSection>
            <EuiPageSection style={{marginBlock:'-20px'}}>
                <EuiPanel paddingSize='none'>
                    <EuiFlexGroup direction='column' gutterSize='none'>
                        <EuiFlexItem style={{padding:'20px',borderBottom:'1px solid gray'}}>
                            <EuiFlexGroup>
                                <EuiFlexItem >
                                    <EuiFlexGroup alignItems='center' gutterSize='xl'>
                                        <EuiAvatar name="name" imageUrl='/assets/avata.png' size='l'/>
                                        <EuiText size="m">
                                            <span>Họ và tên:&nbsp;</span>
                                            <strong>Lê Chí Tuyền</strong>
                                        </EuiText>
                                    </EuiFlexGroup>
                                </EuiFlexItem>
                                <EuiFlexItem >
                                    <EuiFlexGroup alignItems='center' gutterSize='xl'>
                                        <EuiText size="m">
                                            <span>Lớp:&nbsp;</span>
                                            <strong>12A12</strong>
                                        </EuiText>
                                        <EuiText size="m">
                                            <span>Ngày sinh:&nbsp;</span>
                                            <strong>20/10/2024</strong>
                                        </EuiText>
                                    </EuiFlexGroup>
                                </EuiFlexItem>
                                <EuiFlexItem >
                                    <EuiFlexGroup alignItems='center' gutterSize='xl'>
                                        <EuiFlexItem >
                                              <EuiPopover panelPaddingSize='m'
                                                anchorPosition='downLeft'
                                                panelStyle={{outline:'none',width:'300px'}}
                                                hasArrow={false}
                                                button={
                                                    <EuiFieldText
                                                        disabled
                                                        prepend={
                                                            <EuiFlexGroup gutterSize='none' alignItems='center' >
                                                                <EuiIcon type="logstashFilter" style={{borderInlineEnd:'1px solid',background:"#eef2f7"}}/>
                                                                <EuiFormLabel style={{background:"#eef2f7",outline:'none'}}>Năm học</EuiFormLabel>
                                                            </EuiFlexGroup>
                                                        }
                                                        append={<EuiIcon onClick={OpenPopover} type="arrowDown"/>}
                                                        value={optionYears.find(opt => opt.id === isSeletedId)?.label || "Select Year"}
                                                    />
                                                }
                                                isOpen={isPopoverOpen}
                                                closePopover={ClosePopover}
                                                >
                                                    <EuiPopoverTitle >
                                                        <EuiFlexGroup justifyContent='spaceBetween'>
                                                            <EuiFlexItem grow={false}>
                                                                <EuiText><strong>Chọn năm học</strong></EuiText>
                                                            </EuiFlexItem>
                                                            <EuiFlexItem grow={false}>
                                                                <EuiFlexGroup>
                                                                    <EuiButtonIcon onClick={handlePreviousYear} display='fill' color='text' iconType='arrowLeft'/>
                                                                    <EuiButtonIcon onClick={handleNextYear} display='fill' color='text' iconType='arrowRight'/>
                                                                </EuiFlexGroup>
                                                            </EuiFlexItem>
                                                        </EuiFlexGroup>
                                                    </EuiPopoverTitle>
                                                    <EuiFlexGroup>
                                                            <EuiButtonGroup name="year" options={optionYears.slice(startIndex,startIndex+5)}
                                                            onChange={(id)=>selectedId(id)}
                                                            idSelected={isSeletedId}
                                                            buttonSize="compressed"
                                                            color='primary'
                                                            isFullWidth/>
                                                    </EuiFlexGroup>
                                                    <EuiPopoverFooter style={{textAlign:'center'}}>
                                                        <EuiButton fill>Xác nhận</EuiButton>
                                                    </EuiPopoverFooter>
                                                </EuiPopover>
                                        </EuiFlexItem>
                                        <EuiFlexItem grow={false}>
                                            <EuiButton iconType="/assets/printing.png" iconSize='l'>
                                            </EuiButton>
                                        </EuiFlexItem>
                                    </EuiFlexGroup>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                        <EuiFlexItem style={{padding:'20px'}}>
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
                                <EuiTableBody>
                                    {items.map(item=>(
                                        <EuiTableRow>
                                            <EuiTableRowCell
                                            style={{padding:'1rem'}}
                                            mobileOptions={{
                                                header:"STT",
                                                
                                            }}>{item.STT}</EuiTableRowCell>
                                            <EuiTableRowCell
                                            style={{padding:'1rem'}}
                                            mobileOptions={{
                                                header:"Tên môn học"
                                            }}>{item.TMH}</EuiTableRowCell>
                                            <EuiTableRowCell
                                            style={{padding:'1rem'}}
                                            mobileOptions={{
                                                header:"Kiểm tra miệng"
                                            }}>{item.KTM}</EuiTableRowCell>
                                            <EuiTableRowCell
                                            style={{padding:'1rem'}}
                                            mobileOptions={{
                                                header:"Kiểm tra 15'"
                                            }}>{item.KT15}</EuiTableRowCell>
                                            <EuiTableRowCell
                                            style={{padding:'1rem'}}
                                            mobileOptions={{
                                                header:"Kiểm tra 45'"
                                            }}>{item.KT45}</EuiTableRowCell>
                                            <EuiTableRowCell
                                            style={{padding:'1rem'}}
                                            mobileOptions={{
                                                header:"Thi"
                                            }}>{item.Thi}</EuiTableRowCell>
                                            <EuiTableRowCell
                                            style={{padding:'1rem'}}
                                            mobileOptions={{
                                                header:"Tổng"
                                            }}>{item.Sum}</EuiTableRowCell>
                                        </EuiTableRow>
                                    ))}
                                </EuiTableBody>
                            </EuiTable>
                            <EuiFlexGroup justifyContent='spaceBetween' alignItems='center' responsive={false} style={{padding:'1rem'}}>
                                <EuiFlexItem grow={false}>
                                    <EuiFlexGroup gutterSize='none' alignItems='center' style={{border:'1px solid gray',borderRadius:'1rem',background:''}}>
                                        <EuiButtonIcon iconType='arrowLeft' color='text'/>
                                        <EuiButtonEmpty color='text'>1</EuiButtonEmpty>
                                        <EuiButtonEmpty color='text'>2</EuiButtonEmpty>
                                        <EuiButtonEmpty color='text'>3</EuiButtonEmpty>
                                        <EuiButtonEmpty color='text'>...</EuiButtonEmpty>
                                        <EuiButtonEmpty color='text'>8</EuiButtonEmpty>
                                        <EuiButtonEmpty color='text'>9</EuiButtonEmpty>
                                        <EuiButtonIcon iconType='arrowRight' color='text'/>
                                    </EuiFlexGroup>
                                </EuiFlexItem>
                                <EuiFlexItem grow={false}>
                                    <EuiText>
                                        <strong>Điểm tổng kết = 7.9</strong>
                                    </EuiText>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                            {/* <EuiBasicTable
                                rowHeader='STT'
                                pagination={pagination}
                                onChange={onTableChange}
                                columns={columns}
                                items={items}/> */}
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiPanel>
            </EuiPageSection>
        </EuiPageBody>
        <Footer/>
    </EuiPageTemplate>
  )
}
