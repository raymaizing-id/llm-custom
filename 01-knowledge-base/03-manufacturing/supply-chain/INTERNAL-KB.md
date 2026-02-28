# 🚚 Supply Chain - Internal Knowledge Base

> **Department**: Supply Chain & Logistics  
> **Type**: Manufacturing Department  
> **Reports To**: Head of Manufacturing / COO  
> **AI Assistant**: Supply Chain Bot (Orbis)  
> **Scope**: Internal Only

---

## 🎯 DEPARTMENT OVERVIEW

**Supply Chain** adalah department yang bertanggung jawab atas procurement, vendor management, inventory control, logistics, dan distribution untuk memastikan material availability, cost efficiency, dan on-time delivery untuk mendukung production operations dan customer satisfaction.

**Mission**: Ensure seamless flow of materials and products from suppliers to customers

---

## 👥 TEAM STRUCTURE

**Supply Chain Manager**:
- Supply chain strategy
- Team leadership
- Vendor relationships
- Cost optimization
- Performance management

**Procurement Specialist** (2-3):
- Supplier sourcing
- Purchase orders
- Price negotiation
- Contract management
- Supplier evaluation

**Inventory Controller** (2):
- Stock management
- Inventory accuracy
- Reorder planning
- Stock optimization
- Cycle counting

**Warehouse Supervisor**:
- Warehouse operations
- Team supervision
- Storage management
- Safety compliance
- 5S implementation

**Warehouse Staff** (5-8):
- Receiving
- Storage
- Picking & packing
- Shipping
- Documentation

**Logistics Coordinator**:
- Shipment planning
- Carrier coordination
- Delivery tracking
- Documentation
- Customer coordination

---

## 📋 KEY RESPONSIBILITIES

### 1. Procurement
- Supplier sourcing & evaluation
- Purchase order management
- Price negotiation
- Contract management
- Supplier performance monitoring

### 2. Inventory Management
- Stock level optimization
- Reorder point management
- Inventory accuracy
- Obsolete stock management
- ABC analysis

### 3. Warehouse Operations
- Receiving & inspection
- Storage & organization
- Picking & packing
- Shipping & delivery
- 5S & housekeeping

### 4. Logistics
- Transportation planning
- Carrier management
- Delivery coordination
- Route optimization
- Cost management

### 5. Vendor Management
- Supplier relationships
- Performance evaluation
- Quality assurance
- Development programs
- Risk management

---

## 🔄 PROCUREMENT PROCESS

### Phase 1: Requirement Planning
**Input**: Production schedule, stock levels, forecasts

**Activities**:
- Review MRP (Material Requirements Planning)
- Check current inventory
- Calculate net requirements
- Determine order quantities
- Set delivery schedules

**Output**: Purchase requisitions

### Phase 2: Supplier Selection
**Activities**:
- Review approved suppliers
- Request quotations (RFQ)
- Compare prices & terms
- Evaluate lead times
- Check quality history

**Criteria**:
- Price competitiveness
- Quality consistency
- Delivery reliability
- Payment terms
- Technical support

### Phase 3: Purchase Order
**Activities**:
- Create purchase order
- Specify requirements
- Confirm delivery date
- Set payment terms
- Send to supplier

**PO Contents**:
- Material specifications
- Quantity & unit
- Price & currency
- Delivery date & location
- Quality requirements
- Payment terms

### Phase 4: Order Tracking
**Activities**:
- Monitor order status
- Follow up with supplier
- Update delivery schedule
- Coordinate with production
- Prepare receiving

### Phase 5: Receiving & Inspection
**Activities**:
- Physical receiving
- Quantity verification
- Quality inspection (with QA)
- Documentation
- System update

**Acceptance Criteria**:
- Correct material
- Correct quantity
- Quality specifications met
- Proper packaging
- Complete documentation

### Phase 6: Payment Processing
**Activities**:
- Invoice verification
- 3-way matching (PO, GR, Invoice)
- Approval process
- Payment scheduling
- Supplier communication

