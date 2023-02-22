import styled from '@emotion/styled';

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
`;
export const Label = styled.label`
display: flex;
flex-direction: column;
margin: 8px auto;
align-items: center;
font-size: large;
text-align: left;
padding: 8px 16px 8px 16px;
`;

export const Input = styled.input`
margin-top: 8px;
font-size: large;
padding: 8px 16px 8px 16px;
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