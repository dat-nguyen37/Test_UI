import { EuiAvatar, EuiBadge, EuiButton,EuiAccordion,EuiPanel,EuiSpacer,euiPaletteColorBlind, EuiButtonIcon, EuiFlexGroup, EuiFlexItem, EuiHorizontalRule, EuiPageTemplate, EuiSplitPanel, EuiText, EuiTimeline, EuiTimelineItem, EuiTitle, EuiSwitch, useGeneratedHtmlId, EuiFormRow, EuiSelect, EuiComboBox, EuiBasicTable, EuiTable, EuiTableBody, EuiTableRow, EuiTableRowCell } from '@elastic/eui'
import React, { useState } from 'react'

export default function TimeTable() {
    const [options, setOptions] = useState([
        {label: 'Buổi sáng'},
        {label: 'Buổi chiều'},
    ]);
    const [selectedOptions, setSelected] = useState([]);
    const onChange = (selectedOptions) => {
        setSelected(selectedOptions);
      };
    const columns=[
        {field:'thu',name:'Thứ',width:'50px',},
        {
            field:'tiet',
            name:'Tiết',
            render:(items)=>(
                <EuiTable>
                    {items.map(item=>(<EuiTableBody >
                        <EuiTableRowCell>{item}</EuiTableRowCell>
                    </EuiTableBody>))}
                </EuiTable>
            ),
            width:'50px',
        },
        {field:'mon',name:'Môn',

            render:(items)=>(
                <EuiTable>
                    {items.map(item=>(<EuiTableBody>
                        <EuiTableRow>
                            <EuiTableRowCell>{item}</EuiTableRowCell>
                        </EuiTableRow>
                    </EuiTableBody>))}
                </EuiTable>
            ),
        },
        {field:'gv',name:'Giáo viên',
            render:(items)=>(
                <EuiTable>
                    {items.map(item=>(<EuiTableBody>
                        <EuiTableRow>
                            <EuiTableRowCell>{item}</EuiTableRowCell>
                        </EuiTableRow>
                    </EuiTableBody>))}
                </EuiTable>
            )
        },
        {field:'tg',name:'Thời gian',
            render:(items)=>(
                <EuiTable>
                    {items.map(item=>(
                    <EuiTableBody>
                        <EuiTableRow>
                            <EuiTableRowCell><EuiText textAlign='center'>{item}</EuiText></EuiTableRowCell>
                        </EuiTableRow>
                    </EuiTableBody>))}
                </EuiTable>
            )
        },

    ]
    const items=[
        {thu:2,tiet:[1,2,3,4,5],mon:['Toán','Lý','Hóa','Sinh','Anh văn'],gv:['A','B','C','D','E'],tg:['7h','8h','9h','10h','11h']},
        {thu:3,tiet:[1,2,3,4,5],mon:['Toán','Lý','Hóa','Sinh','Anh văn'],gv:['A','B','C','D','E'],tg:['7h','8h','9h','10h','11h']},
        {thu:4,tiet:[1,2,3,4,5],mon:['Toán','Lý','Hóa','Sinh','Anh văn'],gv:['A','B','C','D','E'],tg:['7h','8h','9h','10h','11h']},
        {thu:5,tiet:[1,2,3,4,5],mon:['Toán','Lý','Hóa','Sinh','Anh văn'],gv:['A','B','C','D','E'],tg:['7h','8h','9h','10h','11h']}

    ]
  return (
    <>
      <EuiPageTemplate.Header
      pageTitle={
        <EuiFlexGroup justifyContent='spaceBetween'>
            <EuiFlexItem grow={false}>
                <EuiFlexGroup alignItems='center' gutterSize='s'>
                    <EuiButtonIcon iconType="arrowRight" display='fill' size='s'/>
                    <EuiText><h3>Tạo mới thời khóa biểu</h3></EuiText>
                </EuiFlexGroup>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
                <EuiFlexGroup gutterSize='s'>
                    <EuiButton iconType="plusInCircle" fill>Thêm khối lớp</EuiButton>
                    <EuiButton iconType="plusInCircle" fill>Thêm lớp học</EuiButton>
                </EuiFlexGroup>
            </EuiFlexItem>
        </EuiFlexGroup>
      }/>
      <EuiPageTemplate.Section>
        <EuiTimeline>
            <EuiTimelineItem
            verticalAlign="top"
            icon={
              <EuiAvatar
                name="Checked"
                iconType="check"
                color='#000'
              />
            }>
                <EuiSplitPanel.Outer  hasBorder grow>
                <EuiSplitPanel.Inner grow={false} paddingSize='s' color='subdued'>
                    <EuiTitle size="s">
                        <b>1. Cấu hình chung</b>
                    </EuiTitle>
                </EuiSplitPanel.Inner>
                <EuiHorizontalRule margin="none" />
                <EuiSplitPanel.Inner>
                    <EuiFlexGroup>
                        <EuiFlexItem>
                            <EuiFormRow label='Năm học' fullWidth>
                                <EuiSelect
                                options={[
                                    {value:'2022',text:'2022'},
                                    {value:'2023',text:'2023'},
                                    {value:'2024',text:'2024'},
                                    {value:'2025',text:'2025'},
                                ]} fullWidth/>
                            </EuiFormRow>
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <EuiFormRow label='Số lượng ngày học' fullWidth>
                                <EuiSelect  options={[
                                    {value:'1',text:'1'},
                                    {value:'2',text:'2'},
                                    {value:'3',text:'3'},
                                    {value:'4',text:'4'},
                                    {value:'5',text:'5'},
                                    {value:'6',text:'6'},
                                ]} fullWidth/>
                            </EuiFormRow>
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <EuiFormRow label='Buổi học'>
                                <EuiComboBox
                                options={options}
                                onChange={onChange}
                                selectedOptions={selectedOptions}
                                isClearable={true}/>
                            </EuiFormRow>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiSplitPanel.Inner>
                </EuiSplitPanel.Outer>
            </EuiTimelineItem>
        </EuiTimeline>
      </EuiPageTemplate.Section>
      <EuiPageTemplate.Section>
        <EuiBasicTable
        cellProps={{style:{border:'1px solid black'}}}
        className='custom-table'
        columns={columns}
        items={items}/>
      </EuiPageTemplate.Section>
    </>
  )
}
