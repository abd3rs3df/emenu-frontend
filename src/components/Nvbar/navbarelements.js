import styled from 'styled-components'
import {FaPizzaSlice} from 'react-icons/fa'
export const Nav = styled.nav`
background-color :transparent;
height:88px;
display:flex;
justify-content:center;
font-weight:700;
position: relative;
`;

export const Bars = styled(FaPizzaSlice)`
 font-size: 2rem;
 transform: translate(-50%,-25%);
 color: #fff;
 position: absolute;
 right: 10px;
 top: 19px;
`
export const Order = styled.a`
font-size: 1.4rem;
color: #fff;
cursor: pointer;
font-weight: bold;
text-decoration :none;

position: absolute;
top: 14px;
right: 80px;

`
export const Menu =styled.a`
color: #fff;
font-size: 1.4rem;
position: absolute;
top: 14px;
right: 160px;
cursor: pointer;;
text-decoration :none;

`