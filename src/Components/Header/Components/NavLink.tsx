import {type PropsWithChildren, type ReactElement} from 'react'

export const NavLink = ({children}: PropsWithChildren): ReactElement => {

    return <h5 className={"text-xs font-inter cursor-pointer select-none p-3"}>{children}</h5>
};