import React from 'react'
import { EuiButton, EuiCheckbox, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiFormRow, EuiIcon, EuiLink, EuiPanel, EuiSpacer, EuiText, EuiTextColor} from '@elastic/eui'

export default function Login() {
  return (
    <div style={{backgroundImage:`url("/assets/bg.png")`,width:'100vw',height:'100vh',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
       <EuiFlexGroup justifyContent='center' alignItems='center' style={{width:'100%',height:'100%'}}>
            <EuiFlexItem grow={false}> 
                <EuiPanel style={{padding: "24px", borderRadius: "24px"}}>
                    <EuiFlexGroup direction='column' alignItems='center'>
                      <EuiFlexItem style={{textAlign:'center',gap:10}}>
                        <EuiText style={{fontWeight:'600',fontSize:'24px'}}>Đăng nhập</EuiText>
                        <EuiText size='xs'>Điền tài khoản và mật khẩu của bạn để tiếp tục</EuiText>
                      </EuiFlexItem>
                      <EuiFlexItem>
                        <EuiFormRow label="Tên tài khoản/ email">
                            <EuiFieldText placeholder='ecotel@gmail.com' style={{width:'26rem',height:'2rem',marginTop:'0.5rem',borderRadius:'8px',padding:'4px',background:'#F1F4F9',border:'1px #D8D8D8',outline:'none'}}/>
                        </EuiFormRow>
                      </EuiFlexItem>
                      <EuiFlexItem>
                        <EuiFormRow label="Mật khẩu">
                            <EuiFlexGroup alignItems='center' gutterSize='l' style={{position:'relative'}}>
                              <EuiFieldText type='password' placeholder='Enter your password' style={{width:'26rem',height:'2rem',margin:'0.5rem 0',borderRadius:'8px',padding:'4px',background:'#F1F4F9',border:'1px #D8D8D8',outline:'none'}}/>
                              <EuiIcon type="eyeClosed" style={{position:'absolute',right:'10'}}/>
                            </EuiFlexGroup>
                        </EuiFormRow>
                        <EuiFlexGroup justifyContent='spaceBetween' alignItems="center">
                          <EuiFlexItem grow={true} style={{display:'flex'}}>
                            <EuiCheckbox checked id={`fne`} label={<span style={{fontSize:'12px'}}>Ghi nhớ đăng nhập</span>}/>
                          </EuiFlexItem>
                          <EuiFlexItem grow={false}>
                            <EuiLink href='' style={{fontSize:'12px'}}>Quên mật khẩu?</EuiLink>
                          </EuiFlexItem>
                        </EuiFlexGroup>
                      </EuiFlexItem>
                      <EuiFlexItem grow={false}>
                        <EuiButton fill style={{backgroundColor:'#4880FF',color:'white',borderRadius:'8px',border:'none'}}>Đăng nhập</EuiButton>
                        <h5 style={{display:'flex',gap:5,justifyContent:'center'}}>
                          <EuiTextColor>Chưa có tài khoản?</EuiTextColor>
                          <EuiLink href=''>Tạo tài khoản mới</EuiLink>
                        </h5>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiPanel>
            </EuiFlexItem>
       </EuiFlexGroup>
    </div>
  )
}
