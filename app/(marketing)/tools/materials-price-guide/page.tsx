'use client'
import { useState, useMemo } from 'react'
import { Search, ShoppingCart, Plus, Minus, X, Copy, Download, ChevronDown, ChevronUp, Star, Package } from 'lucide-react'

type Supplier = { name: string; price: number }

type Product = {
  id: string
  name: string
  category: string
  phase: number
  unit: string
  description: string
  popular?: boolean
  prices: Supplier[]
}

const SUPPLIERS = ['Travis Perkins', 'Wickes', 'Screwfix', 'Toolstation', 'B&Q', 'Jewson', 'Selco']

const PRODUCTS: Product[] = [
  // Phase 1 — Substructure
  { id: 'p1-1', name: 'Portland Cement 25kg', category: 'cement', phase: 1, unit: 'bag', description: 'General purpose OPC cement for foundations and structural work', popular: true, prices: [{ name: 'Travis Perkins', price: 8.50 }, { name: 'Jewson', price: 8.20 }, { name: 'Selco', price: 7.95 }, { name: 'B&Q', price: 9.00 }] },
  { id: 'p1-2', name: 'Sharp Sand Bulk Bag (800kg)', category: 'cement', phase: 1, unit: 'bag', description: 'Coarse washed sharp sand for concrete and mortar mixes', prices: [{ name: 'Travis Perkins', price: 49.00 }, { name: 'Jewson', price: 47.50 }, { name: 'Selco', price: 45.00 }] },
  { id: 'p1-3', name: '20mm Gravel Bulk Bag (800kg)', category: 'groundworks', phase: 1, unit: 'bag', description: 'Rounded pea gravel for concrete mixes and drainage', prices: [{ name: 'Travis Perkins', price: 52.00 }, { name: 'Jewson', price: 50.00 }, { name: 'Selco', price: 48.50 }] },
  { id: 'p1-4', name: 'MOT Type 1 Hardcore Bulk Bag', category: 'groundworks', phase: 1, unit: 'bag', description: 'Compactable sub-base material for driveways and foundations', popular: true, prices: [{ name: 'Travis Perkins', price: 58.00 }, { name: 'Jewson', price: 56.00 }, { name: 'Selco', price: 54.00 }] },
  { id: 'p1-5', name: 'DPC Membrane 300mm x 30m', category: 'dpc', phase: 1, unit: 'roll', description: 'Polythene damp proof course for brickwork and blockwork', popular: true, prices: [{ name: 'Travis Perkins', price: 12.50 }, { name: 'Wickes', price: 11.99 }, { name: 'Screwfix', price: 10.99 }, { name: 'Toolstation', price: 10.50 }] },
  { id: 'p1-6', name: 'Rebar 10mm x 6m', category: 'groundworks', phase: 1, unit: 'bar', description: 'High tensile steel reinforcement bar for concrete slabs', prices: [{ name: 'Travis Perkins', price: 8.50 }, { name: 'Jewson', price: 8.25 }, { name: 'Selco', price: 7.80 }] },
  { id: 'p1-7', name: 'A142 Steel Mesh 4.8m x 2.4m', category: 'groundworks', phase: 1, unit: 'sheet', description: 'Welded steel fabric reinforcement for ground floor slabs', prices: [{ name: 'Travis Perkins', price: 28.50 }, { name: 'Jewson', price: 27.00 }, { name: 'Selco', price: 26.50 }] },
  { id: 'p1-8', name: '110mm Underground Drainage Pipe 3m', category: 'drainage', phase: 1, unit: 'length', description: 'UPVC underground drainage pipe for foul water systems', popular: true, prices: [{ name: 'Travis Perkins', price: 14.50 }, { name: 'Wickes', price: 13.99 }, { name: 'Screwfix', price: 13.50 }, { name: 'Toolstation', price: 12.99 }, { name: 'B&Q', price: 14.99 }] },
  // Phase 2 — Superstructure
  { id: 'p2-1', name: 'Common Brick (per 100)', category: 'bricks', phase: 2, unit: '100', description: 'Standard clay commons for general brickwork', popular: true, prices: [{ name: 'Travis Perkins', price: 62.00 }, { name: 'Jewson', price: 59.00 }, { name: 'Selco', price: 57.00 }] },
  { id: 'p2-2', name: 'London Stock Facing Brick (per 100)', category: 'bricks', phase: 2, unit: '100', description: 'Yellow London stock for visible external brickwork', prices: [{ name: 'Travis Perkins', price: 115.00 }, { name: 'Jewson', price: 110.00 }, { name: 'Selco', price: 108.00 }] },
  { id: 'p2-3', name: '100mm Thermalite Block (per 10)', category: 'bricks', phase: 2, unit: '10', description: 'Lightweight aerated concrete block for thermal efficiency', popular: true, prices: [{ name: 'Travis Perkins', price: 42.00 }, { name: 'Wickes', price: 39.99 }, { name: 'B&Q', price: 41.50 }, { name: 'Jewson', price: 40.00 }] },
  { id: 'p2-4', name: '140mm Dense Concrete Block (per 10)', category: 'bricks', phase: 2, unit: '10', description: 'Solid dense block for load-bearing inner leaf construction', prices: [{ name: 'Travis Perkins', price: 32.00 }, { name: 'Jewson', price: 30.50 }, { name: 'Selco', price: 29.00 }] },
  { id: 'p2-5', name: 'Catnic Steel Lintel CN71A 900mm', category: 'lintels', phase: 2, unit: 'each', description: 'Cavity wall steel lintel for window/door openings', popular: true, prices: [{ name: 'Travis Perkins', price: 18.50 }, { name: 'Wickes', price: 17.99 }, { name: 'Screwfix', price: 17.50 }, { name: 'B&Q', price: 19.50 }, { name: 'Jewson', price: 18.00 }] },
  { id: 'p2-6', name: 'Catnic Steel Lintel 1800mm', category: 'lintels', phase: 2, unit: 'each', description: 'Extended cavity wall lintel for wider openings', prices: [{ name: 'Travis Perkins', price: 38.50 }, { name: 'Wickes', price: 36.99 }, { name: 'Screwfix', price: 35.99 }, { name: 'Jewson', price: 37.00 }] },
  { id: 'p2-7', name: 'Wall Ties (per 250)', category: 'fixings', phase: 2, unit: '250pk', description: 'Stainless steel butterfly cavity wall ties', prices: [{ name: 'Screwfix', price: 12.99 }, { name: 'Toolstation', price: 11.99 }, { name: 'Travis Perkins', price: 13.50 }] },
  { id: 'p2-8', name: '4x2 CLS Timber 4.8m', category: 'timber', phase: 2, unit: 'length', description: 'Regularised C16 carcassing timber for stud work and framing', popular: true, prices: [{ name: 'Travis Perkins', price: 8.50 }, { name: 'Wickes', price: 8.25 }, { name: 'B&Q', price: 8.99 }, { name: 'Jewson', price: 8.30 }, { name: 'Selco', price: 7.95 }] },
  { id: 'p2-9', name: '3x2 CLS Timber 4.8m', category: 'timber', phase: 2, unit: 'length', description: 'Regularised C16 carcassing for internal partition studwork', popular: true, prices: [{ name: 'Travis Perkins', price: 6.20 }, { name: 'Wickes', price: 5.99 }, { name: 'B&Q', price: 6.50 }, { name: 'Jewson', price: 6.10 }, { name: 'Selco', price: 5.85 }] },
  // Phase 3 — External Envelope
  { id: 'p3-1', name: 'Plain Roof Tile (per 100)', category: 'roofing', phase: 3, unit: '100', description: 'Machine-made concrete plain tiles for pitched roofs', prices: [{ name: 'Travis Perkins', price: 85.00 }, { name: 'Jewson', price: 82.00 }, { name: 'Selco', price: 79.00 }] },
  { id: 'p3-2', name: 'Breathable Roof Membrane 1m x 50m', category: 'roofing', phase: 3, unit: 'roll', description: 'Vapour-permeable underlay for all pitched roof types', popular: true, prices: [{ name: 'Travis Perkins', price: 42.00 }, { name: 'Wickes', price: 38.99 }, { name: 'Screwfix', price: 36.99 }, { name: 'Toolstation', price: 35.99 }] },
  { id: 'p3-3', name: '25x50mm Treated Batten 3.6m', category: 'roofing', phase: 3, unit: 'length', description: 'Preservative-treated softwood tiling batten', prices: [{ name: 'Travis Perkins', price: 2.85 }, { name: 'Wickes', price: 2.65 }, { name: 'B&Q', price: 2.75 }, { name: 'Jewson', price: 2.70 }] },
  { id: 'p3-4', name: 'uPVC Fascia Board 200mm x 5m', category: 'rainwater', phase: 3, unit: 'length', description: 'White uPVC fascia board for eaves finishing', prices: [{ name: 'Travis Perkins', price: 18.50 }, { name: 'Wickes', price: 16.99 }, { name: 'B&Q', price: 17.50 }, { name: 'Screwfix', price: 15.99 }] },
  { id: 'p3-5', name: 'uPVC Gutter 4m Half Round', category: 'rainwater', phase: 3, unit: 'length', description: '112mm half-round white uPVC guttering section', popular: true, prices: [{ name: 'Travis Perkins', price: 9.50 }, { name: 'Wickes', price: 8.99 }, { name: 'B&Q', price: 9.25 }, { name: 'Screwfix', price: 7.99 }, { name: 'Toolstation', price: 7.75 }] },
  { id: 'p3-6', name: 'uPVC Downpipe 68mm x 4m', category: 'rainwater', phase: 3, unit: 'length', description: 'Round white uPVC downpipe for rainwater disposal', prices: [{ name: 'Travis Perkins', price: 8.50 }, { name: 'Wickes', price: 7.99 }, { name: 'B&Q', price: 8.25 }, { name: 'Screwfix', price: 6.99 }] },
  // Phase 4 — Internal Construction
  { id: 'p4-1', name: 'Joist Hanger 50x200mm', category: 'fixings', phase: 4, unit: 'each', description: 'Galvanised steel joist hanger for timber floor and ceiling joists', prices: [{ name: 'Screwfix', price: 2.15 }, { name: 'Toolstation', price: 1.99 }, { name: 'Travis Perkins', price: 2.50 }, { name: 'B&Q', price: 2.35 }] },
  { id: 'p4-2', name: 'Framing Bracket (per 50)', category: 'fixings', phase: 4, unit: '50pk', description: 'Multi-purpose galvanised structural framing brackets', prices: [{ name: 'Screwfix', price: 14.99 }, { name: 'Toolstation', price: 13.99 }, { name: 'Travis Perkins', price: 16.50 }] },
  { id: 'p4-3', name: '18mm OSB3 Sheet 2400x1200mm', category: 'timber', phase: 4, unit: 'sheet', description: 'Oriented strand board for structural decking and sheathing', popular: true, prices: [{ name: 'Travis Perkins', price: 18.50 }, { name: 'Wickes', price: 17.50 }, { name: 'B&Q', price: 18.99 }, { name: 'Jewson', price: 17.80 }, { name: 'Selco', price: 16.99 }] },
  { id: 'p4-4', name: '12mm Plywood Sheet 2400x1200mm', category: 'timber', phase: 4, unit: 'sheet', description: 'Structural softwood plywood for general construction use', prices: [{ name: 'Travis Perkins', price: 22.00 }, { name: 'B&Q', price: 21.50 }, { name: 'Jewson', price: 21.00 }, { name: 'Selco', price: 20.50 }] },
  // Phase 5 — Insulation
  { id: 'p5-1', name: 'Celotex GA4100 100mm PIR Insulation', category: 'insulation', phase: 5, unit: 'sheet', description: 'High performance rigid foam board for roofs and floors', popular: true, prices: [{ name: 'Travis Perkins', price: 38.50 }, { name: 'Wickes', price: 35.99 }, { name: 'B&Q', price: 37.50 }, { name: 'Jewson', price: 36.50 }, { name: 'Selco', price: 35.00 }] },
  { id: 'p5-2', name: 'Celotex GA4050 50mm PIR Insulation', category: 'insulation', phase: 5, unit: 'sheet', description: '50mm rigid board for cavity and floor insulation', prices: [{ name: 'Travis Perkins', price: 21.00 }, { name: 'Wickes', price: 19.99 }, { name: 'B&Q', price: 20.50 }, { name: 'Jewson', price: 20.00 }] },
  { id: 'p5-3', name: 'Rockwool RWA45 100mm Slab', category: 'insulation', phase: 5, unit: 'pack', description: 'Mineral wool acoustic and thermal insulation for party walls', popular: true, prices: [{ name: 'Travis Perkins', price: 28.00 }, { name: 'Wickes', price: 25.99 }, { name: 'B&Q', price: 27.50 }, { name: 'Screwfix', price: 24.99 }, { name: 'Toolstation', price: 24.50 }] },
  { id: 'p5-4', name: 'Earthwool Loft Roll 200mm 8.37m²', category: 'insulation', phase: 5, unit: 'roll', description: 'Glass mineral wool loft roll for between and over joists', prices: [{ name: 'B&Q', price: 24.99 }, { name: 'Wickes', price: 23.99 }, { name: 'Travis Perkins', price: 26.00 }] },
  // Phase 6 — Mechanical / Plumbing
  { id: 'p6-1', name: '15mm Copper Pipe 3m', category: 'plumbing', phase: 6, unit: 'length', description: 'Type B hard drawn copper tube for domestic water supply', popular: true, prices: [{ name: 'Travis Perkins', price: 12.50 }, { name: 'Screwfix', price: 10.99 }, { name: 'Toolstation', price: 10.50 }, { name: 'B&Q', price: 11.99 }, { name: 'Wickes', price: 11.50 }] },
  { id: 'p6-2', name: '22mm Copper Pipe 3m', category: 'plumbing', phase: 6, unit: 'length', description: '22mm copper for primary heating and hot water circulation', prices: [{ name: 'Travis Perkins', price: 18.50 }, { name: 'Screwfix', price: 16.99 }, { name: 'Toolstation', price: 16.50 }, { name: 'B&Q', price: 17.99 }] },
  { id: 'p6-3', name: '22mm Compression Elbow', category: 'plumbing', phase: 6, unit: 'each', description: 'Brass compression 90° elbow fitting', prices: [{ name: 'Screwfix', price: 3.50 }, { name: 'Toolstation', price: 3.25 }, { name: 'Travis Perkins', price: 4.00 }, { name: 'B&Q', price: 3.75 }] },
  { id: 'p6-4', name: 'Double Panel Radiator 600x1200mm', category: 'heating', phase: 6, unit: 'each', description: 'Type 22 steel panel radiator for central heating system', popular: true, prices: [{ name: 'Wickes', price: 119.99 }, { name: 'B&Q', price: 124.99 }, { name: 'Travis Perkins', price: 132.00 }, { name: 'Screwfix', price: 109.99 }, { name: 'Toolstation', price: 104.99 }] },
  { id: 'p6-5', name: '32mm UPVC Soil Pipe 3m', category: 'plumbing', phase: 6, unit: 'length', description: 'Above-ground soil and waste pipe for bathrooms', prices: [{ name: 'Travis Perkins', price: 8.50 }, { name: 'Screwfix', price: 7.99 }, { name: 'Toolstation', price: 7.50 }, { name: 'B&Q', price: 8.99 }, { name: 'Wickes', price: 8.25 }] },
  // Phase 7 — Electrical
  { id: 'p7-1', name: '2.5mm Twin & Earth Cable 50m', category: 'electrical', phase: 7, unit: 'drum', description: 'PVC insulated 2 core and earth cable for ring and radial circuits', popular: true, prices: [{ name: 'Screwfix', price: 52.99 }, { name: 'Toolstation', price: 49.99 }, { name: 'Travis Perkins', price: 58.00 }, { name: 'B&Q', price: 55.99 }, { name: 'Wickes', price: 54.99 }] },
  { id: 'p7-2', name: '1.5mm Twin & Earth Cable 50m', category: 'electrical', phase: 7, unit: 'drum', description: 'For lighting circuits, small power and spurs', prices: [{ name: 'Screwfix', price: 35.99 }, { name: 'Toolstation', price: 33.99 }, { name: 'Travis Perkins', price: 38.00 }, { name: 'B&Q', price: 36.99 }] },
  { id: 'p7-3', name: 'Consumer Unit 12-way Split Load', category: 'electrical', phase: 7, unit: 'each', description: 'RCBO/RCD protected distribution board for domestic installs', popular: true, prices: [{ name: 'Screwfix', price: 89.99 }, { name: 'Toolstation', price: 84.99 }, { name: 'Travis Perkins', price: 99.00 }, { name: 'Wickes', price: 94.99 }] },
  { id: 'p7-4', name: 'Double 13A Socket Outlet White', category: 'electrical', phase: 7, unit: 'each', description: 'Twin gang unswitched socket outlet with USB ports', prices: [{ name: 'Screwfix', price: 5.99 }, { name: 'Toolstation', price: 5.49 }, { name: 'B&Q', price: 6.99 }, { name: 'Wickes', price: 6.49 }, { name: 'Travis Perkins', price: 7.50 }] },
  { id: 'p7-5', name: '20A DP Light Switch White', category: 'electrical', phase: 7, unit: 'each', description: 'Two-gang plate switch for single or twin lighting circuits', prices: [{ name: 'Screwfix', price: 2.99 }, { name: 'Toolstation', price: 2.79 }, { name: 'B&Q', price: 3.49 }, { name: 'Wickes', price: 3.25 }] },
  // Phase 8 — Internal Finishes
  { id: 'p8-1', name: '12.5mm Plasterboard 2400x1200mm', category: 'plasterboard', phase: 8, unit: 'sheet', description: 'Tapered edge gypsum plasterboard for dot-and-dab and stud walls', popular: true, prices: [{ name: 'Travis Perkins', price: 7.50 }, { name: 'Wickes', price: 6.99 }, { name: 'B&Q', price: 7.25 }, { name: 'Jewson', price: 7.10 }, { name: 'Selco', price: 6.75 }] },
  { id: 'p8-2', name: '25mm Acoustic Plasterboard 2400x1200mm', category: 'plasterboard', phase: 8, unit: 'sheet', description: 'High mass board for party walls and ceilings between floors', prices: [{ name: 'Travis Perkins', price: 18.50 }, { name: 'Wickes', price: 17.50 }, { name: 'B&Q', price: 18.00 }, { name: 'Jewson', price: 17.80 }] },
  { id: 'p8-3', name: 'Carlite Bonding Coat 12.5kg', category: 'plasterboard', phase: 8, unit: 'bag', description: 'Two-coat browning plaster for brick and block substrates', prices: [{ name: 'Travis Perkins', price: 9.50 }, { name: 'Wickes', price: 8.99 }, { name: 'B&Q', price: 9.25 }, { name: 'Jewson', price: 9.00 }, { name: 'Selco', price: 8.75 }] },
  { id: 'p8-4', name: 'Multi-Finish Plaster 25kg', category: 'plasterboard', phase: 8, unit: 'bag', description: 'Thistle multi-finish for skimming over plasterboard and bonding', popular: true, prices: [{ name: 'Travis Perkins', price: 12.50 }, { name: 'Wickes', price: 11.99 }, { name: 'B&Q', price: 12.25 }, { name: 'Jewson', price: 12.00 }, { name: 'Selco', price: 11.50 }] },
  { id: 'p8-5', name: 'Drywall Screw 3.5x50mm (500pk)', category: 'fixings', phase: 8, unit: '500pk', description: 'Self-tapping phosphate-coated drywall screws', prices: [{ name: 'Screwfix', price: 5.99 }, { name: 'Toolstation', price: 5.49 }, { name: 'Travis Perkins', price: 7.00 }, { name: 'B&Q', price: 6.49 }] },
  // Phase 9 — Second Fix & Completion
  { id: 'p9-1', name: 'Matt Emulsion Paint 10L White', category: 'paint', phase: 9, unit: 'tin', description: 'Premium interior matt emulsion for walls and ceilings', popular: true, prices: [{ name: 'B&Q', price: 24.99 }, { name: 'Wickes', price: 22.99 }, { name: 'Travis Perkins', price: 26.00 }, { name: 'Screwfix', price: 21.99 }, { name: 'Toolstation', price: 20.99 }] },
  { id: 'p9-2', name: 'Satinwood Paint 2.5L White', category: 'paint', phase: 9, unit: 'tin', description: 'Oil-based satinwood for woodwork, skirtings and doors', prices: [{ name: 'B&Q', price: 16.99 }, { name: 'Wickes', price: 15.99 }, { name: 'Screwfix', price: 14.99 }, { name: 'Toolstation', price: 14.49 }] },
  { id: 'p9-3', name: 'Laminate Flooring 8mm (per m²)', category: 'flooring', phase: 9, unit: 'm²', description: 'Click-lock AC4 rated laminate flooring for domestic use', popular: true, prices: [{ name: 'B&Q', price: 12.99 }, { name: 'Wickes', price: 11.99 }, { name: 'Travis Perkins', price: 13.50 }] },
  { id: 'p9-4', name: 'Underlay 10mm 15m² Roll', category: 'flooring', phase: 9, unit: 'roll', description: 'Combined foam and vapour barrier underlay for laminate and wood', prices: [{ name: 'B&Q', price: 18.99 }, { name: 'Wickes', price: 17.99 }, { name: 'Screwfix', price: 14.99 }, { name: 'Toolstation', price: 14.50 }] },
  { id: 'p9-5', name: 'Internal Door 78x30 White Primed', category: 'doors', phase: 9, unit: 'each', description: 'Hollow core smooth white internal door, FSC certified', popular: true, prices: [{ name: 'B&Q', price: 32.99 }, { name: 'Wickes', price: 29.99 }, { name: 'Travis Perkins', price: 35.00 }, { name: 'Screwfix', price: 27.99 }] },
  { id: 'p9-6', name: '69x19mm MDF Skirting 4.4m', category: 'doors', phase: 9, unit: 'length', description: 'Torus profile MDF skirting board primed and ready to paint', prices: [{ name: 'B&Q', price: 6.99 }, { name: 'Wickes', price: 6.49 }, { name: 'Travis Perkins', price: 7.50 }, { name: 'Screwfix', price: 5.99 }] },
  // Phase 10 — External Works
  { id: 'p10-1', name: 'Pointing Mortar 20kg Buff', category: 'cement', phase: 10, unit: 'bag', description: 'Brush-in paving grout for block paving and Indian stone', prices: [{ name: 'B&Q', price: 8.99 }, { name: 'Wickes', price: 8.50 }, { name: 'Travis Perkins', price: 9.50 }, { name: 'Screwfix', price: 7.99 }] },
  { id: 'p10-2', name: 'Permeable Block Paving (per m²)', category: 'groundworks', phase: 10, unit: 'm²', description: 'Concrete block paving for driveways, suitable for SUDS compliance', popular: true, prices: [{ name: 'B&Q', price: 18.99 }, { name: 'Wickes', price: 17.99 }, { name: 'Travis Perkins', price: 19.50 }] },
  { id: 'p10-3', name: 'Fence Post 75x75mm x 3m Treated', category: 'timber', phase: 10, unit: 'each', description: 'Pressure-treated softwood fence post', prices: [{ name: 'Travis Perkins', price: 12.50 }, { name: 'B&Q', price: 11.99 }, { name: 'Wickes', price: 11.50 }] },
]

