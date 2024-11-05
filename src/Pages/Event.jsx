import { EuiAvatar, EuiButton, EuiButtonIcon, EuiFlexGroup, EuiFlexItem, EuiPage, EuiPageHeader, EuiPageHeaderContent, EuiPageSection, EuiPageTemplate, EuiPanel, EuiText, EuiTextColor } from '@elastic/eui'
import React, { useEffect } from 'react'
import Headers from '../component/Header'
import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import { createEventsServicePlugin  } from '@schedule-x/events-service'
import { createEventModalPlugin } from '@schedule-x/event-modal'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import '@schedule-x/theme-default/dist/index.css'

export default function Event() {
    const eventService = [createEventsServicePlugin()]
    const eventModal = createEventModalPlugin()
    const calendar = useCalendarApp({
        views: [ createViewMonthGrid(),createViewWeek(),createViewDay(), createViewMonthAgenda()],
        defaultView:'month',
        events: [
          {
            id: '1',
            title: 'Giải bóng đá',
            start: '2024-11-16 10:00',
            end: '2024-11-16 14:00',
            description:'',
          }
        ],
        plugins:[eventService,eventModal,createDragAndDropPlugin()],
      })
      eventModal.close();
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
                        <ScheduleXCalendar calendarApp={calendar}/>
                    </EuiPanel>
                </EuiFlexGroup>
            </EuiPageSection>
        </EuiPageTemplate>
    </>
  )
}
