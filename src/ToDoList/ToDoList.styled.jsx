import { styled } from "styled-components";
import { PlusCircleOutlined, DeleteOutlined } from "@ant-design/icons";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  column-gap: 20px;
  padding-bottom: 30px;
`;

export const ToDoCol = styled.div`
  max-width: 350px;
  flex: 1 1;
  button:hover {
    background-color: #2b1887;
    div {
      color: white;
    }
    span {
      color: white;
    }
  }
`;

export const DoneCol = styled.div`
  max-width: 350px;
  flex: 1 1;
`;

export const Column = styled.div`
  max-width: 350px;
  min-height: 280px;
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex: 1 1;
  border-radius: 16px;
  background: #d5ccff;
  transition: all 0.3s ease 0s;
  margin-bottom: 30px;
  cursor: pointer;
  div:hover {
    background-color: #ffff;
    span {
      opacity: 1;
    }
  }
`;

export const Task = styled.div`
  display: flex;
  padding: 24px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  align-self: stretch;
  border-radius: 12px;
  background: #f4f2ff;
`;

export const Title = styled.h2`
  color: #2b1887;
  font-family: "DM Sans";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;

export const Text = styled.div`
  color: #000;
  font-family: "DM Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 64px;
  background: #d5ccff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  div {
    font-size: 18px;
    color: #2b1887;
  }
`;

export const PlusIcon = styled(PlusCircleOutlined)`
  color: #2b1887;
  margin-right: 10px;
  font-size: 28px;
`;

export const InputTask = styled.input`
  background: #fff none repeat scroll 0 0;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  height: 42px;
  width: 100%;
  padding: 0 0 0 10px;
  color: #000;
`;

export const DeleteIcon = styled(DeleteOutlined)`
  color: red;
  margin-right: 10px;
  font-size: 20px;
  opacity: 0;
  transition: all 0.2s ease;
`;
