import React from 'react'
import Header from './Header.jsx'
import Doners from './Doners.jsx'
import AboutSection from './AboutSection.jsx'
import CallToActionSection from './CallToActionSection.jsx'
import RequestProcess from './RequestProcess.jsx'
import SmartMatchingSection from './SmartMatchingSection.jsx'
import WhyChooseSection from './WhyChooseSection.jsx'
import WorkflowSection from './WorkflowSection.jsx'

const Home = () => {
  return (
    <div>
      <Header />
      <Doners />
      <AboutSection />
      <CallToActionSection />
      <SmartMatchingSection />
      <WhyChooseSection />
      <RequestProcess />
      <WorkflowSection />
    </div>
  )
}

export default Home