import {createFileRoute} from '@tanstack/react-router'
import {PageHeading,ServicesSection,ContactBanner} from '@/components/aura-site'
import {BudgetCalculator} from '@/components/budget-calculator'
import {pageHead} from '@/lib/aura-data'
export const Route=createFileRoute('/services')({head:()=>pageHead('Interior Design Services','Explore residential interiors, commercial spaces, turnkey renovations and a transparent demo budget estimator.','/services'),component:Services})
function Services(){return <main><PageHeading label="Our expertise" title="From possibility to place." description="A holistic approach to interiors, tailored to the scale of your space and the rhythm of your life."/><ServicesSection/><BudgetCalculator/><ContactBanner/></main>}
