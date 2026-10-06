import living from '@/assets/living.jpg'
import dining from '@/assets/dining.jpg'
import bedroom from '@/assets/bedroom.jpg'
import darkRoom from '@/assets/dark-room.jpg'
export const images = { living, dining, bedroom, darkRoom }
export const projects = [
 {slug:'ivory-residence',name:'The Ivory Residence',city:'Bangalore',category:'Residential',style:'Modern Minimalism',area:'3,200 sq.ft.',image:living,description:'An airy family residence where sculptural forms, natural light and a quiet material palette create room to breathe.'},
 {slug:'casa-verde',name:'Casa Verde',city:'Mumbai',category:'Residential',style:'Contemporary Luxury',area:'6,800 sq.ft.',image:dining,description:'A nature-inspired villa, thoughtfully layered with warm wood, handcrafted details and spaces for gathering.'},
 {slug:'noir-apartment',name:'The Noir Apartment',city:'Hyderabad',category:'Renovation',style:'Modern Luxury',area:'2,100 sq.ft.',image:darkRoom,description:'Deep greens, expressive stone and bespoke walnut joinery bring a quietly dramatic identity to this city home.'},
 {slug:'terra-house',name:'Terra House',city:'Goa',category:'Residential',style:'Organic Modernism',area:'4,500 sq.ft.',image:bedroom,description:'A gentle retreat grounded in earthy textures, soft linen and the changing light of the coast.'},
 {slug:'atelier-workspace',name:'Atelier Workspace',city:'Bangalore',category:'Commercial',style:'Japandi',area:'5,200 sq.ft.',image:dining,description:'A considered creative workspace that balances shared connection with calm, focused corners.'},
 {slug:'courtyard-home',name:'The Courtyard Home',city:'Pune',category:'Renovation',style:'Contemporary Indian',area:'3,800 sq.ft.',image:living,description:'A contemporary interpretation of the courtyard home, designed around light, landscape and everyday rituals.'},
]
export const articles = [
 {slug:'quiet-luxury',title:'The art of quiet luxury',category:'Design perspectives',image:living,summary:'Why the most beautiful rooms never need to shout.',body:'Quiet luxury is not a particular colour or a costly finish. It is the feeling of a space that has been considered, from the way daylight lands on a wall to the comfort of a favourite chair.'},
 {slug:'natural-materials',title:'Materials that age beautifully',category:'Materials & craft',image:dining,summary:'A closer look at wood, stone and the beauty of imperfection.',body:'Natural materials carry a story. Wood becomes richer, stone develops a patina, and linen softens with time. Choosing a material is as much about how it feels as how it looks.'},
 {slug:'restful-bedroom',title:'A slower kind of sanctuary',category:'Living well',image:bedroom,summary:'Designing a bedroom that makes space for rest.',body:'Restful spaces start with restraint. A soft palette, layers of tactile fabrics, gentle lighting and thoughtfully placed storage allow the room to feel uncomplicated.'},
]
export const rates = {Standard:1500,Premium:2500,Luxury:4000}
export type Quality = keyof typeof rates
export function estimateBudget(area:number, quality:Quality, multiplier=1){return Math.max(0, area) * rates[quality] * multiplier}
export const rupees = (amount:number) => '₹' + new Intl.NumberFormat('en-IN',{maximumFractionDigits:0}).format(amount)
export function pageHead(title:string,description:string,path:string){ return {meta:[{title:`${title} — AuraNest Interiors`},{name:'description',content:description},{property:'og:title',content:`${title} — AuraNest Interiors`},{property:'og:description',content:description},{property:'og:type',content:'website'},{property:'og:url',content:path},{name:'twitter:card',content:'summary_large_image'}],links:[{rel:'canonical',href:path}]} }