const PHASES = [
  { id: 1, label: 'Phase 1: Substructure', short: 'Substructure' },
  { id: 2, label: 'Phase 2: Superstructure', short: 'Superstructure' },
  { id: 3, label: 'Phase 3: External Envelope', short: 'Ext Envelope' },
  { id: 4, label: 'Phase 4: Internal Construction', short: 'Internal' },
  { id: 5, label: 'Phase 5: Insulation', short: 'Insulation' },
  { id: 6, label: 'Phase 6: Mechanical', short: 'Mechanical' },
  { id: 7, label: 'Phase 7: Electrical', short: 'Electrical' },
  { id: 8, label: 'Phase 8: Finishes', short: 'Finishes' },
  { id: 9, label: 'Phase 9: Second Fix', short: '2nd Fix' },
  { id: 10, label: 'Phase 10: External Works', short: 'Ext Works' },
]

const CATEGORIES = [
  { key: 'all', label: 'All Products' },
  { key: 'cement', label: 'Cement & Aggregates' },
  { key: 'groundworks', label: 'Groundworks' },
  { key: 'dpc', label: 'DPC & Membranes' },
  { key: 'drainage', label: 'Drainage' },
  { key: 'bricks', label: 'Bricks & Blocks' },
  { key: 'lintels', label: 'Lintels & Steel' },
  { key: 'timber', label: 'Timber & Sheet' },
  { key: 'roofing', label: 'Roofing' },
  { key: 'rainwater', label: 'Rainwater' },
  { key: 'fixings', label: 'Fixings' },
  { key: 'insulation', label: 'Insulation' },
  { key: 'plumbing', label: 'Plumbing' },
  { key: 'heating', label: 'Heating' },
  { key: 'electrical', label: 'Electrical' },
  { key: 'plasterboard', label: 'Plasterboard' },
  { key: 'paint', label: 'Paint' },
  { key: 'flooring', label: 'Flooring' },
  { key: 'doors', label: 'Doors & Joinery' },
]

