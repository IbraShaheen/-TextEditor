import styled from "styled-components";

export const TextArea = styled.textarea`
  font-weight: ${(props) => props.fontWeight};
  font-style: ${(props) => props.fontStyle};
  text-decoration-line: ${(props) => props.ul};

  color: ${(props) => props.c1};
  color: ${(props) => props.c2};
  color: ${(props) => props.c3};
  color: ${(props) => props.c4};
  color: ${(props) => props.c5};

  box-shadow: 10px 10px 40px black;
`;

export const Button = styled.button`
  width: 120px;
  height: 60px;
  cursor: pointer;
  color: white;

  /* &:hover {
    background-color: black;
    color: white;
    transition: 0.2s all;
  } */
`;

