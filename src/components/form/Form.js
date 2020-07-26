import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    max-width: 380px;
    padding: 2rem;
    width: 100%;
    background: ${(props) => props.theme.colours.elementBackground};
    border-radius: ${(props) => props.theme.borderRadius};
`;

export default Form;
