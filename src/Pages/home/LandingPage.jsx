import React from 'react'
import Header from '../../Component/Home/Header'
import TrustedCompany from '../../Component/Home/TrustedCompany'
import Solution from '../../Component/Home/Solution'
import FeatuesSection from '../../Component/Home/Features'
import PrcingPlansSection from '../../Component/Home/PrcingPlansSection'
import Countup from '../../Component/Home/Countup'
import BottomBigCard from '../../Component/Home/BottomBigCard'
import Growth from '../../Component/Home/Growth'

const LandingPage = () => {
    return (
        <>
            <Header />
            <Growth />
            <TrustedCompany />
            <Solution />
            <FeatuesSection />
            <PrcingPlansSection />
            <Countup />
            <BottomBigCard />
        </>
    )
}

export default LandingPage