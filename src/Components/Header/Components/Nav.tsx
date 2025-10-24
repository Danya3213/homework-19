import {type ReactElement} from 'react'
import {NavLink} from "@Components/Header/Components/NavLink";

export const Nav = (): ReactElement => {

    const links: string[] = [
        "Головна",
        "Про Нас",
        "Майстри",
        "Наші послуги",
    ]

    return (
        <nav className={"flex gap-7"}>
            {links.map((link: string, key: number) => {

                return <NavLink key={key} children={link} />
            })}
        </nav>
    );
};