import * as React from 'react';
import SectionPrincipal from './Section-Principal'
import SectionServices from './Section-Services'
import SectionPartners from './Section-Partners'
import SectionAwards from './Section-Awards'
import SectionTechnologies from './Section-Technologies'
import SectionCostumers from './Section-Costumers'
import SectionResellers from './Section-Resellers'
import SectionWorkus from './Section-WorkUs'
import './home.css'

const Home = () => {
    
    return (
        <>
            <SectionPrincipal />
            <SectionServices />
            <SectionPartners />
            <SectionAwards />
            <SectionTechnologies />
            <SectionCostumers />
            <SectionResellers />
            <SectionWorkus />
        </>
    )
}
export default Home;