import styled from 'styled-components';

const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
`;
const Subtitle = styled.h3`
  font-weight: bold;
  font-size: 18px;
`;
const Button = styled.button`
  border: 1px solid orange;
  margin-top: 10px;
  margin-right: 10px;
  background: orange;
  padding: 7px;
  font-size: 10px;
  color: white;
  text-transform: uppercase;
  width: 175px;
  &:hover{ background: #ffc457; color: white; }
  &:active{ background: darkorange; color: white; }
`;
const Label = styled.label`
  margin: 1em 0;
  font-size: 16px;
  display: inline-block;
  margin: .5em 0;
  width: 100%;
`;

const Input = styled.input`
  font-size: 16px;
  width: 100%;
  border: 2px solid #aaa;
  margin: 0 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  cursor: pointer;
  background: whitesmoke;
  height: 30px;

  &:focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }
`;

const Disclaimer = styled.p`
  color: grey;
  font-size: 12px;
  margin: 1px
`;

const BodyInput = styled(Input)`
  height: 90px;
  font-family: sans-serif;
`;

const Wrapper = styled.form`
  font-family: sans-serif;
  scroll-behavior: smooth;
`;

export default {
  Title, Subtitle, Button, Label, Input, Disclaimer, BodyInput, Wrapper,
};
