import { Navbar } from "./components";
import AboutUs from "./components/aboutUs/AboutUs";
import Hero from "./components/hero/Hero";
import OurServices from "./components/ourServices/OurServices";
import Statistic from "./components/statistic/Statistic";
import TrackYourOrder from "./components/trackYourOrder/TrackYourOrder";

function App() {
	return (
		<main className='max-w-screen-2xl mx-auto'>
			<Navbar />
			<Hero />
			<TrackYourOrder />
			<OurServices />
			<AboutUs />
			<Statistic />
		</main>
	);
}

export default App;
