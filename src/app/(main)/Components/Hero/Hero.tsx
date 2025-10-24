import {type ReactElement} from 'react'
import {Container} from "@Components/Container/Container";
import {Background} from "./Components/Background";
import {Title} from "./Components/Title";
import {Button} from "./Components/Button";
import {Number} from "./Components/Number";
import {TopTitle} from "./Components/TopTitle";
import {BottomTitle} from "./Components/BottomTitle";

export const Hero = (): ReactElement => {

    return (
        <section className={"bg-[url(/backgrounds/hero.jpg)] bg-cover bg-center relative"}>
            <Background/>
            <Container className={"pt-25 pb-90 relative"}>
                <TopTitle/>
                <Title/>
                <Button/>
                <div className={"absolute left-0 bottom-12.5 flex justify-between w-full"}>
                    <Number/>
                    <BottomTitle/>
                </div>
            </Container>
        </section>
    );
};