type CartItem = { product: Product; qty: number; supplier: string; price: number }

function getBest(product: Product) {
  return product.prices.reduce((a, b) => a.price < b.price ? a : b)
}

function getWorst(product: Product) {
  return product.prices.reduce((a, b) => a.price > b.price ? a : b)
}

export default function MaterialsPriceGuidePage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [phase, setPhase] = useState(0)
  const [popularOnly, setPopularOnly] = useState(false)
  const [cart, setCart] = useState<CartItem[]>([])
  const [showCart, setShowCart] = useState(false)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [showPhaseNav, setShowPhaseNav] = useState(true)

  const filtered = useMemo(() => {
    return PRODUCTS.filter(p => {
      if (search) {
        const q = search.toLowerCase()
        if (!p.name.toLowerCase().includes(q) && !p.description.toLowerCase().includes(q) && !p.category.toLowerCase().includes(q)) return false
      }
      if (category !== 'all' && p.category !== category) return false
      if (phase > 0 && p.phase !== phase) return false
      if (popularOnly && !p.popular) return false
      return true
    })
  }, [search, category, phase, popularOnly])

  const grouped = useMemo(() => {
    const groups: Record<number, Product[]> = {}
    for (const p of filtered) {
      if (!groups[p.phase]) groups[p.phase] = []
      groups[p.phase].push(p)
    }
    return groups
  }, [filtered])

  function addToCart(product: Product) {
    const best = getBest(product)
    setCart(prev => {
      const ex = prev.find(c => c.product.id === product.id)
      if (ex) return prev.map(c => c.product.id === product.id ? { ...c, qty: c.qty + 1 } : c)
      return [...prev, { product, qty: 1, supplier: best.name, price: best.price }]
    })
  }

  function removeFromCart(id: string) {
    setCart(prev => prev.filter(c => c.product.id !== id))
  }

  function updateQty(id: string, qty: number) {
    if (qty < 1) { removeFromCart(id); return }
    setCart(prev => prev.map(c => c.product.id === id ? { ...c, qty } : c))
  }

  const cartTotal = cart.reduce((s, c) => s + c.price * c.qty, 0)
  const cartCount = cart.reduce((s, c) => s + c.qty, 0)

  function copyList() {
    const text = cart.map(c => `${c.product.name} x${c.qty} @ £${c.price.toFixed(2)} (${c.supplier}) = £${(c.price * c.qty).toFixed(2)}`).join('\n')
    const total = `\nTotal (ex VAT): £${cartTotal.toFixed(2)}\nInc VAT (20%): £${(cartTotal * 1.2).toFixed(2)}`
    navigator.clipboard?.writeText(`MATERIALS LIST\n\n${text}${total}`)
  }

  const savings = cart.reduce((s, c) => {
    const worst = getWorst(c.product).price
    return s + (worst - c.price) * c.qty
  }, 0)

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)' }}>
      <div style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #111827 100%)', borderBottom: '1px solid var(--border)' }} className="px-4 md:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Package size={18} style={{ color: '#f59e0b' }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#f59e0b' }}>UK Materials Price Guide</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#f9fafb' }}>
                Compare UK Builder Supplier Prices
              </h1>
              <p className="text-sm opacity-60 max-w-lg">
                Live price comparison across Travis Perkins, Wickes, Screwfix, Toolstation, B&amp;Q, Jewson and Selco. Find the best price for every material, every phase.
              </p>
            </div>
            <button
              onClick={() => setShowCart(!showCart)}
              className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-105"
              style={{ background: cartCount > 0 ? '#f59e0b' : '#1f2937', color: cartCount > 0 ? '#000' : '#9ca3af', border: '1px solid #374151' }}
            >
              <ShoppingCart size={16} />
              Materials List
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold" style={{ background: '#ef4444', color: '#fff' }}>{cartCount}</span>
              )}
            </button>
          </div>
          <div className="flex flex-wrap gap-6 mt-6 text-xs opacity-50">
            <span>📦 {PRODUCTS.length}+ products</span>
            <span>🏪 7 suppliers compared</span>
            <span>🏗️ 10 construction phases</span>
            <span>💷 All prices ex VAT</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" />
            <input
              type="text"
              placeholder="Search materials (e.g. plasterboard, copper pipe, insulation...)"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none"
              style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            />
          </div>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="px-3 py-2.5 rounded-xl text-sm outline-none cursor-pointer"
            style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
          >
            {CATEGORIES.map(c => <option key={c.key} value={c.key}>{c.label}</option>)}
          </select>
          <button
            onClick={() => setPopularOnly(!popularOnly)}
            className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors"
            style={{ background: popularOnly ? '#f59e0b22' : 'var(--bg-secondary)', border: popularOnly ? '1px solid #f59e0b66' : '1px solid var(--border)', color: popularOnly ? '#f59e0b' : 'var(--text-secondary)' }}
          >
            <Star size={14} />
            Popular
          </button>
        </div>

        <div className="mb-6">
          <button onClick={() => setShowPhaseNav(!showPhaseNav)} className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider mb-2 opacity-50 hover:opacity-80">
            Filter by Phase {showPhaseNav ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </button>
          {showPhaseNav && (
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setPhase(0)} className="px-3 py-1.5 rounded-lg text-xs font-medium transition-colors" style={{ background: phase === 0 ? '#f59e0b' : 'var(--bg-secondary)', color: phase === 0 ? '#000' : 'var(--text-secondary)', border: phase === 0 ? 'none' : '1px solid var(--border)' }}>All</button>
              {PHASES.map(ph => (
                <button key={ph.id} onClick={() => setPhase(ph.id)} className="px-3 py-1.5 rounded-lg text-xs font-medium transition-colors" style={{ background: phase === ph.id ? '#f59e0b' : 'var(--bg-secondary)', color: phase === ph.id ? '#000' : 'var(--text-secondary)', border: phase === ph.id ? 'none' : '1px solid var(--border)' }}>{ph.short}</button>
              ))}
            </div>
          )}
        </div>

        <p className="text-xs opacity-40 mb-4">{filtered.length} product{filtered.length !== 1 ? 's' : ''} found</p>

        {Object.keys(grouped).map(phaseNum => {
          const ph = PHASES.find(p => p.id === Number(phaseNum))
          const items = grouped[Number(phaseNum)]
          return (
            <div key={phaseNum} className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: '#f59e0b' }}>
                <span className="opacity-60 font-normal text-xs">{ph?.label}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {items.map(product => {
                  const best = getBest(product)
                  const worst = getWorst(product)
                  const saving = worst.price - best.price
                  const inCart = cart.some(c => c.product.id === product.id)
                  const isExpanded = expandedId === product.id
                  return (
                    <div key={product.id} className="rounded-xl border transition-all" style={{ background: 'var(--bg-secondary)', borderColor: inCart ? '#f59e0b44' : 'var(--border)' }}>
                      <div className="p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{product.name}</h3>
                              {product.popular && <span className="text-[10px] px-1.5 py-0.5 rounded font-semibold" style={{ background: '#f59e0b22', color: '#f59e0b' }}>Popular</span>}
                            </div>
                            <p className="text-xs opacity-50 mb-2">{product.description}</p>
                            <div className="flex items-center gap-3">
                              <div>
                                <span className="text-lg font-bold" style={{ color: '#f59e0b' }}>£{best.price.toFixed(2)}</span>
                                <span className="text-xs opacity-40 ml-1">/{product.unit}</span>
                              </div>
                              {saving > 0.01 && <span className="text-xs font-medium" style={{ color: '#10b981' }}>Save £{saving.toFixed(2)} vs {worst.name}</span>}
                            </div>
                            <p className="text-xs opacity-40 mt-0.5">Best: {best.name}</p>
                          </div>
                          <div className="flex flex-col gap-2 items-end flex-shrink-0">
                            <button onClick={() => addToCart(product)} className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all hover:scale-105" style={{ background: inCart ? '#f59e0b33' : '#f59e0b', color: inCart ? '#f59e0b' : '#000', border: inCart ? '1px solid #f59e0b44' : 'none' }}>
                              <Plus size={12} />
                              {inCart ? 'Add More' : 'Add'}
                            </button>
                            <button onClick={() => setExpandedId(isExpanded ? null : product.id)} className="text-xs opacity-40 hover:opacity-80 flex items-center gap-1">
                              {product.prices.length} prices {isExpanded ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
                            </button>
                          </div>
                        </div>
                        {isExpanded && (
                          <div className="mt-3 pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                            <p className="text-[10px] uppercase tracking-wider opacity-40 mb-2">All Supplier Prices (ex VAT)</p>
                            <div className="space-y-1.5">
                              {[...product.prices].sort((a, b) => a.price - b.price).map((sp, i) => (
                                <div key={sp.name} className="flex items-center justify-between text-xs">
                                  <div className="flex items-center gap-2">
                                    {i === 0 && <span className="text-[10px] px-1.5 py-0.5 rounded font-semibold" style={{ background: '#10b98122', color: '#10b981' }}>Best</span>}
                                    <span style={{ color: 'var(--text-primary)' }}>{sp.name}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-bold" style={{ color: i === 0 ? '#10b981' : 'var(--text-primary)' }}>£{sp.price.toFixed(2)}</span>
                                    {i === 0 && product.prices.length > 1 && <span className="text-[10px] opacity-40">saves £{(getWorst(product).price - sp.price).toFixed(2)}</span>}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}

        {filtered.length === 0 && (
          <div className="text-center py-16 opacity-40">
            <Package size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-sm">No products found. Try a different search term or clear your filters.</p>
          </div>
        )}
      </div>

      {showCart && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowCart(false)} />
          <div className="relative w-full max-w-md flex flex-col h-full" style={{ background: '#0f1117', borderLeft: '1px solid #1f2937' }}>
            <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: '#1f2937' }}>
              <div>
                <h2 className="font-bold" style={{ color: '#f9fafb' }}>Materials List</h2>
                <p className="text-xs opacity-40">{cartCount} items · {cart.length} product{cart.length !== 1 ? 's' : ''}</p>
              </div>
              <button onClick={() => setShowCart(false)} className="opacity-40 hover:opacity-80"><X size={20} /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cart.length === 0 ? (
                <div className="text-center py-12 opacity-30">
                  <ShoppingCart size={40} className="mx-auto mb-3" />
                  <p className="text-sm">Your list is empty</p>
                  <p className="text-xs mt-1">Add products from the catalogue</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.product.id} className="rounded-xl p-3" style={{ background: '#1a1f2e', border: '1px solid #1f2937' }}>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1">
                        <p className="text-xs font-semibold" style={{ color: '#f9fafb' }}>{item.product.name}</p>
                        <p className="text-[11px] opacity-50">{item.supplier} · £{item.price.toFixed(2)}/{item.product.unit}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.product.id)} className="opacity-30 hover:opacity-70"><X size={14} /></button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQty(item.product.id, item.qty - 1)} className="w-6 h-6 rounded flex items-center justify-center" style={{ background: '#374151' }}><Minus size={10} /></button>
                        <span className="text-xs font-semibold w-6 text-center">{item.qty}</span>
                        <button onClick={() => updateQty(item.product.id, item.qty + 1)} className="w-6 h-6 rounded flex items-center justify-center" style={{ background: '#374151' }}><Plus size={10} /></button>
                      </div>
                      <span className="text-sm font-bold" style={{ color: '#f59e0b' }}>£{(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
            {cart.length > 0 && (
              <div className="p-4 border-t" style={{ borderColor: '#1f2937' }}>
                {savings > 0.01 && (
                  <div className="rounded-lg p-2.5 mb-3 text-xs" style={{ background: '#10b98109', border: '1px solid #10b98122' }}>
                    <span style={{ color: '#10b981' }}>💚 You&apos;re saving £{savings.toFixed(2)} by using cheapest suppliers</span>
                  </div>
                )}
                <div className="flex justify-between text-sm mb-1">
                  <span className="opacity-60">Subtotal (ex VAT)</span>
                  <span className="font-bold" style={{ color: '#f9fafb' }}>£{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs mb-4 opacity-40">
                  <span>Inc VAT (20%)</span>
                  <span>£{(cartTotal * 1.2).toFixed(2)}</span>
                </div>
                <div className="flex gap-2">
                  <button onClick={copyList} className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold" style={{ background: '#1f2937', color: '#9ca3af', border: '1px solid #374151' }}>
                    <Copy size={14} /> Copy List
                  </button>
                  <button
                    onClick={() => {
                      const lines = cart.map(c => `${c.product.name} x${c.qty} @ £${c.price.toFixed(2)} (${c.supplier}) = £${(c.price * c.qty).toFixed(2)}`).join('%0D%0A')
                      window.open(`mailto:?subject=Materials%20List&body=${lines}%0D%0A%0D%0ATotal%20(ex%20VAT)%3A%20%C2%A3${cartTotal.toFixed(2)}`)
                    }}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold"
                    style={{ background: '#f59e0b', color: '#000' }}
                  >
                    <Download size={14} /> Email List
                  </button>
                </div>
                <p className="text-[10px] opacity-30 text-center mt-2">Prices are indicative guide prices only. Always confirm current pricing with suppliers before ordering.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
