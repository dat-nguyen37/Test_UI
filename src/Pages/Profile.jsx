import React from 'react'
import {EuiAvatar, EuiButton, EuiButtonIcon, EuiFlexGroup, EuiFlexItem, EuiImage, EuiPageBody, EuiPageSection, EuiPageSidebar, EuiPageTemplate, EuiPanel, EuiSideNav, EuiText, EuiTextColor} from '@elastic/eui'
import Header from '../component/Header'
export default function Profile() {
  return (
   <EuiPageTemplate>
    <Header/>
    <EuiPageBody>
    <EuiPageSection style={{marginBlock:'-20px'}}>
        <EuiFlexGroup alignItems="center" gutterSize='m'>
          <EuiFlexItem grow={false}>
          <EuiButtonIcon
              iconType="arrowLeft"
              color="accent"
              type='button'
              size='m'
              aria-label="Icon button"
              display='fill'
              style={{background:"#FFFF",boxShadow:'0 1px 4px rgba(0, 0, 0, 0.08)'}}/>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiText>
              <h3>Hồ sơ học sinh</h3>
            </EuiText>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPageSection>
      <EuiPageSection style={{marginBlock:'-20px'}}>
          <EuiPanel paddingSize='none'>
            <EuiFlexGroup gutterSize='none'>
                <EuiFlexItem grow={false}>
                  <EuiPageSidebar paddingSize="l">
                    <EuiFlexGroup direction='column'>
                      <EuiFlexItem>
                        <EuiFlexGroup direction='column' alignItems='center'>
                          <EuiImage src='/assets/avata.png' size={150} style={{borderRadius:'50%'}} />
                          <EuiText color='blue'>
                            <h3>Lê Chí Tuyền</h3>
                          </EuiText>
                        </EuiFlexGroup>
                      </EuiFlexItem>
                      <EuiFlexItem style={{ border: '1px solid #d3d3d3'}} />
                      <EuiFlexItem>
                        <EuiText>
                          <EuiTextColor style={{fontWeight:600}}>
                            <p>ID học sinh: 20242024</p>
                            <p>Role: Học sinh</p>
                            <p>Trạng thái học tập: Đang học</p>
                          </EuiTextColor>
                          <EuiTextColor color='subdued'>
                            <p>Điểm trung bình: 4.0</p>
                            <p>Học lực: Giỏi</p>
                            <p>Hạnh kiểm: Tốt</p>
                          </EuiTextColor>
                        </EuiText>
                      </EuiFlexItem>
                      <EuiFlexItem>
                        <EuiImage src='/assets/qr.png' alt='' size={150}/>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  </EuiPageSidebar>
                </EuiFlexItem>
                <EuiFlexItem grow={false} style={{ borderLeft: '1px solid #d3d3d3'}} />
                <EuiFlexItem>
                  <EuiPageBody paddingSize="l">
                    <EuiText>
                      <h2>Nội dung chính</h2>
                      <p>Chi tiết nội dung hiển thị ở đây.</p>
                    </EuiText>
                </EuiPageBody>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
      </EuiPageSection>
    </EuiPageBody>
   </EuiPageTemplate>
  )
}
