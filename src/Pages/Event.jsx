import { EuiAvatar, EuiButton, EuiButtonIcon, EuiFlexGroup, EuiFlexItem, EuiPage, EuiPageHeader, EuiPageHeaderContent, EuiPageSection, EuiPageTemplate, EuiPanel, EuiText, EuiTextColor } from '@elastic/eui'
import React from 'react'
import Headers from '../component/Header'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import rrulePlugin from '@fullcalendar/rrule';
import interactionPlugin from '@fullcalendar/interaction'


// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";

export default function Event() {
  return (
    <>
        <EuiPageHeader>
            <EuiPageHeaderContent>
                <Headers/>      
            </EuiPageHeaderContent>
        </EuiPageHeader>
        <EuiPageTemplate>
            <EuiPageTemplate.Header
            bottomBorder={false}
                pageTitle={
                <EuiFlexGroup alignItems='center' gutterSize='m'>
                    <EuiButtonIcon display='fill' iconType='arrowLeft' size='s' color='accent' style={{background:'white'}}/>
                    <EuiText><h3>Sự kiện và hoạt động ngoại khóa</h3></EuiText>
                </EuiFlexGroup>}/>
            <EuiPageSection>
                <EuiFlexGroup>
                    <EuiPanel grow={false}>
                        <EuiFlexGroup direction='column'>
                            <EuiButton iconType="plus" fill>Thêm mới sự kiện</EuiButton>
                            <EuiText><h5>Các sự kiện sắp diễn ra</h5></EuiText>
                            <EuiFlexGroup gutterSize='s'>
                                <EuiFlexItem grow={false}>
                                    <EuiAvatar name='avata' imageUrl='/assets/avata.png'/>
                                </EuiFlexItem>
                                <EuiFlexItem>
                                    <EuiText size='xs' color='subdued' style={{display:'flex',flexDirection:'column',gap:5}}>
                                        <EuiTextColor color='default'><b>Giải bóng đá</b></EuiTextColor>
                                        <h>14:00 hôm nay</h>
                                        <h>Sân vận động</h>
                                        <h>Phòng thể thao</h>
                                    </EuiText>
                                    
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexGroup>
                    </EuiPanel>
                    <EuiPanel>
                        <FullCalendar
                        timeZone='UTC'
                        initialView={"dayGridMonth"}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "timeGridDay,timeGridWeek,dayGridMonth"
                          }}
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            rrulePlugin,
                            interactionPlugin   
                        ]}
                        height="90vh"
                        events={[
                            {
                                title:"Giải bóng đá",
                                rrule:{
                                    freq: "daily",
                                    count: 10,
                                    dtstart: "2024-11-5T10:00:00Z",
                                    until:"2024-11-6T10:00:00Z"
                                },
                                display:'background',
                            }
                        ]}
                        />
                    </EuiPanel>
                </EuiFlexGroup>
            </EuiPageSection>
        </EuiPageTemplate>
    </>
  )
}
