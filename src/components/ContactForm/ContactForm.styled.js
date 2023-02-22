import styled from '@emotion/styled';


export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  align-items: center;
  font-size: 20px;
  text-align: left;
  width: 30%;
`;

export const Input = styled.input`
  display: block;
  margin-bottom: 20px;
  padding: 15px;
  width: 30%;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;

  &:focus,
  &:hover {
   border: 3px solid #1976d2;
   outline: inherit;
`;
