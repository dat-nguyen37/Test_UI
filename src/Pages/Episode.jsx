import React from 'react'
import {EuiButton, EuiFieldNumber, EuiFieldPassword, EuiFieldSearch, EuiFlexGroup, EuiFlexItem, EuiForm, EuiFormControlLayout, EuiPageHeader, EuiPageHeaderContent, EuiPageTemplate, EuiSelect, useEuiTheme, useGeneratedHtmlId} from '@elastic/eui'
import EpisodeList from '../component/EpisodeList'
import {Show} from '../data'
import { css } from '@emotion/react'
import Header from '../component/Header'
export default function Episode() {

  const options = [
    { value: 'option_one', text: 'Option one' },
    { value: 'option_two', text: 'Option two' },
    { value: 'option_three', text: 'Option three' },
  ];
  const basicSelectId = useGeneratedHtmlId({ prefix: 'basicSelect' });

    const button=<EuiButton iconType="play">Start watching</EuiButton>
  return (
    <>
    <EuiPageHeader>
        <EuiPageHeaderContent>
            <Header/>      
        </EuiPageHeaderContent>
      </EuiPageHeader>
    <EuiPageTemplate >
        <EuiPageTemplate.Header iconType="logoElastic" pageTitle="Flinstone Episodes" rightSideItems={[button]}/>
        <EuiPageTemplate.Section>
          <EpisodeList episodes={Show.episodes}/>
        </EuiPageTemplate.Section>
    </EuiPageTemplate>
    </>
  )
}
