import {
	Navbar,
	Hero,
	TrackYourOrder,
	OurServices,
	AboutUs,
	Statistic,
	ContactUs,
	OurPartner,
	Ratings,
	Questions,
	Footer,
} from "./components";

function App() {
	return (
		<main className='max-w-screen-2xl mx-auto'>
			<Navbar />
			<Hero />
			<TrackYourOrder />
			<OurServices />
			<AboutUs />
			<Statistic />
			<ContactUs />
			<OurPartner />
			<Ratings />
			<Questions />
			<Footer />
		</main>
	);
}

export default App;
