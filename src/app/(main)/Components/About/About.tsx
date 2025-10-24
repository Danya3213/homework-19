import {type ReactElement} from 'react'
import {Container} from "@Components/Container/Container";
import {Title} from "./Components/Title";
import {Text} from "./Components/Text";
import {FeedbackList} from "./Components/FeedbackList";
import Image from "next/image";

export const About = (): ReactElement => {

    return (
        <section>
            <Container>
                <div>
                    <Title/>
                    <Text/>
                    <Image src={"/images/aboutLeft.jpg"} alt={""}/>
                </div>
                <div>
                    <Image src={"/images/aboutRight.jpg"} alt={""}/>
                    <FeedbackList/>
                </div>
            </Container>
        </section>
    );
};