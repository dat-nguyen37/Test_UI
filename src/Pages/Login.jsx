import React from 'react'
import { EuiButton, EuiCheckbox, EuiFieldPassword, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiFormRow, EuiIcon, EuiLink, EuiPanel, EuiSpacer, EuiText, EuiTextColor} from '@elastic/eui'

export default function Login() {
  return (
    <div style={{backgroundImage:`url("/assets/bg.png")`,width:'100vw',height:'100vh',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
       <EuiFlexGroup justifyContent='center' alignItems='center' style={{width:'100%',height:'100%'}}>
            <EuiFlexItem grow={false}> 
                <EuiPanel style={{padding: "4rem", borderRadius: "24px"}}>
                    <EuiFlexGroup direction='column' style={{minWidth:'24rem'}}>
                      <EuiFlexItem>
                        <EuiText textAlign='center' style={{fontSize:'24px'}}>
                          <b>Đăng nhập</b>
                        </EuiText>
                      </EuiFlexItem>
                      <EuiFlexItem>
                        <EuiFormRow label="Email/ Tên người dùng" fullWidth>
                          <EuiFieldText placeholder='Nhập email/ tên người dùng của bạn...' fullWidth isInvalid/>
                        </EuiFormRow>
                      </EuiFlexItem>
                      <EuiFlexItem>
                        <EuiFormRow label="Mật khẩu" fullWidth>
                            <EuiFieldPassword type='dual' placeholder='Password' fullWidth isInvalid/>
                        </EuiFormRow>
                        <EuiFlexGroup justifyContent='spaceBetween' alignItems="center" responsive={false}>
                          <EuiFlexItem grow={true}>
                            <EuiCheckbox checked id='1' label={<span style={{fontSize:'12px'}}>Ghi nhớ đăng nhập</span>}/>
                          </EuiFlexItem>
                          <EuiFlexItem grow={false}>
                            <EuiLink href='' color='subdued' style={{fontSize:'12px'}}>Quên mật khẩu?</EuiLink>
                          </EuiFlexItem>
                        </EuiFlexGroup>
                      </EuiFlexItem>
                      <EuiFlexItem grow={false}>
                        <EuiFlexGroup direction='column'>
                          <EuiFlexItem>
                            <EuiButton fill style={{backgroundColor:'#4880FF',color:'white',borderRadius:'8px',border:'none'}}>Đăng nhập</EuiButton>
                          </EuiFlexItem>
                          <EuiFlexItem>
                            <EuiText style={{display:'flex',justifyContent:'center', gap:5}}>
                              <strong>Chưa có tài khoản?</strong>
                              <EuiLink href=''>Tạo tìa khoản mới</EuiLink>
                            </EuiText>
                          </EuiFlexItem>
                        </EuiFlexGroup>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiPanel>
            </EuiFlexItem>
       </EuiFlexGroup>
    </div>
  )
}
