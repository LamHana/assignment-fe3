import { styled } from "styled-components";

export const Form = styled.form`
  width: 500px;
  label {
    color: #333;
    margin: 0 0 5px;
    display: block;
  }

  input {
    background: #fff none repeat scroll 0 0;
    border: 1px solid #e5e5e5;
    border-radius: 0;
    height: 42px;
    width: 100%;
    padding: 0 0 0 10px;
    color: #000;
  }

  input[type="submit"] {
    background: #434343 none repeat scroll 0 0;
    border: medium none;
    color: #fff;
    font-size: 17px;
    font-weight: 600;
    height: 50px;
    margin: 20px 0 0;
    padding: 0;
    text-transform: uppercase;
    transition: all 0.3s ease 0s;
    width: 100%;
    border: 1px solid transparent;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background: #abd373;
  }
`;

export const FormList = styled.div`
  margin-bottom: 10px;
  .error {
    color: red;
  }
`;
