import styled from 'styled-components';

const Form = styled.form`
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  background-color: red;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid black;
  label {
    display: flex;
    flex-direction: column;
    input {
      width: min-content;
      margin-top: 10px;
      background-color: green;
    }
  }
`;

export { Form };
