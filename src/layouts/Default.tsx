import { Outlet } from "react-router-dom";
import { AsideLeft } from "../components/AsideLeft";

export function Default(){
    return(
        <div className="layout">
            <AsideLeft/>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    )
}