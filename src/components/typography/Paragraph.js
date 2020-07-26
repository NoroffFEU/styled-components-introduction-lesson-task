import styled from "styled-components";

const Paragraph = styled.p`
    color: ${(props) => props.theme.colours.text};
    background: ${(props) => (props.withBackground ? props.theme.colours.elementBackground : "none")};
    padding: ${(props) => (props.withBackground ? "1rem" : "0")};
    border-radius: ${(props) => props.theme.borderRadius};
`;

export default Paragraph;
