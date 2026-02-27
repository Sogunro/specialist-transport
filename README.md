# SafeRide Specialist Transport

Safe, reliable, and person-centred specialist transportation services for vulnerable individuals, healthcare providers, educational institutions, and local authorities.

**Live Site:** [https://sogunro.github.io/specialist-transport/](https://sogunro.github.io/specialist-transport/)

---

## Our Services

| Service | Description |
|---|---|
| **SEND School Transport** | Home-to-school transport for children with Special Educational Needs and Disabilities |
| **Transport Audit & Compliance** | Independent audits ensuring regulatory, contractual, and safeguarding standards |
| **WAV Transportation** | Wheelchair Accessible Vehicle transport with ramps, lifts, and door-to-door support |
| **Care Home & Elderly Transport** | Transport for elderly individuals and care home residents to appointments and social activities |
| **Hospital Transfers** | Non-emergency patient transport, hospital discharges, and inter-facility transfers |

## Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero section, service overview, stats, safety commitment, mission |
| Services | `/services` | Detailed breakdown of all 5 specialist services |
| About | `/about` | Mission, vision, values, and company journey |
| Contact | `/contact` | Contact information and quote request form |
| Driver Registration | `/driver/register` | 4-step application form for new drivers |
| Driver Login | `/driver/login` | Driver portal sign-in |

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Deployment:** GitHub Pages via GitHub Actions

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Sogunro/specialist-transport.git
cd specialist-transport

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build & Deploy

The site automatically deploys to GitHub Pages when you push to the `master` branch.

To build manually:

```bash
npm run build
```

Static output is generated in the `out/` directory.

## Design

- **Theme:** Light, warm, professional healthcare design
- **Background:** Warm cream (#FFF8F0)
- **Primary colour:** Navy blue (#1B3A5C)
- **Accent/CTA:** Coral orange (#E8633B)
- **Inspired by:** [Elder](https://www.elder.org) care services website

## Safety & Compliance

- Fully licensed, insured, and regularly maintained vehicles
- Enhanced DBS-checked drivers and passenger assistants
- Comprehensive safeguarding and child protection policies
- Staff trained in SEND awareness and vulnerable person support
- Full compliance with local authority, NHS, and regulatory standards

## Future Development

- [ ] Add real images and videos of fleet and team
- [ ] Connect driver registration to database (Neon Postgres)
- [ ] Implement authentication for driver login (NextAuth.js)
- [ ] Backend API for contact form submissions
- [ ] Custom domain setup
