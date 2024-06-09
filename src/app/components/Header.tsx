"use client";
import React from "react";
import { Spacer } from "@/app/components/Spacer";
import Link from "next/link";

export function Header() {
	const routes = [
		{ title: "Home", path: "/" },
		{ title: "Test1", path: "/test1" },
	]

	return (
		<header>
			<h1 className={"text-3xl"}>R.Lab</h1>
			<nav>
				<Spacer />
				<ul className={"flex flex-row text-2xl"}>
					{routes.map((route) => (
						<li key={route.path}>
							<Link href={route.path}>{route.title}</Link> &nbsp;&nbsp;
						</li>
					))}
				</ul>
			</nav>
			<Spacer />
		</header>
	)
}
