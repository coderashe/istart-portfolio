/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  icon: string;
  category?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  levelLabel: string; // e.g., 'Expert', 'Advanced', 'Proficient', 'Intermediate'
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  details?: string;
}
