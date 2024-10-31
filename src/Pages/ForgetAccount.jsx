import { EuiButton, EuiFlexGroup, EuiPage, EuiPanel, EuiText ,EuiFlexItem, EuiFormRow, EuiFieldText, EuiLink, EuiImage, EuiConfirmModal, EuiTextColor, EuiSpacer, EuiToast, EuiGlobalToastList} from '@elastic/eui'
import React, { useEffect, useState } from 'react'

export default function ForgetAccount() {
    const [isModalVisible,setIsModalVisible]=useState(false)
    const [countdown, setCountdown] = useState(60);
    const [toasts, setToasts] = useState([]);

    const addToast = (title, color, text) => {
        const newToast = {
            id: new Date().getTime(),
            title,
            color,
            iconType: color === 'success' ? 'check' : 'warning',
            text: <p>{text}</p>,
        };
        setToasts([...toasts, newToast]);
    };
    const closeToast = (id) => {
        setToasts(toasts.filter(toast => toast.id === id));
    };
    const handleConfirmSuccess = () => {
        addToast("Xác nhận thành công", "success", "Mã xác nhận đã được gửi thành công!");
    };

    const handleConfirmFailure = () => {
        addToast("Mã xác nhận không chính xác", "danger", "Vui lòng kiểm tra hoặc gửi lại mã.");
    };
    const closeModal = () => setIsModalVisible(false);
    const showModal = () => {
        setIsModalVisible(true)
        setCountdown(60);
    };
    let modal;
    if(isModalVisible)
    {
        modal=(
            <EuiConfirmModal 
            style={{width:600}}
            title="Mã xác nhận"
            onCancel={closeModal}
            onConfirm={()=>{
                const isSuccess = Math.random() > 0.5;
                    if (isSuccess) {
                        handleConfirmSuccess();
                    } else {
                        handleConfirmFailure();
                    }
            }}
            cancelButtonText="Gửi lại"
            confirmButtonText="Xác nhận"
            defaultFocusedButton='confirm'>
                <EuiText>
                    <span>Nhập mã xác nhận được gửi về email&nbsp;</span>
                    <EuiTextColor color='blue'>ecotel@gmail.com</EuiTextColor>
                </EuiText>
                <EuiFieldText append={<EuiText>{countdown}</EuiText>} style={{outline:'none'}}/>
            </EuiConfirmModal>
        )
    }
    
    useEffect(()=>{
        if(isModalVisible && countdown>0)
        {
            const timer=setTimeout(() => {
                setCountdown(countdown-1)
            }, 1000);
            return ()=>clearTimeout(timer)
        }else if(countdown===0){
            closeModal()
        }
    },[isModalVisible,countdown])
    useEffect(() => {
        const timer = setTimeout(() => {
            if (toasts.length > 0) {
                closeToast(toasts[0].id);
            }
        }, 3000);
        return () => clearTimeout(timer);
    }, [toasts]);
  return (
    <EuiPage style={{backgroundImage:`url("/assets/bg.png")`,width:'100vw',height:'100vh',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
       <EuiFlexGroup justifyContent='center' alignItems='center' style={{width:'100%',height:'100%',position:'relative'}}>
            <EuiPanel grow={false} style={{position:'absolute',left:'22px',top:'11px'}}>
                <EuiImage src='/assets/logo.png' size="s"/>
            </EuiPanel>
            <EuiFlexItem grow={false}> 
                <EuiPanel style={{padding: "4rem", borderRadius: "24px"}}>
                    <EuiFlexGroup direction='column' style={{minWidth:'24rem'}}>
                      <EuiFlexItem>
                        <EuiText textAlign='center' style={{fontSize:'24px'}}>
                          <b>Quên tài khoản/ mật khẩu</b>
                        </EuiText>
                      </EuiFlexItem>
                      <EuiFlexItem>
                        <EuiFormRow label="Email" fullWidth>
                          <EuiFieldText placeholder='ecotel@gmail.com' fullWidth/>
                        </EuiFormRow>
                      </EuiFlexItem>
                      <EuiFlexItem>
                        <EuiFormRow label="Tên đăng nhập" fullWidth>
                            <EuiFieldText placeholder='ecotel@gmail.com' fullWidth/>
                        </EuiFormRow>
                      </EuiFlexItem>
                      <EuiFlexItem grow={false}>
                        <EuiFlexGroup direction='column'>
                          <EuiFlexItem>
                            <EuiButton fill onClick={showModal} style={{backgroundColor:'#4880FF',color:'white',borderRadius:'8px',border:'none'}}>Gửi mã xác nhận</EuiButton>
                          </EuiFlexItem>
                          <EuiFlexItem>
                            <EuiText style={{display:'flex',justifyContent:'center', gap:5}}>
                              <strong>Đã có tài khoản?</strong>
                              <EuiLink href=''>Đăng nhập</EuiLink>
                            </EuiText>
                          </EuiFlexItem>
                        </EuiFlexGroup>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiPanel>
            </EuiFlexItem>
       </EuiFlexGroup>
       {modal}
       <EuiGlobalToastList
            toasts={toasts}
            dismissToast={closeToast}
            toastLifeTimeMs={3000}
        />
    </EuiPage>
  )
}
