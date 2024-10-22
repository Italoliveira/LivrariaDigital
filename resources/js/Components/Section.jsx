import {Children} from "react";
import { Menu } from "@mui/icons-material";

export default function Section(props, {Children}){

    const {name} = props

    return (
        <section>
            <div className="flex justify-start items-center space-x-2 mx-2">
                <Menu fontSize="large" style={{ fill: "black" }} />
                <span className="text-2xl font-impact text-slate-900">
                    {name ?? ""}
                </span>
            </div>
            <div>
                {Children}
            </div>
        </section>
    );
};