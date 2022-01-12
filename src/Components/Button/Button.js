import styled from 'styled-components';

const Button = styled.button`
  @include text;
  background-color: purple;
  border: none;
  color: #fff;
  width: 250px;
  height: 90px;
  margin-top: 2rem;
  &:hover, &:active {
    cursor: pointer;
    background-color: salmon;
  }
`;

export default Button;