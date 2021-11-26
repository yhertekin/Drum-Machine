import { createContext, useContext, useEffect, useState } from "react";

import data from "../data/audio.json";
const DrumContext = createContext();

export const DrumProvider = ({ children }) => {
	const [power, setPower] = useState(true);
	const [bank, setBank] = useState("Heater Kit");
	const [soundList, setSoundList] = useState(data[bank]);
	const [volume, setVolume] = useState(50);

	useEffect(() => {
		setSoundList(data[bank]);
	}, [bank]);

	const values = {
		power,
		setPower,
		bank,
		setBank,
		soundList,
		setSoundList,
		volume,
		setVolume,
	};

	return <DrumContext.Provider value={values}>{children}</DrumContext.Provider>;
};

export const useDrum = () => useContext(DrumContext);
