import {describe,it,expect} from 'vitest'
import {estimateBudget} from '../lib/aura-data'
describe('demo budget rates',()=>{
 it('uses Standard ₹1,500 per sq.ft.',()=>expect(estimateBudget(100,'Standard')).toBe(150000))
 it('uses Premium ₹2,500 per sq.ft.',()=>expect(estimateBudget(100,'Premium')).toBe(250000))
 it('uses Luxury ₹4,000 per sq.ft.',()=>expect(estimateBudget(100,'Luxury')).toBe(400000))
 it('multiplies area, base rate and quality multiplier',()=>expect(estimateBudget(200,'Premium',1.2)).toBe(600000))
})
