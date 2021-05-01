import styled from 'styled-components';

const Header = styled.div`
background: ${(props) => (props.colorScheme ? 'purple' : 'orange')};
height: 100px;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
color: white;
padding: 0px;
padding-right: 35px;
align-items: center;
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
max-width: 1200px;
margin: auto;
left: 50%;
`;

const Outside = styled.div`
background: ${(props) => (props.colorScheme ? '#494949' : '#dcdcdc')};
height: max-content;
min-height:100vh;
`;

const LogoImg = styled.img`
max-height:100px;
margin-left: 15px;
`;

const Title = styled.h1`
align-self: center;
margin-left: auto;
font-size: 2em;
font-weight: bolder;
`;

export default {
  Header, Footer, Divider, Wrapper, Outside, LogoImg, Title,
};
