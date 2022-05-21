import React from "react";
import { MsgBox } from "./MsgBox";

export const Empty = ({ searchText }) => {
	return (
		<MsgBox
			mode={"danger"}
			message={`No hay usuarios con el patron de busqueda: ${searchText}`}
		/>
	);
};
