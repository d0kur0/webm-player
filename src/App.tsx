import { Navigate, Route, Routes } from "@solidjs/router";

import { BySchema } from "./pages/BySchema";
import { Settings } from "./pages/Settings";
import { Shuffle } from "./pages/Shuffle";
import { Thread } from "./pages/Thread";
import { Threads } from "./pages/Threads";

import { AppBar } from "./components/AppBar";

const App = () => {
	return (
		<>
			<AppBar />
			<Routes>
				<Route path="/shuffle" element={Shuffle} />
				<Route path="/thread" component={Thread} />
				<Route path="/threads" component={Threads} />
				<Route path="/bySchema" component={BySchema} />
				<Route path="/settings" component={Settings} />
				<Route path="/" element={<Navigate href="/shuffle" />} />
			</Routes>
		</>
	);
};

export default App;
