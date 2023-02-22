import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Username = styled.p`
font-weight: 700;
`;


export const UserLogin = styled.span`
color: royalblue;
`; 
    
export const Button = styled.button`
margin-top: 16px;
margin-bottom: 32px;
background-color: rgba(23, 26, 32, 0.8);
border: none;
border-radius: 6px;
color: #fff;
flex-grow: 1;
font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
font-size: 15px;
height: 36px;
line-height: 20px;
margin-left: 8px;
margin-right: 6px;
min-width: 185px;
padding: 0 16px 0 16px;
color: white;
cursor: pointer;

&:hover {
    background-color: rgba(23, 26, 32, 1);
  cursor: pointer;
}
`;