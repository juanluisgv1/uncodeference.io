import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import { Text } from '../components/Text'

const PageTitleWrapper = styled(Text) ` 
  font-size: 24px; 
  color: ${colors.background};
  background-color: ${colors.accent};
  padding: 6px 15px 4px 15px;
`;

export const PageTitle = () => <PageTitleWrapper>un<i>code</i>ference.io</PageTitleWrapper>
