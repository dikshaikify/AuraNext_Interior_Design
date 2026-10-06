import {createFileRoute,Link} from '@tanstack/react-router'
import {PageHeading,ContactBanner} from '@/components/aura-site'
import {articles,pageHead} from '@/lib/aura-data'
import {ArrowUpRight} from 'lucide-react'
export const Route=createFileRoute('/blog/')({head:()=>pageHead('The Journal','Ideas and inspiration from AuraNest on considered interiors, natural materials and living well.','/blog'),component:Journal})
function Journal(){return <main><PageHeading label="The journal" title="Notes on beautiful living." description="Perspectives, inspiration and little discoveries from the world of interiors."/><section className="wrap pb-20"><div className="project-grid">{articles.map(a=><Link key={a.slug} to="/blog/$slug" params={{slug:a.slug}} className="project-card"><div className="image-frame"><img src={a.image} alt={a.title} width={1536} height={1024} loading="lazy"/></div><p className="eyebrow mt-5">{a.category} / 5 min read</p><div className="project-info pt-0"><h3>{a.title}</h3><ArrowUpRight/></div><p>{a.summary}</p></Link>)}</div></section><ContactBanner/></main>}
