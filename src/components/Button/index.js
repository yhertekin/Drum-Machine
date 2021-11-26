import React from "react";
import { useDrum } from "../../context/DrumContext";

import style from "./Button.module.css";

const Button = ({ sound }) => {
	const { volume, power } = useDrum();
	const audio = new Audio(sound.url);
	audio.volume = volume / 100;
	const play = () => audio.play();

	const buttonHandler = () => {
		if (power) {
			play();
		}
	};
	return <button onClick={buttonHandler}></button>;
};

export default Button;
