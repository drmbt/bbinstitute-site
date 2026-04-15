import { impactMetrics, impactPillars } from "@/content/impact";

export const hero = {
  eyebrow: "Bombay Beach Institute",
  title: "10 years of making art at the end of the world.",
  subtitle: "From renegade arts gathering to international think tank.",
  intro:
    "The Bombay Beach Institute transforms a site of ecological crisis into a living, participatory museum where art, community, and cultural renewal converge.",
  primaryCta: { label: "Support Year X", href: "#support" },
  secondaryCta: { label: "Explore the timeline", href: "#timeline" },
} as const;

export const mission = {
  title: "What happens when artists take over a town?",
  body: [
    "For ten years, the Bombay Beach Biennale has been the answer: a radically non-commercial gathering at the edge of the Salton Sea where site-specific art, experimental philosophy, and collective hospitality converge.",
    "There are no tickets, no commerce, no advertising or marketing. The dates are never published publicly. They are spread by word of mouth. The Bombay Beach Biennale is not a festival, nor is it a spectator sport. It is a living inquiry into the power art has when it leaves institutions behind.",
  ],
  principles: [
    "Radical accessibility over exclusivity",
    "Place-based practice over spectacle",
    "Community-rooted culture over extractive programming",
  ],
} as const;

export const snapshot = {
  title: "Scope and scale",
  description:
    "BBB 2026 is the public culmination of a full season of creative activity developed in collaboration with the town.",
  stats: impactMetrics,
  programs: [
    "Large-scale installations",
    "Academic philosophy conference",
    "Opera, ballet, and circus",
    "Performance art and experimental theater",
    "Film festival and literary conference",
    "Live music, rituals, and gatherings",
  ],
} as const;

export const budget = {
  title: "A $250,000 platform built without selling a single ticket.",
  intro:
    "BBB operates on a radically accessible model: no tickets, no VIPs, no commercial sponsorship, no commerce. Philanthropic support is critical to maintain that ethos while expanding infrastructure, programming, and long-term sustainability.",
  items: [
    {
      name: "Production",
      percent: 30,
      detail: "Food, medic, permits, insurance, housing, portapotties, and contingency.",
      impact: "Creates a safe container for ambitious public art and performance.",
    },
    {
      name: "Artist grants",
      percent: 20,
      detail: "Direct funding for new work, with a focus on expanding access and equity.",
      impact: "Puts resources directly into artists' hands.",
    },
    {
      name: "Team and operations",
      percent: 20,
      detail: "Fair wages for core producers and organizers sustaining the work year-round.",
      impact: "Keeps the project collaborative, safe, and durable.",
    },
    {
      name: "Fundraising",
      percent: 7.5,
      detail: "Dinners, auctions, Patreon stewardship, and community support-building.",
      impact: "Cultivates a support circle without compromising the ethos.",
    },
    {
      name: "Satellite projects",
      percent: 7.5,
      detail: "Support for the philosophy conference, film festival, and related cultural programs.",
      impact: "Expands exchange beyond the grant program.",
    },
    {
      name: "Administration",
      percent: 5,
      detail: "Legal, accounting, digital tools, and fiscal sponsorship infrastructure.",
      impact: "Builds transparency and long-term sustainability.",
    },
    {
      name: "Documentation",
      percent: 5,
      detail: "Photo and video storytelling that preserves the movement's collective history.",
      impact: "Extends visibility and legacy beyond the desert.",
    },
    {
      name: "Civic engagement",
      percent: 5,
      detail: "Community feasts, youth programming, and partnerships with local residents and organizations.",
      impact: "Strengthens the cultural fabric of Bombay Beach.",
    },
  ],
} as const;

export const origin = {
  title: "A town at the edge of collapse and renewal.",
  summary:
    "The story of BBB and BBI begins in Bombay Beach, California: a half-mile by half-mile town with roughly 250 full-time residents, three hours from Los Angeles, 45 minutes from the nearest grocery store, and summer temperatures that reach 120 degrees.",
  cards: [
    {
      title: "Past",
      body: "Once a thriving resort town on the Salton Sea, Bombay Beach was a postwar playground of yacht clubs, marinas, and cocktail lounges before rising salinity and agricultural runoff triggered decades of decline.",
    },
    {
      title: "Transformation",
      body: "When BBB began in 2016, much of the town was abandoned and arts activity was nearly invisible. Artists started reactivating vacant spaces through installations and performances, reshaping the town's cultural narrative.",
    },
    {
      title: "Now",
      body: "What began as a local experiment has grown into an international arts movement dedicated to radical accessibility, place-based practice, and community-rooted cultural production.",
    },
  ],
} as const;

