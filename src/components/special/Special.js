import styled from "styled-components";

const Special = styled.div`
    background: ${(props) => props.theme.colours.accent};
    border: 3px solid white;
    border-radius: 100%;
    height: 80px;
    width: 80px;
    box-shadow: ${(props) => props.theme.colours.shadow};
    position: absolute;
    right: 10px;
    bottom: 10px;

    @media (min-width: ${(props) => props.theme.widths.small}) {
        bottom: auto;
        top: 10px;
    }

    @media (min-width: ${(props) => props.theme.widths.medium}) {
        height: 119px;
        width: 119px;
    }

    &:before {
        content: "SPECIAL";
        color: white;
        transform: rotate(45deg);
        display: flex;
        justify-content: center;
        margin-top: 40%;
        font-size: 0.8rem;

        @media (min-width: ${(props) => props.theme.widths.medium}) {
            font-size: 1rem;
        }
    }
`;

export default Special;
