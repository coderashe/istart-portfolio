/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, SkillCategory, Experience, Education } from "../types";

export const personalInfo = {
  name: "Simbarashe Start Marindwa",
  title: "Software Engineer | Kotlin • Flutter • .NET • Spring Boot",
  tagline: "Building high-performance mobile apps and enterprise backend integrations that power real-world financial systems",
  aboutSummary: "Software Engineer with 5+ years of experience specializing in Android development and enterprise backend integrations. Strong foundation in Kotlin and Flutter for mobile, and C#/.NET and Java Spring Boot for backend. Built Host-to-Host banking integrations (Ecobank, FBC Bank) and SAP REST API layers at Delta Corporation Zimbabwe. Passionate about bridging mobile experiences with robust backend systems.",
  location: "Harare, Zimbabwe (Open to Remote - US/EMEA/APAC)",
  phone: "+263 776 815 030",
  email: "simbastart.dev@gmail.com",
  github: "https://github.com/simbastart001",
  linkedin: "https://linkedin.com/in/simba-start-07a37a173",
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Mobile Development",
    skills: [
      { name: "Kotlin (Android)", level: 98, levelLabel: "Expert" },
      { name: "Flutter (Dart)", level: 85, levelLabel: "Advanced" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "C# / .NET / Web API", level: 90, levelLabel: "Proficient" },
      { name: "Java (Spring Boot)", level: 82, levelLabel: "Proficient" },
      { name: "RESTful API Development", level: 92, levelLabel: "Advanced" },
    ],
  },
  {
    title: "Database & Cloud Tools",
    skills: [
      { name: "SQL Server", level: 85, levelLabel: "Proficient" },
      { name: "Firebase", level: 85, levelLabel: "Proficient" },
      { name: "Docker / Azure", level: 72, levelLabel: "Intermediate" },
    ],
  },
  {
    title: "Tools & Practices",
    skills: [
      { name: "Git / GitHub", level: 90, levelLabel: "Advanced" },
      { name: "Postman", level: 88, levelLabel: "Proficient" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "banking-bridge",
    name: "Global Banking Bridge",
    description: "Middleware platform enabling real-time Host-to-Host transaction processing between enterprise banking systems (Ecobank, FBC Bank) and SAP. Handles high-volume financial transactions with automated reconciliation.",
    tags: ["C#", ".NET", "SAP RFC", "REST API", "Banking Integration"],
    icon: "🏦",
  },
  {
    id: "pos-system",
    name: "Cross-Platform POS System",
    description: "Offline-first point-of-sale system built with Kotlin and Firebase, featuring real-time sync, high-concurrency invoicing, and stock control. Backend powered by Spring Boot.",
    tags: ["Kotlin", "Spring Boot", "Firebase", "SQL Server"],
    icon: "📱",
  },
  {
    id: "aximos-erp",
    name: "AXIMOS ERP",
    description: "Mobile-first fiscalized ERP system with full ZIMRA compliance. Designed for field use with offline capabilities and real-time data sync.",
    tags: ["Kotlin", "Spring Boot", "SQL Server", "ZIMRA Integration"],
    icon: "⚙️",
  },
  {
    id: "analytics-bot",
    name: "Smart Analytics Bot",
    description: "AI-powered conversational BI assistant deployed to Microsoft Teams. Surfaces SAP purchase order price anomalies and reduces ad-hoc reporting requests by 30%.",
    tags: ["AI", "Power BI", "Azure", "SAP Integration"],
    icon: "🤖",
  },
  {
    id: "fiscal-scraper",
    name: "ZIMRA Fiscal Scraper",
    description: "Python automation tool for real-time invoice validation and auditing against ZIMRA fiscal device data, feeding results into a Power BI dashboard.",
    tags: ["Python", "Power BI", "Automation", "ZIMRA"],
    icon: "🧾",
  },
];

export const experienceTimeline: Experience[] = [
  {
    id: "exp-delta",
    company: "Delta Corporation Zimbabwe",
    role: "Software Developer",
    period: "Jan 2026 – Present",
    bullets: [
      "Engineered Host-to-Host banking integrations with Ecobank and FBC Bank, securing high-throughput financial message transmissions.",
      "Built SAP REST API integration layers in C# .NET, connecting logistics and finance workflows.",
      "Deployed AI analytics agents inside Microsoft Teams, reducing ad-hoc reporting and validation requests by 30%.",
      "Automated critical reporting workflows, successfully reducing manual effort by 40% across departments."
    ],
  },
  {
    id: "exp-ipos",
    company: "iPOS Mobile Systems",
    role: "Software Engineer (Remote Contract)",
    period: "Jun 2024 – Sep 2025",
    bullets: [
      "Built an offline-first cross-platform POS system leveraging Kotlin Multiplatform and Firebase for robust remote sync.",
      "Designed high-concurrency backend services using Spring Boot and SQL Server for rapid invoicing and real-time inventory management."
    ],
  },
  {
    id: "exp-axis",
    company: "Axis Solutions",
    role: "Senior Software Developer",
    period: "Oct 2022 – Jan 2024",
    bullets: [
      "Integrated enterprise ERP systems with ZIMRA FDMS (Fiscal Device Management System) to enforce real-time fiscal tax compliance.",
      "Optimized query performance and index strategies in Microsoft SQL Server, achieving a 25% query latency reduction.",
      "Developed custom Python automation auditing tools to cross-validate fiscal device invoice receipts against core ledger transactions."
    ],
  },
  {
    id: "exp-innet",
    company: "Innet Technologies",
    role: "Technical Project Manager",
    period: "Jan 2020 – Mar 2021",
    bullets: [
      "Led high-performing development teams to deliver enterprise-grade Human Resource Management systems using Agile/Scrum.",
      "Facilitated client requirements gatherings, sprint planning, backlog grooming, and successful product delivery milestones."
    ],
  },
];

export const educationAndCertifications: Education[] = [
  {
    id: "edu-degree",
    degree: "BSc (Hons) Information Systems",
    institution: "Midlands State University",
    year: "2020",
    details: "Graduated with honors, focusing on databases, system analysis, and programming foundations.",
  },
  {
    id: "cert-kotlin",
    degree: "Android Kotlin Developer Nanodegree",
    institution: "Udacity",
    year: "2024",
    details: "Specialized in advanced Android layouts, coroutines, jetpack components, work managers, and performance tuning.",
  },
  {
    id: "cert-pm",
    degree: "Google Project Management Certificate",
    institution: "Coursera",
    year: "2023",
    details: "Learned professional project governance, risk management, Agile/Scrum techniques, and project initiation.",
  },
  {
    id: "cert-africa",
    degree: "Google Africa Android Developer Program Alumni",
    institution: "Google Developers",
    year: "2022",
    details: "Intensive training program mastering modern Android best practices, Kotlin, material design, and offline storage.",
  },
];
