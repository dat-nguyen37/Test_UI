import { EuiAvatar, EuiBasicTable, EuiButton, EuiButtonEmpty, EuiButtonGroup, EuiButtonIcon, EuiFieldText, EuiFilterButton, EuiFilterGroup, EuiFlexGroup, EuiFlexItem, EuiFormLabel, EuiIcon, EuiPage, EuiPageBody, EuiPageSection, EuiPageTemplate, EuiPanel, EuiPopover, EuiPopoverFooter, EuiPopoverTitle, EuiText } from '@elastic/eui'
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
                            <EuiBasicTable
                                rowHeader='STT'
                                pagination={pagination}
                                onChange={onTableChange}
                                columns={[
                                    {field:"STT",name:"STT"},
                                    {field:"Tên môn học",name:"Tên môn học"},
                                    {field:"KT Miệng",name:"KT Miệng"},
                                    {field:"KT 15'",name:"KT 15'"},
                                    {field:"KT 45'",name:"KT 45'"},
                                    {field:"Thi",name:"Thi"},
                                    {field:"Tổng",name:"Tổng"},
                                ]}
                                items={[
                                    {'STT':1,'Tên môn học':'Toán','KT Miệng':10,"KT 15'":'10',"KT 45'":10,'Thi':10,'Tổng':10},
                                    {'STT':2,'Tên môn học':'Vật lý','KT Miệng':10,"KT 15'":'10',"KT 45'":10,'Thi':10,'Tổng':10},
                                    {'STT':3,'Tên môn học':'Ngữ văn','KT Miệng':10,"KT 15'":'10',"KT 45'":10,'Thi':10,'Tổng':10},
                                    {'STT':4,'Tên môn học':'Hóa học','KT Miệng':10,"KT 15'":'10',"KT 45'":10,'Thi':10,'Tổng':10},
                                    {'STT':5,'Tên môn học':'Tiếng anh','KT Miệng':10,"KT 15'":'10',"KT 45'":10,'Thi':10,'Tổng':10}
                                    ]}/>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiPanel>
            </EuiPageSection>
        </EuiPageBody>
        <Footer/>
    </EuiPageTemplate>
  )
}
