"use client";
import React from "react";

interface SpacerProps {
	className?: string;
}

export function Spacer({ ...props }) {
	return (
		<div className={"m-4"}  {...props} />
	);
}
