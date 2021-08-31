import styled from 'styled-components/native';

export const PasswordIconContainer = styled.View<{
  backgroundColor: string;
}>`
  width: 60px;
  height: 60px;

  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};

  padding: 10px;

  border-radius: 10px;

  overflow: hidden;
`;

export const Icon = styled.Image`
  width: 100%;
  height: 100%;

  border-radius: 5px;
`;
