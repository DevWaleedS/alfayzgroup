import { Navbar } from "./components";
import Hero from "./components/hero/Hero";
import TrackYourOrder from "./components/trackYourOrder/TrackYourOrder";

function App() {
	return (
		<main className='max-w-screen-2xl mx-auto'>
			<Navbar />
			<Hero />
			<TrackYourOrder />
		</main>
	);
}

export default App;
