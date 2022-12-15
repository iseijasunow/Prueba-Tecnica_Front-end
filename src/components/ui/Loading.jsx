import React from "react";
import { MsgBox } from "./MsgBox";

export const Loading = () => {
	return <MsgBox mode={"info"} message={"Buscando usuarios"} />;
};
