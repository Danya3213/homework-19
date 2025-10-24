import {type PropsWithChildren, type ReactElement} from 'react'

export const P = ({children, fontFamily = "font-inter"}: PropsWithChildren<{
    fontFamily?: "font-unbounded" | "font-inter";
}>): ReactElement => {

    return (
        <p className={`${fontFamily} text-xs text-black`}>
            {children}
        </p>
    );
};