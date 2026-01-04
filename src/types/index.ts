/**
 * @copyright 2025 vianawill
 * @license Apache-2.0
 */

import type { JSX } from 'react';

export type ProjectType = {
  imgSrc: string;
  title: string;
  description: string;
  projectLink: string;
};

export type ExperienceType = {
  year: string;
  title: string;
  institute: string;
  desc: string;
  category: 'job' | 'education'
  report?: string
};

export type ServiceType = {
  title: string;
  desc: string;
  icon: JSX.Element;
};

export type ToolsType = {
  imgSrc: string;
  label: string;
};

export type StatsType = {
  number: string;
  label: string;
};

export type TestimonialsType = {
  name: string;
  role: string;
  image: string;
  text: string;
  link: string;
};

export type LinksType = {
  label: string;
  link: string;
  icon: React.ElementType;
};