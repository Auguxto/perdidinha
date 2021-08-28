import styled from 'styled-components/native';

import Card from '../../assets/images/svg/Card.svg';

const background = '#FFFFFF';

export const HomeContainer = styled.View`
  flex: 1;

  background-color: ${background};

  padding: 30px;
`;

export const HomeContent = styled.View`
  flex: 1;
  flex-direction: column;

  align-items: center;
`;

export const HomeCard = styled(Card)`
  width: 100%;
  height: auto;

  margin-top: 40px;
`;
