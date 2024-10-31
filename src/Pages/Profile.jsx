import React from 'react'
import {EuiAvatar, EuiButton, EuiButtonIcon, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiFormRow, EuiHeader, EuiImage, EuiPageBody, EuiPageHeader, EuiPageSection, EuiPageSidebar, EuiPageTemplate, EuiPanel, EuiSelect, EuiSideNav, EuiSpacer, EuiText, EuiTextColor} from '@elastic/eui'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { css } from '@emotion/react'
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
                    <EuiFlexGroup direction='column' gutterSize='m'>
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
                  <EuiFlexGroup direction='column' gutterSize='m'>
                    <EuiFlexItem style={{padding:'10px 20px'}} grow={false}>
                      <EuiFlexGroup justifyContent='spaceBetween' alignItems='center'>
                        <EuiFlexItem grow={false}>
                          <EuiText>
                            <h3>Thông tin cá nhân</h3>
                          </EuiText>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                          <EuiFlexGroup gutterSize='m'>
                            <EuiButtonIcon iconType="documentEdit" color='text'/>
                            <EuiButtonIcon iconType="gear" color='text'/>
                          </EuiFlexGroup>
                        </EuiFlexItem>
                      </EuiFlexGroup>
                    </EuiFlexItem>
                    <EuiFlexItem style={{border:'1px solid #d3d3d3'}} grow={false}/>
                    <EuiFlexItem style={{padding:'10px 20px'}}>
                      <EuiFlexGroup direction='column' gutterSize='xl'>
                        <EuiFlexItem grow={false}>
                          <EuiFlexGroup>
                            <EuiFlexItem grow={2}>
                              <EuiFormRow label="Họ">
                                <EuiFieldText placeholder='Họ' style={{marginTop:'0.5rem'}}/>
                              </EuiFormRow>
                            </EuiFlexItem>
                            <EuiFlexItem grow={2}>
                              <EuiFormRow label="Tên">
                                <EuiFieldText placeholder='Tên' style={{marginTop:'0.5rem'}}/>
                              </EuiFormRow>
                            </EuiFlexItem>
                            <EuiFlexItem grow={1}>
                              <EuiFormRow label="Giới tính">
                                <EuiSelect options={[{value:'Nam',text:'Nam'},{value:'Nữ',text:'Nữ'}]} style={{marginTop:'0.5rem'}}/>
                              </EuiFormRow>
                            </EuiFlexItem>
                          </EuiFlexGroup>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                          <EuiFlexGroup>
                            <EuiFlexItem grow={2}>
                              <EuiFormRow label="Email">
                                <EuiFieldText placeholder='Email' style={{marginTop:'0.5rem'}}/>
                              </EuiFormRow>
                            </EuiFlexItem>
                            <EuiFlexItem grow={1}>
                              <EuiFormRow label="Số điện thoại">
                                <EuiFieldText placeholder='0387474343' style={{marginTop:'0.5rem'}}/>
                              </EuiFormRow>
                            </EuiFlexItem>
                            <EuiFlexItem grow={2}>
                              <EuiFormRow label="Ngày sinh">
                                <EuiFieldText placeholder='20/10/2024' style={{marginTop:'0.5rem'}}/>
                              </EuiFormRow>
                            </EuiFlexItem>
                          </EuiFlexGroup>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                          <EuiFlexGroup>
                            <EuiFlexItem grow={2}>
                              <EuiFormRow label="Trường học">
                                <EuiFieldText placeholder='Trường THCS Bách Khoa' style={{marginTop:'0.5rem'}}/>
                              </EuiFormRow>
                            </EuiFlexItem>
                            <EuiFlexItem grow={1}>
                              <EuiFormRow label="Lớp">
                                <EuiFieldText placeholder='12A12' style={{marginTop:'0.5rem'}}/>
                              </EuiFormRow>
                            </EuiFlexItem>
                            <EuiFlexItem grow={2}>
                              <EuiFormRow label="Địa chỉ thường trú">
                                <EuiFieldText placeholder='Số 1, Đại Cồ Việt' style={{marginTop:'0.5rem'}}/>
                              </EuiFormRow>
                            </EuiFlexItem>
                          </EuiFlexGroup>
                        </EuiFlexItem>
                      </EuiFlexGroup>
                    </EuiFlexItem>
                    <EuiFlexItem style={{border:'1px solid #d3d3d3'}} grow={false}/>
                    <EuiFlexItem style={{padding:'10px 20px'}}>
                      <EuiFlexGroup direction='column'>
                        <EuiFlexItem grow={false}>
                          <EuiFlexGroup>
                            <EuiFlexItem grow={2}>
                              <EuiFormRow label="Họ và tên bố">
                                <EuiFieldText placeholder='Lê Văn A' style={{marginTop:'0.5rem'}}/>
                              </EuiFormRow>
                            </EuiFlexItem>
                            <EuiFlexItem grow={2}>
                              <EuiFormRow label="Số điện thoại">
                                <EuiFieldText placeholder='01101021020' style={{marginTop:'0.5rem'}}/>
                              </EuiFormRow>
                            </EuiFlexItem>
                            <EuiFlexItem grow={1}>
                              <EuiFormRow label="Đơn vị công tác">
                                <EuiFieldText placeholder='Công ty TNHH Ecotel' style={{marginTop:'0.5rem'}}/>
                              </EuiFormRow>
                            </EuiFlexItem>
                          </EuiFlexGroup>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                          <EuiFlexGroup>
                            <EuiFlexItem grow={2}>
                              <EuiFormRow label="Họ và tên mẹ">
                                <EuiFieldText placeholder='Email' style={{marginTop:'0.5rem'}}/>
                              </EuiFormRow>
                            </EuiFlexItem>
                            <EuiFlexItem grow={1}>
                              <EuiFormRow label="Số điện thoại">
                                <EuiFieldText placeholder='0387474343' style={{marginTop:'0.5rem'}}/>
                              </EuiFormRow>
                            </EuiFlexItem>
                            <EuiFlexItem grow={2}>
                              <EuiFormRow label="Đơn vị công tác">
                                <EuiFieldText placeholder='Công ty TNHH Ecotel' style={{marginTop:'0.5rem'}}/>
                              </EuiFormRow>
                            </EuiFlexItem>
                          </EuiFlexGroup>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                          <EuiFlexGroup>
                            <EuiFlexItem grow={2}>
                              <EuiFormRow label="Khi cần liên lạc cho">
                                <EuiFieldText placeholder='Lê Văn A' style={{marginTop:'0.5rem'}}/>
                              </EuiFormRow>
                            </EuiFlexItem>
                            <EuiFlexItem grow={2}>
                              <EuiFormRow label="Số điện thoại liên lạc">
                                <EuiFieldText placeholder='019293293' style={{marginTop:'0.5rem'}}/>
                              </EuiFormRow>
                            </EuiFlexItem>
                            <EuiFlexItem grow={1}/>
                          </EuiFlexGroup>
                        </EuiFlexItem>
                      </EuiFlexGroup>
                    </EuiFlexItem>
                    <EuiFlexItem style={{padding:'10px 20px'}} >
                      <EuiFlexGroup justifyContent='flexEnd'>
                        <EuiButton fill p>Thông tin lớp học sinh</EuiButton>
                        <EuiButton fill>Học bạ</EuiButton>
                      </EuiFlexGroup>
                    </EuiFlexItem>
                  </EuiFlexGroup>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
      </EuiPageSection>
      <Footer/>
    </EuiPageBody>
   </EuiPageTemplate>
  )
}
