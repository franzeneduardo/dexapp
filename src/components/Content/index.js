import React from 'react';
import styled from 'styled-components';
import CardContent from '../CardContent';
import SearchBar from '../SearchBar';

const ContentContainer = styled.div`
  margin: 5% 10%;
`;

function Content() {
  return (
    <ContentContainer>
      <SearchBar />
      <CardContent />
    </ContentContainer>
  );
}

export default Content;
