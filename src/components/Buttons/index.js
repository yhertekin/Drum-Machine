import React from "react";
import Button from "../Button";

import { useDrum } from "../../context/DrumContext";

import style from "./Buttons.module.css";

const Buttons = () => {
	const { soundList } = useDrum();

	return (
		<div className={style.buttons}>
			{soundList.map((item, key) => (
				<Button sound={item} key={key}></Button>
			))}
		</div>
	);
};

export default Buttons;
