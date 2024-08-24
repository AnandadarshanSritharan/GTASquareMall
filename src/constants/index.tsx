import { BotMessageSquare, Droplet } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import { Briefcase } from "lucide-react";
import { Store } from "lucide-react";
import { Diamond } from "lucide-react";
import { Wallet } from "lucide-react";
import { Pizza } from "lucide-react";
import { Home } from "lucide-react";
import { Banknote } from "lucide-react";
import { Flower } from "lucide-react";
import { Eye } from "lucide-react";
import { Globe } from "lucide-react";
import { Plane } from "lucide-react";
import { Columns } from "lucide-react";
import { Music } from "lucide-react";
import { Shirt } from "lucide-react";
import { Laptop } from "lucide-react";
import { Ruler } from "lucide-react";
import { Hammer } from "lucide-react";
import { Printer } from "lucide-react";
import { Droplets } from "lucide-react";
import { Star } from "lucide-react";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#" },
  { label: "Shops", href: "#" },
  { label: "Location", href: "https://www.google.com/maps/place/5215+Finch+Ave+E,+Scarborough,+ON+M1S+4Z8,+Canada/@43.8096132,-79.2570082,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4d130255cd78d:0x18ecd85698c81779!8m2!3d43.8096132!4d-79.2570082!16s%2Fg%2F11bw3yld7q?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D" },
  { label: "Contact US", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <Briefcase />,
    text: "Professional Offices",
    description:
      "Modern and well-equipped office spaces designed for businesses seeking a professional environment. Ideal for meetings, consultations, and day-to-day operations.",
  },
  {
    icon: <Store />,
    text: "Retail Stores",
    description:
      "Vibrant and diverse shopping spaces featuring a range of products from fashion to electronics. Perfect for customers looking for the latest trends and essentials.",
  },
  {
    icon: <Diamond />,
    text: "Jewelleries",
    description:
      "Elegant and timeless collections of fine jewelry, including rings, necklaces, and bracelets. Ideal for special occasions or adding a touch of luxury to everyday wear.",
  },
  {
    icon: <Wallet />,
    text: "Financial Services",
    description:
      "Comprehensive solutions for managing finances, including banking, investment advice, and insurance. Tailored to help individuals and businesses achieve their financial goals with expert guidance.",
  },
  {
    icon: <Pizza />,
    text: "Food Outlet",
    description:
      "A variety of dining options offering delicious meals and snacks, from quick bites to gourmet dishes. Perfect for satisfying cravings and enjoying a diverse culinary experience.",
  },
  {
    icon: <Home />,
    text: "Estate Services",
    description:
      "Professional management and advisory for real estate needs, including property sales, rentals, and investments. Designed to help clients navigate the property market with ease and expertise.",
  },
  {
    icon: <Banknote />,
    text: "Mortgage Services",
    description:
      "Assistance with securing home loans and refinancing options, providing tailored solutions for purchasing or renovating properties. Expert advice to help navigate the mortgage process and find the best rates.",
  },
  {
    icon: <Flower />,
    text: "Florist",
    description:
      "Beautifully arranged flowers and floral gifts for all occasions. From elegant bouquets to custom arrangements, perfect for adding a touch of beauty and charm to any event or space.",
  },
  {
    icon: <Eye />,
    text: "Optical & Contact Lenses",
    description:
      "Comprehensive eye care solutions including prescription glasses, contact lenses, and eye exams. Providing clear vision and stylish eyewear to meet individual needs and preferences.",
  },
  {
    icon: <Globe />,
    text: "Foreign Exchanges",
    description:
      "Services for currency exchange and international money transfers. Convenient and secure options for travelers and businesses dealing with foreign currencies.",
  },
  {
    icon: <Plane />,
    text: "Travel and Tour Agencies",
    description:
      " Expert planning and booking services for vacations, business trips, and tours. Offering tailored travel experiences, including transportation, accommodations, and guided tours to ensure memorable journeys.",
  },
  {
    icon: <Columns />,
    text: "Drapes and Blinds",
    description:
      "Stylish and functional window coverings that enhance privacy, control light, and complement interior decor. Available in various materials and designs to suit any room or aesthetic.",
  },
  {
    icon: <Music />,
    text: "Video, Audio, CD/ DVD Stores",
    description:
      "A wide selection of movies, music, and multimedia content on CDs and DVDs. Ideal for entertainment enthusiasts seeking the latest releases or classic favorites in physical formats.",
  },
  {
    icon: <Shirt />,
    text: "Textiles/ Fashion Stores",
    description:
      "Trendy and high-quality fabrics, clothing, and accessories for all styles and occasions. Perfect for finding unique textiles and fashionable apparel to suit individual tastes.",
  },
  {
    icon: <Laptop />,
    text: "Computer Sales & Services",
    description:
      "Comprehensive solutions for purchasing, repairing, and maintaining computers and accessories. Offering expert advice, technical support, and customized setups to meet personal and business needs.",
  },
  {
    icon: <Ruler />,
    text: "Architects",
    description:
      "Professional design and planning services for residential, commercial, and industrial projects. Creating innovative and functional spaces that meet client needs and adhere to building regulations.",
  },
  {
    icon: <Hammer />,
    text: "Builders and Developers",
    description:
      "Expert construction and development services for residential and commercial projects. Overseeing the entire building process from design to completion, ensuring quality and timely execution.",
  },
  {
    icon: <Printer />,
    text: "Print Shop/ Signs And Graphics Studios",
    description:
      "Custom printing and graphic design services for a variety of needs, including business cards, banners, signage, and promotional materials. Tailored to create high-quality, visually appealing materials for branding and communication.",
  },
  {
    icon: <Droplets/>,
    text: "Beauty Spa",
    description:
      "Relaxing and rejuvenating treatments including massages, facials, and body therapies. Offering a serene environment to enhance well-being and beauty with professional care and personalized services.",
  },
  {
    icon: <Star />,
    text: "And Many More...",
    description:
      "A diverse range of additional services and offerings available to meet various needs and interests. Explore our wide selection to find everything you’re looking for under one roof.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
