export const PORTFOLIO_DATA = {
  name: "Oscar Yu",
  description: "Oscar Yu's Personal Portfolio",
  handle: "oscar-yu",
  resumeLabel: "Oscar Yu Resume",
  links: [
    {
      name: "gitHub",
      url: "https://github.com/Yu-Oscar",
    },
    {
      name: "linkedIn",
      url: "https://www.linkedin.com/in/oscar-yu-cheuk-chun/",
    },
  ],
  navItems: [
    {
      label: "_skills",
      href: "#skills",
    },
    {
      label: "_projects",
      href: "#projects",
    },
  ],
  resume:
    "https://1drv.ms/b/c/04d40a6ce3f3d3c0/ERefeUeaULZHqfmh5H7BWqQB4C_pQ07mBoE7CjCjj9fq8Q?e=c4vf61",
  currentRole: {
    company: "Durham",
    companyUrl: "https://www.durham.ac.uk/",
    companyHandle: "durham",
    title: "Computer Science Graduate",
  }
};

export const SKILLS = {
  frontend: ["Nextjs", "React", "React Native", "TypeScript", "JavaScript"],
  frameworks: ["Shadcn", "useQuery", "Zustand", "gif.js", "FFmpeg"],
  backend: ["Prisma", "Supabase", "RESTFUL API"],
  blockchain: ["Solidity", "Hardhat", "Forge", "OpenZeppelin", "Wagmi", "IPFS"],
};

export const PROJECTS = [
  {
    title: "NFT Minting @ChainChallenger",
    description:
      "Web app for minting NFT. Designed all frontend elements using Nextjs and NextUI, allow users to connect their crypto wallet using RainbowKit.",
    link: "https://cc-mint-frontend.pages.dev/",
    imageUrl: "/image/mint.png",
    techStack: ["Nextjs", "NextUI", "RainbowKit"],
  },
  {
    title: "Clutch TV @ChainChallenger",
    description:
      "Assisted in building a streaming platform specified for Gamefi streams, implementing responsive UI/UX design for web & mobile viewers. Implemented a quiz raffle system, allowing livestream viewers to participate using cryptocurrencies",
    link: "https://x.com/clutch_xyz",
    imageUrl: "/image/live.png",
    techStack: ["Nextjs", "Javascript", "React"],
  },
  {
    title: "Mop! Clean! Sweep!",
    description:
      "Built an Puzzle Maze game with Unity and C#, implemented game logics, sound effects and achievement system.",
    link: "https://yu-oscar.itch.io/mop-clean-sweep",
    imageUrl: "/image/gamedev.png",
    techStack: ["Unity", "C#"],
  },
  {
    title: "Football DAO",
    description:
      "Final year project on Decentralised Community Ownership of Football Clubs: A DAO Framework on Polygon Blockchain. Implemented smart contracts for governance, voting system, and token economics.",
    link: "https://fyp-final-neon.vercel.app/",
    imageUrl: "/image/dao.png",
    techStack: ["Nextjs", "Solidity", "Forge", "OpenZeppelin", "Wagmi"],
  },
  {
    title: "Portfolio Website",
    description:
      "Designed and developed a modern portfolio website for a photographer using Next.js and Tailwind CSS, featuring responsive design and smooth animations.",
    link: "https://justin-cai-portfolio.vercel.app/",
    imageUrl: "/image/justin-portfolio.png",
    techStack: ["Next.js", "Tailwind CSS", "React", "Vercel"],
  },
  {
    title: "UK Visa Date Calculator",
    description:
      "Built a comprehensive calculator for British National (Overseas) visa holders to track their eligibility for Indefinite Leave to Remain (ILR) and British Citizenship, including absence tracking and requirement validation.",
    link: "https://bno-calculator.vercel.app/en",
    imageUrl: "/image/bno-calculator.png",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
  },
  {
    title: "YouTube Search Scraper",
    description:
      "A Chrome extension for scraping and managing YouTube search results with modern UI design and batch processing capabilities. Features search result scraping, export management, auto-scroll functionality, and batch processing with comprehensive progress tracking.",
    link: "https://chromewebstore.google.com/detail/ehbknlckjmdkmcenenpbdmnpddalndge?utm_source=item-share-cb",
    imageUrl: "/image/youtube-scraper.png",
    techStack: ["Chrome Extension", "JavaScript", "HTML/CSS", "UI/UX"],
  },
  {
    title: "Flash Convert - Instant Auto Unit Conversion",
    description:
      "Chrome extension for instant unit conversions via right-click. Supports time zones, currencies, temperatures, lengths, and weights with real-time rates and customizable preferences.",
    link: "https://chromewebstore.google.com/detail/hhikhokgmfkagadbbjkkoeggmhcaiphm?utm_source=item-share-cb",
    imageUrl: "/image/convert.png",
    techStack: ["Chrome Extension", "JavaScript", "API Integration", "UI/UX"],
  },
  {
    title: "Speed Run Ethereum Portfolio",
    description:
      "Learning journey through Ethereum development challenges. Built smart contracts, NFT minting, token staking, and DeFi protocols using Solidity, Hardhat, and Scaffold-ETH 2.",
    link: "https://speedrunethereum.com/builders/0xEe3869d7dFc3e1a2CB6399E00C6a39E019E1A80b",
    imageUrl: "/image/eth.png",
    techStack: ["Solidity", "Hardhat", "Next.js", "Scaffold-ETH 2", "Web3"],
  },
  {
    title: "MemeMe.hk",
    description:
      "Full-stack meme generator where users browse meme templates, add customizable text overlays, and share memes. Includes Supabase auth (Email OTP + Google OAuth), bookmarking, user uploads with quotas, and an admin panel for template management.",
    link: "https://www.mememe.hk",
    imageUrl: "/image/MemeMe.png",
    techStack: ["Next.js", "TypeScript", "Supabase", "Vercel", "Custom Domain", "SMTP Integration"],
  },
  {
    title: "Full-stack Multi-Tenant Ticketing SaaS",
    description:
      "Built in The Road to Next Basic course, focusing on Next.js App Router, server components/actions, forms, auth, pagination, and REST API design.",
    link: "https://road-to-next-website.vercel.app/",
    imageUrl: "/image/road-to-next.png",
    techStack: [
      "Prisma CRUD",
      "User Authentication",
      "Server Actions",
      "Cursor/Offset Pagination",
      "Search Query",
      "Cookie/Session Management",
    ],
  },
];