import { Footer, Navbar } from '../components';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  WhatsNew,
} from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden overflow-x-hidden ">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-03 z-0" />
      <WhatsNew />
    </div>
    <div>
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
