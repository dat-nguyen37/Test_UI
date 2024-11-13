import { EuiButton, EuiButtonIcon, EuiCard, EuiFieldSearch, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiFormControlLayout, EuiFormRow, EuiIcon, EuiPageTemplate, EuiStat, EuiText } from '@elastic/eui'
import React from 'react'

export default function SchoolAdmin() {
  return (
    <>
      <EuiPageTemplate.Header
      pageTitle={
        <EuiFlexGroup alignItems='center'>
            <EuiText><h2>Dashboard</h2></EuiText>
            <EuiFlexItem>
                <EuiFormControlLayout style={{fontSize:'14px'}} fullWidth>
                    <EuiFieldSearch placeholder='Tìm kiếm chức năng' fullWidth/>
                </EuiFormControlLayout>
            </EuiFlexItem>
            <EuiButtonIcon iconType="indexSettings" color='text' display='fill'/>
        </EuiFlexGroup>
      }
      />
      <EuiPageTemplate.Section color='plain'>
        <EuiFlexGroup direction='column' gutterSize='xl'>
            <EuiFlexItem>
                <EuiFlexGroup gutterSize='l' justifyContent='center'>
                    <EuiFlexItem grow={false}>
                        <EuiStat title="100" description="Người dùng"/>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                        <EuiStat title="50" description="Giáo viên"/>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                        <EuiStat title="300" description="Học sinh"/>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                        <EuiStat title="1,000,000" description="Statistic description"/>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                        <EuiStat title="1,000,000" description="Statistic description"/>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiFlexItem>
            <EuiFlexItem>
                <EuiFlexGrid columns={4}>
                    {[1,2,3,4,5,6].map(item=>(<EuiFlexItem>
                        <EuiCard
                        icon={<EuiIcon size="xxl" type="package" color='white'/>}
                        title="Quản lý tài khoản"
                        image="/assets/card.png"
                        description={
                            <p>
                                <EuiText size='s'>Danh sách tài khoản</EuiText>
                                <EuiText size='s'>Thêm mới tài khoản</EuiText>
                            </p>
                        }
                        footer={
                            <EuiButton fullWidth style={{marginBlockStart:'-16px'}}>Select</EuiButton>
                        }
                        betaBadgeProps={{
                            label:'Beta'
                        }}/>
                    </EuiFlexItem>))}
                </EuiFlexGrid>
            </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPageTemplate.Section>
    </>
  )
}
