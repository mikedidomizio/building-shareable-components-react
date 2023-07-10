import {ReactNode} from "react";

export const Header = ({children}: {children: ReactNode}) => {
    return <div className="bg-blue-500 h-[50px]">{children}</div>
}
