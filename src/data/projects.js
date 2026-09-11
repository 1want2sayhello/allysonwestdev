import fizzFixThumb from "../assets/thumbnails/fizz-fix-thumb.avif";
import techTunesThumb from "../assets/thumbnails/tech-tunes-thumb.avif";
import experienceIndyThumb from "../assets/thumbnails/map-app-thumb.avif";

//Experience 317 demos
import experienceIndyLocationDemo from "../assets/videos/experience-indy-demos/location.mp4";
import experienceIndyFilterDemo from "../assets/videos/experience-indy-demos/location-filtering.mp4";

//Fizz Fix demo videos
import fizzIntroThumb from "../assets/videos/fizz-fix-demos/intro-thumb.mp4";
import fizzIntroDemo from "../assets/videos/fizz-fix-demos/intro-full.mp4";
import fizzAddCheckoutThumb from "../assets/videos/fizz-fix-demos/add-checkout-thumb.mp4";
import fizzAddCheckoutDemo from "../assets/videos/fizz-fix-demos/add-checkout-demo.mp4";
import fizzLocationDemo from "../assets/videos/fizz-fix-demos/locations-demo.mp4";
import fizzLocationThumb from "../assets/videos/fizz-fix-demos/locations-thumb.mp4";

//Tech Tunes demo videos
import ttAddToCartThumb from "../assets/videos/tech-tunes-demos/add-to-cart-thumb.mp4";
import ttAddToCartDemo from "../assets/videos/tech-tunes-demos/add-to-cart-demo.mp4";

import ttRecentlyViewedDemo from "../assets/videos/tech-tunes-demos/recently-viewed-demo.mp4";
import ttRecentlyViewedThumb from "../assets/videos/tech-tunes-demos/recently-viewed-thumb.mp4";

import ttSearchDemo from "../assets/videos/tech-tunes-demos/search-demo.mp4";
import ttSearchThumb from "../assets/videos/tech-tunes-demos/search-thumb.mp4";

import ttSortDemo from "../assets/videos/tech-tunes-demos/sort.mp4";
import ttSortThumb from "../assets/videos/tech-tunes-demos/sort-thumb.mp4";

import luddyLogo from "../assets/logo/luddy-logo-white.webp";
import ISCLogo from "../assets/logo/isc-logo-white.webp";

import lightIcons from "./lightIcons";

