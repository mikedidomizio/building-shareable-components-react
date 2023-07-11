import {ReactNode} from "react";

export const Header = ({children}: {children: ReactNode}) => {
    return <div className="bg-blue-500">{children}</div>
}
