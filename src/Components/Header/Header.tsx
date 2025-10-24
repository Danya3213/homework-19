import {type ReactElement} from 'react'
import {Container} from "@Components/Container/Container";
import {Logo} from "./Components/Logo";
import {Nav} from "./Components/Nav";
import {Button} from "./Components/Button";

export const Header = (): ReactElement => {

    return (
        <header>
            <Container className={"flex items-center justify-between py-6.75"}>
                <Logo/>
                <div className={"flex items-center gap-31.25"}>
                    <Nav/>
                    <Button/>
                </div>
            </Container>
        </header>
    );
};