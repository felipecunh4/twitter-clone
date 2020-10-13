import React from 'react';

import { Container, Wrapper } from './styles';
import Main from '../Main';

const Layouts: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        {/* <MenuBar /> */}
        <Main />
        {/* <SideBar /> */}
      </Wrapper>
    </Container>
  );
};

export default Layouts;