---

## 📊 INVENTORY MANAGEMENT

### Stock Categories

**A-Items** (High Value - 20% items, 80% value):
- Tight control
- Daily monitoring
- Accurate forecasting
- Safety stock optimization
- Frequent review

**B-Items** (Medium Value - 30% items, 15% value):
- Regular control
- Weekly monitoring
- Standard procedures
- Moderate safety stock
- Monthly review

**C-Items** (Low Value - 50% items, 5% value):
- Simple control
- Monthly monitoring
- Bulk ordering
- Higher safety stock
- Quarterly review

### Reorder System

**Reorder Point Formula**:
```
ROP = (Average Daily Usage × Lead Time) + Safety Stock

Example:
- Average daily usage: 100 kg
- Lead time: 14 days
- Safety stock: 500 kg
- ROP = (100 × 14) + 500 = 1,900 kg
```

**Economic Order Quantity (EOQ)**:
```
EOQ = √(2 × Annual Demand × Order Cost / Holding Cost)

Example:
- Annual demand: 36,000 kg
- Order cost: Rp 500,000
- Holding cost: Rp 10,000/kg/year
- EOQ = √(2 × 36,000 × 500,000 / 10,000) = 600 kg
```

---

## 💬 INTERNAL AI INTERACTIONS

### Scenario 1: Material Shortage Alert

```
Production: "Material glycerin habis, production line 2 stop!"

Supply Chain Bot (Orbis): "⚠️ URGENT - Material Shortage Alert!

📊 CURRENT SITUATION:

Material: Glycerin USP
Current Stock: 0 kg
Required: 250 kg (Batch 015 - Beautylatory Toner)
Production Impact: Line 2 stopped
Estimated Loss: 4 hours downtime

🔍 ROOT CAUSE ANALYSIS:

1. Last stock: 50 kg (yesterday)
2. Consumption: Higher than forecast
   - Planned: 200 kg/week
   - Actual: 280 kg/week (+40%)
3. Reorder point: 300 kg (not triggered)
4. System issue: Stock update delay

📦 IMMEDIATE ACTIONS:

Option 1: Emergency Purchase (FASTEST) ⚡
- Supplier: PT Kimia Jaya (local)
- Available: 500 kg
- Price: Rp 85,000/kg (+15% premium)
- Delivery: 2 hours
- Total cost: Rp 42,500,000
- Production resume: Today 14:00

Option 2: Regular Supplier (CHEAPER) 💰
- Supplier: PT Global Chem (regular)
- Available: 1,000 kg
- Price: Rp 72,000/kg (normal)
- Delivery: Tomorrow 08:00
- Total cost: Rp 72,000,000
- Production resume: Tomorrow 09:00

Option 3: Borrow from Sister Company 🤝
- Source: PT XYZ (partner)
- Available: 200 kg
- Price: Rp 75,000/kg
- Delivery: 3 hours
- Total cost: Rp 15,000,000
- Production resume: Today 16:00
- Note: Must return next week

💡 RECOMMENDATION:

Best Option: Option 1 (Emergency Purchase)

Reasoning:
✅ Fastest solution (2 hours)
✅ Minimize production loss
✅ Sufficient quantity (500 kg = 2 weeks)
✅ Cost impact acceptable (Rp 6.5M extra)
❌ Downtime cost: Rp 15M (4 hours)
✅ Net saving: Rp 8.5M vs Option 2

📋 EXECUTION PLAN:

Immediate (Now):
1. ✅ Call PT Kimia Jaya - confirm stock
2. ⏳ Create emergency PO
3. ⏳ Arrange payment (COD)
4. ⏳ Coordinate delivery (2 hours)
5. ⏳ Prepare receiving area

Production Coordination:
1. ⏳ Inform production: 2-hour delay
2. ⏳ Reschedule Line 2 to 14:00
3. ⏳ Use Line 1 for other batch
4. ⏳ Update production schedule

Quality Assurance:
1. ⏳ Prepare for material inspection
2. ⏳ Fast-track COA review
3. ⏳ Approve for emergency use

🔧 PREVENTIVE ACTIONS:

Short-term (This Week):
1. Fix stock update system
2. Adjust reorder point: 300 → 500 kg
3. Increase safety stock: +200 kg
4. Daily stock monitoring

Long-term (This Month):
1. Review consumption forecast
2. Implement auto-reorder system
3. Add backup supplier
4. Improve demand planning

📊 COST IMPACT:

Emergency Purchase:
- Material cost: Rp 42,500,000
- Extra cost: Rp 6,500,000
- Downtime cost saved: Rp 15,000,000
- Net benefit: Rp 8,500,000

Total Impact:
- One-time cost: Rp 6,500,000
- Prevention investment: Rp 5,000,000
- Future savings: Rp 50,000,000/year

Pilih action:
1️⃣ Approve Option 1 (Emergency - RECOMMENDED)
2️⃣ Approve Option 2 (Regular)
3️⃣ Approve Option 3 (Borrow)
4️⃣ Discuss alternatives
5️⃣ Escalate to management

Butuh keputusan SEKARANG! ⚡"
```

