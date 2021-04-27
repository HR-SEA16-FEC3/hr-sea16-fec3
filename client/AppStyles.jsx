import styled from 'styled-components';

const Header = styled.div`
background: ${(props) => (props.colorScheme ? 'purple' : 'orange')};
height: 40px;
display: flex;
flex-direction: row;
align-items: center;
color: white;
padding: 5px;
`;

const Footer = styled.div`
background: ${(props) => (props.colorScheme ? 'purple' : 'orange')};
height: 80px;
display: flex;
flex-direction: row;
align-items: center;
color: white;
padding: 5px;
`;

const Divider = styled.hr`
display: block;
height: 1px;
border: 0;
border-top: 2px solid #ccc;
margin: 0;
padding: 0;
`;

const Wrapper = styled.div`
font-family: sans-serif;
scroll-behavior: smooth;
max-width: 1080px;
margin: auto;
left: 50%;
`;

const Outside = styled.div`
background: ${(props) => (props.colorScheme ? '#494949' : '#c4c4c4')};
height: max-content;
min-height:100vh;
`;

const Logo = styled.span`
margin-left: 16px;
margin-right: 8px;
`;

export default {
  Header, Footer, Divider, Wrapper, Outside, Logo,
};
