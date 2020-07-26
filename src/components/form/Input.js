import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    padding: 0.5rem;
    height: 60px;
    border-radius: ${(props) => props.theme.borderRadius};
    margin-bottom: 1rem;
    border: 1px solid ${(props) => props.theme.colours.border};
    width: 100%;
`;

function Input(props) {
    console.log(props);
    return <StyledInput placeholder={props.placeholder} />;
}

export default Input;