---

### Scenario 2: Supplier Performance Review

```
Manager: "Aku mau review supplier performance bulan ini"

Supply Chain Bot (Orbis): "Siap! Supplier Performance Review 📊

🗓️ PERIOD: February 2026

📈 OVERALL PERFORMANCE:

Total Suppliers: 45 active suppliers
Total POs: 156 purchase orders
Total Value: Rp 2.4 Miliar
On-Time Delivery: 87% (target: 90%)
Quality Acceptance: 94% (target: 95%)
Price Variance: +2.3% (target: ±2%)

⭐ TOP PERFORMERS (A-Grade):

1. PT GLOBAL CHEMICAL INDO
   Category: Raw Materials
   Orders: 24 POs
   Value: Rp 450M
   
   Performance:
   ✅ On-Time Delivery: 100%
   ✅ Quality: 100% acceptance
   ✅ Price: Stable
   ✅ Service: Excellent
   ✅ Documentation: Complete
   
   Highlights:
   - Zero delays
   - Proactive communication
   - Technical support excellent
   - Flexible payment terms
   
   Action: Increase order volume +20%

2. PT KEMINDO JAYA
   Category: Packaging Materials
   Orders: 18 POs
   Value: Rp 320M
   
   Performance:
   ✅ On-Time Delivery: 95%
   ✅ Quality: 98% acceptance
   ✅ Price: Competitive (-3%)
   ✅ Service: Very Good
   ✅ Innovation: New designs
   
   Highlights:
   - Cost reduction achieved
   - Quality improvement
   - Design innovation
   
   Action: Extend contract +1 year

3. PT AROMA NUSANTARA
   Category: Fragrance
   Orders: 12 POs
   Value: Rp 180M
   
   Performance:
   ✅ On-Time Delivery: 92%
   ✅ Quality: 100% acceptance
   ✅ Price: Stable
   ✅ Service: Excellent
   ✅ Customization: Flexible
   
   Highlights:
   - Custom fragrance development
   - Fast sampling
   - Competitive pricing
   
   Action: Strategic partnership

⚠️ NEEDS IMPROVEMENT (B-Grade):

4. PT PLASTIK SEJAHTERA
   Category: Plastic Packaging
   Orders: 15 POs
   Value: Rp 280M
   
   Performance:
   ⚠️ On-Time Delivery: 73% (↓)
   ✅ Quality: 95% acceptance
   ⚠️ Price: +5% increase
   ⚠️ Service: Declining
   ⚠️ Communication: Slow
   
   Issues:
   - 4 late deliveries (1-3 days)
   - Price increase without notice
   - Slow response time
   - Quality issues (2 rejections)
   
   Actions Taken:
   1. Meeting scheduled: Mar 5
   2. Performance improvement plan
   3. Alternative supplier search
   4. Reduce order volume -30%
   
   Next Steps:
   - 30-day improvement period
   - Weekly monitoring
   - Backup supplier ready

5. CV BAHAN KIMIA MANDIRI
   Category: Raw Materials
   Orders: 8 POs
   Value: Rp 120M
   
   Performance:
   ⚠️ On-Time Delivery: 75%
   ⚠️ Quality: 88% acceptance
   ⚠️ Price: Fluctuating
   ⚠️ Service: Inconsistent
   
   Issues:
   - Inconsistent quality
   - Delivery delays
   - Documentation incomplete
   
   Action: Under review (30 days)

❌ CRITICAL ISSUES (C-Grade):

6. PT SUPPLIER X
   Category: Packaging
   Orders: 6 POs
   Value: Rp 95M
   
   Performance:
   ❌ On-Time Delivery: 50%
   ❌ Quality: 67% acceptance
   ❌ Price: +8% increase
   ❌ Service: Poor
   ❌ Communication: Very slow
   
   Critical Issues:
   - 3 major delays (>5 days)
   - 2 quality rejections
   - Unresponsive to complaints
   - No improvement shown
   
   Action: DISCONTINUE
   - No new orders
   - Complete existing POs
   - Find replacement
   - Blacklist consideration

📊 CATEGORY ANALYSIS:

Raw Materials (15 suppliers):
- Average OTD: 91%
- Average Quality: 96%
- Total Value: Rp 1.2M
- Status: ✅ Good

Packaging (12 suppliers):
- Average OTD: 82%
- Average Quality: 92%
- Total Value: Rp 800M
- Status: ⚠️ Needs attention

Fragrance (5 suppliers):
- Average OTD: 94%
- Average Quality: 98%
- Total Value: Rp 250M
- Status: ✅ Excellent

Others (13 suppliers):
- Average OTD: 85%
- Average Quality: 93%
- Total Value: Rp 150M
- Status: ✅ Acceptable

💡 RECOMMENDATIONS:

Immediate Actions:
1. ⚠️ Address packaging supplier issues
2. ❌ Discontinue PT Supplier X
3. ✅ Reward top performers
4. 🔍 Find backup suppliers (packaging)
5. 📋 Update approved supplier list

Strategic Initiatives:
1. Supplier development program
2. Long-term contracts (top 10)
3. Supplier audit schedule
4. Performance bonus system
5. Risk mitigation plan

Cost Optimization:
1. Consolidate orders (top suppliers)
2. Negotiate volume discounts
3. Review payment terms
4. Reduce supplier base (-10%)
5. Target saving: Rp 120M/year

📅 NEXT STEPS:

This Week:
- Meeting with PT Plastik Sejahtera
- Discontinue PT Supplier X
- Source alternative packaging suppliers
- Update supplier scorecard

This Month:
- Supplier audit (top 5)
- Contract renewal (3 suppliers)
- Supplier development workshop
- Performance review presentation

📎 DETAILED REPORTS:

1️⃣ View individual supplier details
2️⃣ Download full performance report
3️⃣ See quality rejection analysis
4️⃣ Review cost variance report
5️⃣ Check delivery performance trends

Mau lihat detail apa? 📊"
```

