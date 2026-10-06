import {createFileRoute} from '@tanstack/react-router'
import {PageHeading,TextLink,ContactBanner} from '@/components/aura-site'
import {DesignPreview} from '@/components/design-preview'
import {pageHead} from '@/lib/aura-data'
export const Route=createFileRoute('/studio')({head:()=>pageHead('Interactive Design Preview','Explore prepared room inspiration, styles, palettes and materials in AuraNest’s interactive design preview.','/studio'),component:Studio})
function Studio(){return <main><PageHeading label="The design studio" title="Interactive Design Preview" description="Find the feeling of your future space. Explore a curated collection of rooms, styles and material palettes."/><section className="wrap pb-20"><DesignPreview/><div className="mt-12"><TextLink to="/materials">Explore the material library</TextLink></div></section><ContactBanner/></main>}
