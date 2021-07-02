import { render } from "react-dom";
import { StrictMode } from "react";
import Container from "./components/Container";

render(
    <StrictMode>
        <Container />
    </StrictMode>,
    document.getElementById('root')
)