---

### Scenario 3: Inventory Optimization

```
Manager: "Stock kita terlalu banyak, cash flow terganggu"

Supply Chain Bot (Orbis): "Aku analisa inventory optimization! 💰

📊 CURRENT INVENTORY STATUS:

Total Inventory Value: Rp 3.2 Miliar
Target: Rp 2.5 Miliar
Excess: Rp 700 Juta (28% over target)
Inventory Turnover: 4.2x/year (target: 6x)
Days of Inventory: 87 days (target: 60 days)

🔍 DETAILED ANALYSIS:

A. OVERSTOCKED ITEMS (Rp 450M):

1. Glycerin USP
   Current: 2,500 kg
   Average usage: 200 kg/week
   Days supply: 87 days (12 weeks)
   Target: 30 days (4 weeks)
   Excess: 1,700 kg
   Value: Rp 122M
   
   Action: Stop ordering for 8 weeks

2. Plastic Bottles 100ml
   Current: 50,000 pcs
   Average usage: 3,000 pcs/week
   Days supply: 117 days (16 weeks)
   Target: 45 days (6 weeks)
   Excess: 30,000 pcs
   Value: Rp 75M
   
   Action: Reduce order quantity

3. Fragrance Rose
   Current: 150 kg
   Average usage: 8 kg/week
   Days supply: 131 days (18 weeks)
   Target: 30 days (4 weeks)
   Excess: 106 kg
   Value: Rp 53M
   
   Action: Use in multiple products

[Continue for top 10 overstocked items]

B. SLOW-MOVING ITEMS (Rp 180M):

1. Old Packaging Design
   Age: 8 months
   Quantity: 20,000 pcs
   Value: Rp 45M
   Usage: None (discontinued)
   
   Action: Liquidate or repurpose

2. Discontinued Fragrance
   Age: 6 months
   Quantity: 80 kg
   Value: Rp 40M
   Usage: Very low
   
   Action: Clearance sale

3. Obsolete Raw Material
   Age: 12 months
   Quantity: Various
   Value: Rp 35M
   Usage: None
   
   Action: Write-off or donate

C. OPTIMAL STOCK ITEMS (Rp 1.8M):
   Status: ✅ Good
   Action: Maintain current levels

D. UNDERSTOCKED ITEMS (Rp 120M):
   Status: ⚠️ Risk of stockout
   Action: Increase safety stock

💡 OPTIMIZATION PLAN:

PHASE 1: Quick Wins (Month 1)
Target: Reduce Rp 200M

Actions:
1. Stop ordering overstocked items
   Saving: Rp 150M cash flow
   
2. Liquidate slow-moving items
   Recovery: Rp 50M (50% of value)
   
3. Adjust reorder points
   Reduction: Rp 100M inventory

Expected Result:
- Inventory: Rp 3.2M → Rp 3.0M
- Cash released: Rp 200M
- Turnover: 4.2x → 4.8x

PHASE 2: Structural Changes (Month 2-3)
Target: Reduce additional Rp 500M

Actions:
1. Implement JIT (Just-In-Time)
   - Increase delivery frequency
   - Reduce order quantities
   - Improve supplier coordination
   Reduction: Rp 300M
   
2. Consignment arrangements
   - Top 5 suppliers
   - Pay on usage
   - Reduce holding cost
   Reduction: Rp 150M
   
3. VMI (Vendor Managed Inventory)
   - Supplier manages stock
   - Auto-replenishment
   - Reduce safety stock
   Reduction: Rp 50M

Expected Result:
- Inventory: Rp 3.0M → Rp 2.5M (TARGET!)
- Cash released: Rp 500M
- Turnover: 4.8x → 6.0x

📊 FINANCIAL IMPACT:

Cash Flow Improvement:
- Phase 1: Rp 200M (Month 1)
- Phase 2: Rp 500M (Month 2-3)
- Total: Rp 700M released

Cost Savings (Annual):
- Holding cost reduction: Rp 84M/year
  (12% of Rp 700M)
- Obsolescence reduction: Rp 36M/year
- Space savings: Rp 12M/year
- Total savings: Rp 132M/year

ROI:
- Investment: Rp 25M (system + training)
- Annual savings: Rp 132M
- Payback: 2.3 months
- ROI: 528%

⚠️ RISKS & MITIGATION:

Risk 1: Stockout during transition
Mitigation:
- Maintain safety stock (critical items)
- Backup suppliers ready
- Daily monitoring

Risk 2: Supplier resistance
Mitigation:
- Negotiate win-win terms
- Pilot with willing suppliers
- Show benefits

Risk 3: System changes
Mitigation:
- Phased implementation
- Training program
- IT support

📋 IMPLEMENTATION TIMELINE:

Week 1-2:
✅ Identify overstocked items
✅ Stop unnecessary orders
✅ Plan liquidation
✅ Communicate with suppliers

Week 3-4:
⏳ Execute liquidation
⏳ Adjust reorder points
⏳ Implement new procedures
⏳ Train team

Week 5-8:
⏳ Negotiate JIT terms
⏳ Setup consignment
⏳ Implement VMI
⏳ Monitor results

Week 9-12:
⏳ Fine-tune system
⏳ Measure results
⏳ Continuous improvement
⏳ Report to management

📈 SUCCESS METRICS:

Weekly Monitoring:
- Inventory value
- Stock turnover
- Stockout incidents
- Cash flow

Monthly Review:
- Target achievement
- Cost savings
- Supplier performance
- Process efficiency

🎯 QUICK ACTIONS (This Week):

1. Freeze orders for overstocked items
2. List slow-moving items for sale
3. Adjust reorder points (top 20 items)
4. Meeting with top 5 suppliers
5. Communicate plan to production

Pilih action:
1️⃣ Approve full optimization plan
2️⃣ Start with Phase 1 only
3️⃣ Review detailed item list
4️⃣ Discuss with finance team
5️⃣ Customize plan

Let's optimize and release that cash! 💰"
```

