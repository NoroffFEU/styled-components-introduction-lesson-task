import styled from "styled-components";

const Button = styled.button`
    color: white;
    background-color: ${(props) => props.theme.colours.primary};
    box-shadow: ${(props) => props.theme.colours.shadow};
    height: 72px;
    border-radius: 10px;
    border: none;
    width: 100%;
`;

export default Button;
