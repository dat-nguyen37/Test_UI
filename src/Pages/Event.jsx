import { EuiAvatar, EuiButton, EuiButtonEmpty, EuiButtonIcon, EuiFlexGroup, EuiFlexItem, EuiPage, EuiPageHeader, EuiPageHeaderContent, EuiPageSection, EuiPageTemplate, EuiPanel, EuiText, EuiTextColor } from '@elastic/eui'
import React, { useEffect } from 'react'
import Headers from '../component/Header'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import rrulePlugin from '@fullcalendar/rrule';
import interactionPlugin from '@fullcalendar/interaction';
import { Tooltip, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
// import {
//   createViewDay,
//   createViewMonthAgenda,
//   createViewMonthGrid,
//   createViewWeek,
// } from '@schedule-x/calendar'
// import { createEventsServicePlugin  } from '@schedule-x/events-service'
// import { createEventModalPlugin } from '@schedule-x/event-modal'
// import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
// import '@schedule-x/theme-default/dist/index.css'

export default function Event() {
    // const eventService = [createEventsServicePlugin()]
    // const eventModal = createEventModalPlugin()
    // const calendar = useCalendarApp({
    //     views: [ createViewMonthGrid(),createViewWeek(),createViewDay(), createViewMonthAgenda()],
    //     defaultView:'month',
    //     events: [
    //       {
    //         id: '1',
    //         title: 'Giải bóng đá',
    //         start: '2024-11-16 10:00',
    //         end: '2024-11-16 14:00',
    //         description:'',
    //       }
    //     ],
    //     plugins:[eventService,eventModal,createDragAndDropPlugin()],
    //   })
    //   eventModal.close();
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
                    <EuiPanel grow={false} title='fdsf' paddingSize='l'>
                        <EuiFlexGroup direction='column' gutterSize='m'>
                            <EuiButton iconType="plus" fill>Thêm mới sự kiện</EuiButton>
                            <EuiText><h5>Các sự kiện sắp diễn ra</h5></EuiText>
                            <EuiFlexGroup gutterSize='none' direction='column'>
                                {[1,2,3,4,5].map(item=>(
                                    <EuiFlexItem style={{paddingBlock:'10px',borderTop:'1px solid'}}>
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
                                                <EuiFlexGroup gutterSize='s'>
                                                    <EuiAvatar name='avata' size='s'/>
                                                    <EuiAvatar name='avata' size='s'/>
                                                    <EuiAvatar name='avata' size='s'/>
                                                    <EuiAvatar name='12' initialsLength="2" size='s' color="subdued"><EuiText>+12</EuiText></EuiAvatar>
                                                </EuiFlexGroup>
                                            </EuiFlexItem>
                                        </EuiFlexGroup>
                                    </EuiFlexItem>
                                ))}
                            </EuiFlexGroup>
                            <EuiButton color='text'>See More</EuiButton>
                        </EuiFlexGroup>
                    </EuiPanel>
                    <EuiPanel>
                        {/* <ScheduleXCalendar calendarApp={calendar}/> */}
                        <FullCalendar
                        timeZone='local'
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "timeGridDay,timeGridWeek,dayGridMonth"
                          }}
                        plugins={[ 
                            dayGridPlugin,
                            timeGridPlugin,
                            rrulePlugin ,
                            interactionPlugin,
                        ]}
                        themeSystem='bootstrap'
                        events={[{
                            title:"Giải bóng đá",
                            rrule:{
                                freq: "daily",
                                count:10,
                                dtstart: "2024-11-20 10:00",
                                until: "2024-11-28 10:00",
                            },
                            imageUrl:"/assets/ball.png",
                            location:'Sân vận động',
                            time:'14:00 Hôm nay',
                            room:'Phòng thể thao',
                            duration:"02:00",
                        }]}
                        eventDidMount={(info)=>{
                            return new Popover(info.el,{
                                trigger:'hover',
                                customClass:'popoverStyle',
                                placement:'bottom',
                                content:`
                                    <div class="d-flex flex-column">
                                        <img src=${info.event.extendedProps.imageUrl} class="w-100">
                                        <b>${info.event.title}</b>
                                        <span>${info.event.extendedProps.location}</span>
                                        <span>${info.event.start.toLocaleString()}</span>
                                        <span>${info.event.extendedProps.room}</span>
                                    </div>
                                `,
                                html:true
                            })
                        }}
                        editable={true}
                        dayMaxEvents={true}
                        displayEventEnd={true}
                        eventDisplay='block'
                        eventTimeFormat={{
                            hour: '2-digit',
                            minute: '2-digit',
                            meridiem: true
                        }}  
                        initialView="dayGridMonth"
                        />
                    </EuiPanel>
                </EuiFlexGroup>
            </EuiPageSection>
        </EuiPageTemplate>
    </>
  )
}
