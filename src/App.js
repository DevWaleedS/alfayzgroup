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
import ContactUsInfo from "./components/ContactUsInfo";

function App() {
	return (
		<main className='p-0 m-0 '>
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
			<ContactUsInfo />
		</main>
	);
}

export default App;