export const projects = [
  {
    id: "experience-indy",
    title: "Experience Indy Mobile Web App",
    demoLayout: "mobile",
    isFeatured: true,
    collaborations: {
      label: "Internship Collaboration",
      organizations: [
        {
          name: "Luddy School of Informatics & Computing",
          logo: luddyLogo,
        },
        {
          name: "Indiana Sports Corp.",
          logo: ISCLogo,
        },
      ],
    },
    role: ["front-end developer", "web designer"],
    type: "internship",
    problem:
      "Attendees needed an easy-to-use way to discover and navigate on foot to sponsored events and businesses (including certain hotels, bars and restaurants.)",
    challenge:
      "Consolidate sponsored events and venues into a mobile-friendly interactive web map of downtown Indianapolis that supported intuitive, real-world wayfinding.",
    description:
      "An interactive downtown Indianapolis map built for visitors attending the 2024 Olympic Swim Trials.",
    solutions: [
      {
        category: "Technical Direction",
        title: "React + Mapbox Foundation",
        description:
          "I recommended using a combination of Mapbox and React to balance customization, anticipated usage, and future iteration.",
      },
      {
        category: "Sponsored Locales",
        title: "Centralized Experience",
        description:
          "We consolidated sponsored events and partner businesses into one interactive map app.",
      },

      {
        category: "Navigation Element",
        title: "Mobile Wayfinding",
        description:
          "Confirmed with user-testing, we designed the mobile experience to help identify sponsored locales and access walking routes downtown.",
      },
      {
        category: "Visual Integration",
        title: "Event Themed Interface",
        description:
          "I created a cohesive color system on brand with the given event logo and Olympic ring color scheme, along with a set of custom icon markers.",
      },
    ],
    demos: [
      {
        id: "experience-indy-location",
        title: "Navigate downtown events & sponsored locations",
        preview: experienceIndyLocationDemo,
        video: experienceIndyLocationDemo,
      },
      {
        id: "experience-indy-filter-locales",
        title: "Filter different location types",
        preview: experienceIndyFilterDemo,
        video: experienceIndyFilterDemo,
      },
    ],
    results: [
      "The completed application, Experience 317, provided attendees with centralized way to discover local events and navigate downtown Indianapolis. It's mobile-friendly interface featured custom iconography and an event-specific theme.",
      "Our second-to-last version included small-pool usability testing (five users) to ensure intuitiveness and icon recognition. The app was then deployed through Indiana Sports Corp's web infrastructure at experience317.com, which has been retired.",
    ],
    thumbnail: experienceIndyThumb,
    stack: [
      lightIcons.react,
      lightIcons.vite,
      lightIcons.sass,
      lightIcons.mapbox,
    ],
    liveUrl: "https://experience-indy.netlify.app",
  },

  {
    id: "tech-tunes",
    title: "Tech Tunes E-Commerce App",
    isFeatured: false,
    role: ["front-end developer", "web designer"],
    type: "project demo",
    problem:
      "This music e-commerce site involves products with different attributes: varying from vinyl and merch to studio equipment. The main problem being solved was making a reusable interface that unifies the different data structures.",
    challenge:
      "Building a maintainable system that could normalize data while supporting functionality like fuzzy searching, sorting, product details page, and cart behavior while maintaining responsiveness.",
    description:
      "A music-commerce interface featuring filtering, search, product details, and cart functionality created for modularity",
    solutions: [
      {
        category: "Normalize Data",
        title: "React + Data Mapping",
        description:
          "I created reusable mapping utilities to transform vinyl, merch, and tech products into consistent structures that could be shared across search, cart, and display logic.",
      },
      {
        category: "Reusable Components",
        title: "Build Modular UI",
        description:
          "Built shared product cards, selectors, layouts, and utilities that could adapt to different product types without duplicating the interface for each category.",
      },

      {
        category: "State Management",
        title: "Persist vs. Temporary States",
        description:
          "Used Context and useReducer to manage shared cart behavior, with localStorage for cart persistence and separate sessionStorage state for the Buy Now flow.",
      },
      {
        category: "Product Discovery",
        title: "Search, Filter & Sort",
        description:
          "Implemented fuzzy search, category-aware filtering, and URL-based sorting so users could browse differently structured products through one consistent experience.",
      },
    ],
    demos: [
      {
        id: "recently-viewed",
        title: "Revisit recently viewed products",
        preview: ttRecentlyViewedThumb,
        video: ttRecentlyViewedDemo,
      },
      {
        id: "add-to-cart",
        title: "Add a merch item with size selection to the cart",
        preview: ttAddToCartThumb,
        video: ttAddToCartDemo,
      },
      {
        id: "search",
        title: "Fuzzy search across the vinyl catalog",
        preview: ttSearchThumb,
        video: ttSearchDemo,
      },
      {
        id: "sort",
        title: "Sort products by price, category, or relevance",
        preview: ttSortThumb,
        video: ttSortDemo,
      },
    ],
    results: [
      "Tech Tunes developed into a responsive, multi-category e-commerce application that brings vinyl, merchandise, and studio equipment into one consistent shopping experience. Users can search and sort across product types, manage a persistent cart, revisit recently viewed products, and use a separate Buy Now flow through simulated checkout and order confirmation.",

      "The final application combines reusable architecture with responsive design, accessibility considerations, resilient loading and error states, performance optimizations, and automated testing—resulting in a more complete and maintainable front-end experience.",
    ],
    thumbnail: techTunesThumb,
    stack: [lightIcons.react, lightIcons.vite, lightIcons.sass],
    liveUrl: "https://tech-tunes-commerce.vercel.app/",
  },

  {
    id: "fizz-fix",
    title: "Fizz Fix",
    isFeatured: false,
    role: ["front-end developer", "web designer"],
    type: "project demo",
    problem:
      "Fizz Fix needed to present a playful soda-shop brand while still supporting practical interactions like menu browsing, location discovery, and cart management across desktop and mobile.",
    challenge:
      "Create a responsive React experience that balanced a highly branded visual design with reusable components, centralized cart state, interactive Mapbox locations, and reliable mobile behavior.",
    description:
      "A responsive soda-shop web application featuring menu browsing, interactive locations, cart functionality, and a heavily branded visual experience.",
    solutions: [
      {
        category: "Brand Integration",
        title: "Design Into Interface",
        description:
          "Translated the Fizz Fix visual identity into a responsive React interface using custom typography, layered graphics, video, glass effects, and reusable section layouts.",
      },
      {
        category: "State Management",
        title: "Centralized Cart Logic",
        description:
          "Used Context and useReducer to manage cart state across the application, supporting item additions, removals, quantity updates, cart clearing, and order flow behavior.",
      },
      {
        category: "Location Discovery",
        title: "Interactive Mapbox Experience",
        description:
          "Integrated Mapbox GL JS with location data so users could browse store locations, select a location, view map updates, and access pickup, delivery, and directions actions.",
      },
      {
        category: "Responsive UX",
        title: "Mobile-First Refinement",
        description:
          "Refined navigation, cards, hero content, cart layouts, typography, and interactive elements across breakpoints to keep the experience usable and visually consistent on smaller screens.",
      },
    ],
    demos: [
      {
        id: "intro",
        title: "Introduction to Fizz Fix",
        preview: fizzIntroThumb,
        video: fizzIntroDemo,
      },
      {
        id: "add-checkout",
        title: "Add item to the cart & checkout demo",
        preview: fizzAddCheckoutThumb,
        video: fizzAddCheckoutDemo,
      },
      {
        id: "locations",
        title: "Show location search & preview",
        preview: fizzLocationThumb,
        video: fizzLocationDemo,
      },
    ],
    results: [
      "Fizz Fix became a complete responsive soda-shop experience with menu browsing, cart interactions, location discovery, order confirmation, and reusable UI patterns across the application.",

      "The final build combines custom branding with React component architecture, Context and useReducer state management, Mapbox integration, accessibility improvements, responsive refinements, and production deployment through Vercel.",
    ],
    thumbnail: fizzFixThumb,
    stack: [
      lightIcons.react,
      lightIcons.vite,
      lightIcons.sass,
      lightIcons.mapbox,
    ],
    liveUrl: "https://fizz-fix.vercel.app/",
  },
];
