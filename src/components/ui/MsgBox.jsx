import React from "react";

export const MsgBox = ({ mode, message }) => {
	return <div className={`alert alert-${mode} mt-4`}>{message}</div>;
};
