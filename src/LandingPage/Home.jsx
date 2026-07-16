import Header from './Header.jsx'
import Doners from './Doners.jsx'
import AboutSection from './AboutSection.jsx'
import CallToActionSection from './CallToActionSection.jsx'
// import RequestProcess from './RequestProcess.jsx'
// import SmartMatchingSection from './SmartMatchingSection.jsx'
import WhyChooseSection from './WhyChooseSection.jsx'
import WorkflowSection from './WorkflowSection.jsx'
import Requester from './Requester.jsx'
import ScrollToTop from '../components/ScrollToTop.jsx'

const Home = () => {
  return (
    <div>
      <Header />
      <Doners />
      <Requester/>
      <AboutSection />
      <CallToActionSection />
      {/* <SmartMatchingSection /> */}
      <WhyChooseSection />
      {/* <RequestProcess /> */}
      <WorkflowSection />
      <ScrollToTop />
    </div>
  )
}

export default Home
