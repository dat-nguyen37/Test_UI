import { EuiAvatar, EuiBasicTable, EuiBreadcrumbs, EuiButton, EuiButtonEmpty, EuiButtonIcon, EuiFlexGroup, EuiFlexItem, EuiHeader, EuiHeaderBreadcrumbs, EuiHeaderLogo, EuiHeaderSection, EuiHeaderSectionItem, EuiHeaderSectionItemButton, EuiHorizontalRule, EuiIcon, EuiImage, EuiPageHeader, EuiPageHeaderContent, EuiPageTemplate, EuiPopover, EuiSpacer, EuiText } from '@elastic/eui'
import React, { useState } from 'react'

export default function StudyRecord() {
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const columns=[
        {field:'TenMH',name:'Tên môn học',render:(TenMH)=>(<span style={{color:"blue"}}>{TenMH}</span>)},
        {field:'KTM',name:'Kiểm tra miệng'},
        {field:'KT15P',name:'Kiểm tra 15p'},
        {field:'KT45P',name:'Kiểm tra 45p'},
        {field:'KT1T',name:'Kiểm tra 1 tiết'},
        {field:'KTGK',name:'Kiểm tra giữa kì'},
        {field:'KTCK',name:'Kiểm tra cuối kì'},
        {field:'GVPT',name:'Giáo viên phụ trách'},
    ]
    const items=[
        {"TenMH":"Toán học","KTM":10,"KT15P":10,"KT45P":10,"KT1T":10,"KTGK":10,"KTCK":10,"GVPT":"Lê Chí Tuyền"},
        {"TenMH":"Ngữ văn","KTM":10,"KT15P":10,"KT45P":10,"KT1T":10,"KTGK":10,"KTCK":10,"GVPT":"Lê Chí Tuyền"},
        {"TenMH":"Tiếng anh","KTM":10,"KT15P":10,"KT45P":10,"KT1T":10,"KTGK":10,"KTCK":10,"GVPT":"Lê Chí Tuyền"},
        {"TenMH":"Vật lý","KTM":10,"KT15P":10,"KT45P":10,"KT1T":10,"KTGK":10,"KTCK":10,"GVPT":"Lê Chí Tuyền"},
        {"TenMH":"Hóa học","KTM":10,"KT15P":10,"KT45P":10,"KT1T":10,"KTGK":10,"KTCK":10,"GVPT":"Lê Chí Tuyền"},
        {"TenMH":"Sinh học","KTM":10,"KT15P":10,"KT45P":10,"KT1T":10,"KTGK":10,"KTCK":10,"GVPT":"Lê Chí Tuyền"},
        {"TenMH":"Địa lý","KTM":10,"KT15P":10,"KT45P":10,"KT1T":10,"KTGK":10,"KTCK":10,"GVPT":"Lê Chí Tuyền"},
        {"TenMH":"Lịch sử","KTM":10,"KT15P":10,"KT45P":10,"KT1T":10,"KTGK":10,"KTCK":10,"GVPT":"Lê Chí Tuyền"},
        {"TenMH":"Giáo dục công dân","KT15P":10,"KTM":10,"KT45P":10,"KT1T":10,"KTGK":10,"KTCK":10,"GVPT":"Lê Chí Tuyền"},
        {"TenMH":"Công nghệ","KTM":10,"KT15P":10,"KT45P":10,"KT1T":10,"KTGK":10,"KTCK":10,"GVPT":"Lê Chí Tuyền"},
    ]
    const onTableChange = ({ page }) => {
        if (page) {
          const { index: pageIndex, size: pageSize } = page;
          setPageIndex(pageIndex);
          setPageSize(pageSize);
        }
      };
    const findUsers = (items, pageIndex, pageSize) => {
        let pageOfItems;
    
        if (!pageIndex && !pageSize) {
          pageOfItems = items;
        } else {
          const startIndex = pageIndex * pageSize;
          pageOfItems = items.slice(
            startIndex,
            Math.min(startIndex + pageSize, items.length)
          );
        }
        return {
          pageOfItems,
          totalItemCount: items.length,
        };
      };
      const { pageOfItems, totalItemCount } = findUsers(items, pageIndex, pageSize);

    const pagination = {
        pageIndex,
        pageSize,
        totalItemCount,
        pageSizeOptions: [10,5, 0],
    };
  return (
    <EuiPageTemplate style={{background:'#FFF'}}>
        <EuiPageHeader>
            <EuiPageHeaderContent>
                <EuiHeader style={{width:'100%'}}>
                    <EuiHeaderSection>
                        <EuiFlexGroup gutterSize='s'>
                        <EuiHeaderSectionItem>
                            <EuiButtonIcon iconType="menu"/>
                        </EuiHeaderSectionItem>
                        <EuiHeaderSectionItem>
                            <EuiImage src='/assets/logo.png' size="s"/>
                        </EuiHeaderSectionItem>
                        <EuiHeaderSectionItem>
                            <EuiAvatar name='S' type='space' size='s' color="#68C4A2"/>
                        </EuiHeaderSectionItem>
                        <EuiHeaderSectionItem>
                            <EuiHeaderBreadcrumbs
                            max={2}
                            breadcrumbs={[
                                {
                                    text:'Analytics',
                                    href:'#'
                                },
                                {
                                    text:'Analytics',
                                    href:'#'
                                },
                                {
                                    text:'Analytics',
                                    href:'#'
                                },
                                {
                                    text:'Học bạ học sinh',
                                },
                            ]}/>
                        </EuiHeaderSectionItem>
                        </EuiFlexGroup>
                    </EuiHeaderSection>
                    <EuiHeaderSection side='right'>
                        <EuiFlexGroup>
                        <EuiHeaderSectionItem>
                            <EuiHeaderSectionItemButton notification={2}>
                                <EuiIcon type="bell"/>
                            </EuiHeaderSectionItemButton>
                        </EuiHeaderSectionItem>
                        <EuiHeaderSectionItem>
                            <EuiHeaderSectionItemButton notification={2}>
                                <EuiIcon type="email"/>
                            </EuiHeaderSectionItemButton>
                        </EuiHeaderSectionItem>
                        <EuiHeaderSectionItem>
                            <EuiAvatar name='EL' initialsLength={2} size='s'/>
                        </EuiHeaderSectionItem>
                        <EuiHeaderSectionItem>
                            <EuiIcon type="apps"/>
                        </EuiHeaderSectionItem>
                        </EuiFlexGroup>
                    </EuiHeaderSection>
                </EuiHeader>
            </EuiPageHeaderContent>
        </EuiPageHeader>
        <EuiPageTemplate.Header 
            paddingSize='s'
            alignItems='center'
            pageTitle={
                <EuiFlexGroup direction='column'>
                    <EuiFlexItem>
                        <EuiFlexGroup justifyContent='spaceBetween'>
                            <EuiFlexItem grow={false}>
                                <EuiFlexGroup>
                                    <EuiFlexItem grow={false}>
                                        <EuiButtonIcon display='fill' iconType="arrowLeft" size='s'/>
                                    </EuiFlexItem>
                                    <EuiFlexItem grow={false}>
                                        <EuiText><h2>Học bạ học sinh</h2></EuiText>
                                    </EuiFlexItem>
                                </EuiFlexGroup>
                            </EuiFlexItem>
                            <EuiFlexItem grow={false}>
                                <EuiFlexGroup>
                                    <EuiButton>Do something</EuiButton>
                                    <EuiButton fill iconType="plusInCircle">Add something</EuiButton>
                                </EuiFlexGroup>
                            </EuiFlexItem>
                        </EuiFlexGroup>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFlexGroup>
                            <EuiFlexItem>
                                <EuiFlexGroup alignItems='center' gutterSize='m'>
                                    <EuiAvatar name='' imageUrl='/assets/avata.png'/>
                                    <EuiText><span><strong>Họ và tên:</strong>Lê Chí Tuyền</span></EuiText>
                                    <EuiText><span><strong>Lớp:</strong>12A12</span></EuiText>
                                    <EuiText><span><strong>Trường:</strong>THPT Bách Khoa</span></EuiText>
                                    <EuiText><span><strong>Ngày sinh:</strong>20/10/2024</span></EuiText>
                                    <EuiText><span><strong>Email:</strong>lechituyen@gmail.com</span></EuiText>
                                </EuiFlexGroup>
                            </EuiFlexItem>
                            <EuiFlexItem grow={false}>
                                <EuiPopover
                                hasArrow={false}
                                isOpen={false}
                                panelStyle={{outline:'none'}}
                                button={
                                    <EuiFlexGroup alignItems='center' gutterSize='s'>
                                        <EuiFlexItem grow={false}>
                                            <EuiText color='blue'>Năm học: 2024</EuiText>
                                        </EuiFlexItem>
                                        <EuiFlexItem grow={false}>
                                            <EuiIcon type="arrowDown" color='blue'/>
                                        </EuiFlexItem>
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
            <EuiText size='s'>Điểm tổng kết: 10</EuiText>
            <EuiSpacer size="s" />
            <EuiHorizontalRule margin="none" style={{ height: 2 }} />
            <EuiBasicTable
                items={pageOfItems}
                columns={columns}
                pagination={pagination}
                onChange={onTableChange}
            />
        </EuiPageTemplate.Section>
        <EuiPageTemplate.BottomBar paddingSize='s'>
            <EuiFlexGroup justifyContent='spaceBetween' alignItems='center'>
                <EuiFlexItem grow={false}>
                    <EuiText>Paragraph</EuiText>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                    <EuiFlexGroup>
                        <EuiFlexItem>
                            <EuiButton color='text'>Button</EuiButton>
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <EuiButton color="text">Button</EuiButton>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiFlexItem>
            </EuiFlexGroup>
        </EuiPageTemplate.BottomBar>
    </EuiPageTemplate>
  )
}
