import {type PropsWithChildren, type ReactElement} from 'react'

export const Container = ({children, className = ""}: PropsWithChildren<{
    className?: string
}>): ReactElement => {

    return (
        <div className={`px-5 max-w-320.5 mx-auto w-full ${className}`}>
            {children}
        </div>
    );
};