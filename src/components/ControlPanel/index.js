import React from "react";
import { useDrum } from "../../context/DrumContext";

import style from "./ControlPanel.module.css";

const ControlPanel = () => {
	const { bank, setBank, power, setPower, volume, setVolume } = useDrum();
	const powerHandler = () => {
		setPower((prevState) => !prevState);
	};
	const bankHandler = () => {
		setBank(bank === "Heater Kit" ? "Smooth Piano Kit" : "Heater Kit");
	};

	return (
		<div className={style.controlPanel}>
			<div className={style.on_off_controllers}>
				<div className={style.left}>
					<p className={style.powerText}>Power</p>
					<div onClick={powerHandler} className={style.power}>
						<div style={{ float: power ? "right" : "left" }}></div>
					</div>
				</div>
				<div className={style.right}>
					<p className={style.bankText}>{bank}</p>
					<div onClick={bankHandler} className={style.bank}>
						<div
							style={{ float: bank === "Heater Kit" ? "left" : "right" }}
						></div>
					</div>
				</div>
			</div>

			<input
				className={style.volume}
				type="range"
				min="0"
				max="100"
				step="1"
				value={volume}
				onChange={(e) => setVolume(e.target.value)}
			/>
		</div>
	);
};

export default ControlPanel;
