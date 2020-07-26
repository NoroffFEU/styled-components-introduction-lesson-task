import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import Container from "./components/layout/Container";
import Form from "./components/form/Form";
import Input from "./components/form/Input";
import Button from "./components/form/Button";
import Heading from "./components/typography/Heading";
import Paragraph from "./components/typography/Paragraph";
import Special from "./components/special/Special";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Special />
            <Container>
                <Heading>Payment details</Heading>
                <Paragraph>Fusce id libero ut orci ornare tempor sit amet at augue.</Paragraph>
                <Form>
                    <Input placeholder="Name on card" />
                    <Input placeholder="Card number" />
                    <Input placeholder="Expiry date" />
                    <Input placeholder="Security number" />
                    <Button>Pay</Button>
                </Form>
                <Paragraph withBackground>Fusce id libero ut orci ornare tempor sit amet at augue.</Paragraph>
            </Container>
        </ThemeProvider>
    );
}

export default App;
