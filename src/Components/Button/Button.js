import styled from 'styled-components';

const Button = styled.button`
  @include text;
  background-color: ${props => (props.invalid ? 'red' : 'purple')};
  border: none;
  color: #fff;
  width: 250px;
  height: 90px;
  margin-top: 2rem;
  &:hover, &:active {
    cursor: pointer;
    background-color: salmon;
  }

  @media(max-width: 767px) {
    width: 100px;
  }
`;

export default Button;