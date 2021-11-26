import React from "react";

import Buttons from "./components/Buttons";
import ControlPanel from "./components/ControlPanel";
import { DrumProvider } from "./context/DrumContext";

import style from "./App.module.css";

const App = () => {
	return (
		<DrumProvider>
			<div className={style.main}>
				<Buttons />
				<ControlPanel />
			</div>
		</DrumProvider>
	);
};

export default App;