---

## 🤝 COLLABORATION

### With PPIC
- Material requirements planning
- Production schedule coordination
- Inventory planning
- Delivery coordination

### With Production
- Material availability
- Urgent requirements
- Quality issues
- Delivery schedules

### With Quality Assurance
- Material inspection
- Supplier quality
- Specification compliance
- Rejection handling

### With Finance
- Purchase approvals
- Payment processing
- Budget management
- Cost control

### With All Brands/Units
- Material requirements
- Delivery coordination
- Special requests
- Cost optimization

---

## 📊 KPIs & METRICS

### Procurement
- Purchase order cycle time
- Supplier lead time
- Price variance (%)
- Contract compliance (%)
- Supplier performance score

### Inventory
- Inventory turnover ratio
- Days of inventory
- Stock accuracy (%)
- Obsolete stock value
- Stockout incidents

### Warehouse
- Receiving accuracy (%)
- Picking accuracy (%)
- Space utilization (%)
- Order fulfillment time
- Damage rate (%)

### Logistics
- On-time delivery (%)
- Freight cost per unit
- Delivery accuracy (%)
- Transit time
- Damage in transit (%)

### Cost
- Total procurement cost
- Inventory holding cost
- Logistics cost
- Cost savings achieved
- Cost per order

---

## 🎓 TRAINING & DEVELOPMENT

### Required Skills
- Procurement management
- Inventory control
- Warehouse operations
- Logistics coordination
- Negotiation
- ERP systems
- Data analysis

### Certifications
- CSCP (Certified Supply Chain Professional)
- CPIM (Certified in Production and Inventory Management)
- Warehouse management
- Forklift operation
- Dangerous goods handling

---

## 🔧 SYSTEMS & TOOLS

### ERP System
- Purchase order management
- Inventory tracking
- Warehouse management
- Supplier management
- Reporting & analytics

### WMS (Warehouse Management System)
- Receiving
- Put-away
- Picking
- Packing
- Shipping

### TMS (Transportation Management System)
- Route planning
- Carrier selection
- Shipment tracking
- Freight audit

---

## 📱 EMERGENCY CONTACTS

**Supply Chain Manager**: [Phone]
**Procurement Lead**: [Phone]
**Warehouse Supervisor**: [Phone]
**Logistics Coordinator**: [Phone]
**Emergency Hotline**: [Phone]

---

**Document Created**: 2026-02-20  
**For**: Internal use only  
**AI**: Supply Chain Bot (Orbis)  
**Update**: Daily  
**Access**: Supply Chain team + Management
