import styled from "styled-components";

export const InputContainer = styled.div`
  border: solid 1px green;
  border-radius: 15px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 1rem;

  input {
    background-color: #eed6bd;

    color: #0a0a0a;
    border: none;
    border-radius: 50px;
    margin-bottom: 5px;
    height: 2.5rem;
  }

  button {
    background-color: #695c4f;
    border: transparent 1px solid;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    height: 2.5rem;
    width: 5rem;

    margin-bottom: 5px;
    color: whitesmoke;
  }
`;

export const TaskListContainer = styled.div`
  background-color: #eed6bd;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  // text-align: left;
  padding: 1rem;
  width: 50%;

  label {
    vertical-align: middle;
  }

  ul,
  input {
    text-align: left;
    list-style-type: none;
    border: solid orange 1px;
    vertical-align: middle;
  }

  li button {
    background-color: #4e4e4e;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    padding: 5px 10px;
    margin: 5px;
    color: whitesmoke;
    &:hover {
      background-color: rgba(0, 136, 169, 0.8);
    }
  }
`;

export const TaskListLine = styled.div`
  // padding: 0.25rem;
`;

export const Title = styled.span`
  text-decoration: ${(props) => (props.isCompleted ? "line-through " : "none")};
`;
