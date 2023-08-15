import SectionPrincipal from './Section-Principal'
import SectionServices from './Section-Services'
import SectionPartners from './Section-Partners'
import SectionTechnologies from './Section-Technologies'
import SectionCostumers from './Section-Costumers'
import './home.css'

const Home = () => {
  return (
    <>
      <SectionPrincipal />
      <SectionServices />
      <SectionPartners />
      <SectionTechnologies />
      <SectionCostumers />
    </>
  )
}
export default Home