export const timeline = [
  {
    year: "2016",
    label: "Year 0",
    theme: "The Art of Decay",
    description:
      "The first Biennale lasts 24 hours with 30 artists, five academic lectures, and fewer than 500 attendees.",
  },
  {
    year: "2017",
    label: "Year 1",
    theme: "The Way the Future Used to Be",
    description:
      "Programming expands to two days, artist participation doubles, and attendance reaches roughly 1,000 people.",
  },
  {
    year: "2018",
    label: "Year 2",
    theme: "God's Silence",
    description:
      "Artists begin purchasing properties and building large-scale permanent installations as the gathering takes over a full weekend.",
  },
  {
    year: "2019",
    label: "Year 3",
    theme: "Post-Modernism",
    description:
      "Participation reaches 115 artists and 2,000 attendees as national attention grows around the question of whether artists can help save the Salton Sea.",
  },
  {
    year: "2020-21",
    label: "Postponed",
    theme: "Seasonal commitment",
    description:
      "BBB goes dark during COVID-19, but artists remain in Bombay Beach and the movement deepens its year-round commitment to place.",
  },
  {
    year: "2022",
    label: "Year 6",
    theme: "Questioning Hierarchy",
    description:
      "The Biennale returns with its renegade spirit intact, proving the movement can reassemble without losing its core ethos.",
  },
  {
    year: "2023",
    label: "Year 7",
    theme: "Chaos Theory",
    description:
      "BBB incorporates as an LLC, hires its first staff member, and stabilizes production while staying intentionally humble.",
  },
  {
    year: "2024",
    label: "Year 8",
    theme: "White Gold",
    description:
      "The Public Art Grant Program launches and distributes more than $40,000 in grants, with over 150 artists and roughly 5,000 guests participating.",
  },
  {
    year: "2025",
    label: "Year 9",
    theme: "Convivium: The Institute is born",
    description:
      "BBB shifts to an every-other-year rhythm and BBI is formed to extend the movement's commitment beyond the Biennale itself.",
  },
  {
    year: "2026",
    label: "Year X",
    theme: "The Last Judgement",
    description:
      "BBI becomes the fiscal sponsor, receives 501(c)(3) status, and produces three months of free public programming alongside the tenth anniversary Biennale.",
  },
] as const;

export const institute = {
  title: "Building permanence from ephemerality.",
  question: "What does it mean to build permanence from ephemerality?",
  experiments: [
    "Social terraforming",
    "Creative world building",
    "Alternative governance",
  ],
  mission: [
    "As a steward of Bombay Beach's evolving identity, BBI facilitates residencies, interdisciplinary conferences, and public programming that bridge local and global communities.",
    "Through art, philosophy, and radical hospitality alongside the Bombay Beach Biennale, the Institute creates a space where artists, thinkers, and visionaries redefine the possible. In a secluded part of the desert, theory transforms into praxis through lived experience and real-world application.",
    "The Institute is a driving force behind community organizing and the Bombay Beach hivemind, creating a living archive of resources, innovations, and programming while cultivating practical experiments in a place defined by environmental catastrophe and socioeconomic collapse.",
  ],
  values: [
    {
      title: "Cultural renewal",
      body: "Transform ecological crisis into a site of artistic invention and civic imagination.",
    },
    {
      title: "Local engagement",
      body: "Root the work in residents through year-round stewardship, programming, and shared authorship.",
    },
    {
      title: "Environmental dialogue",
      body: "Confront the realities of the Salton Sea directly and turn them into public conversation.",
    },
    {
      title: "Bridging local and global",
      body: "Position Bombay Beach as an international destination for experimental art while preserving its renegade ethos.",
    },
  ],
} as const;

export const impactPreview = impactPillars;

export const supportCta = {
  title: "Become a BBI conspirator.",
  body:
    "The Institute exists alongside people living on the edge of environmental and economic precarity. Art does not solve everything, but it gathers people, resources, and imagination in ways policy alone cannot.",
  detail:
    "Your support ensures that this experiment, this improbable city of artists at the Salton Sea, survives, endures, and thrives.",
} as const;
