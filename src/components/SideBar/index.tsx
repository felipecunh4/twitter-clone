import React from 'react';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';
import StickyBox from 'react-sticky-box';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="Victor Cunha" nickname="@vncunha" />,
              <FollowSuggestion name="Maysa Clemente" nickname="@ysaclement" />,
              <FollowSuggestion name="Ana Beatriz" nickname="@an_viana" />,
            ]}
          />
          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
