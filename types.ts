export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  subscribers: string;
  text: string;
}

export interface PortfolioItem {
  id: string;
  imageUrl: string;
  title: string;
}

export interface Creator {
  name: string;
  subscribers: string;
  avatar: string;
  verified: boolean;
}

export enum StepType {
  DISCOVER = 'Discover & Strategy',
  DESIGN = 'Design & Refinement',
  DELIVERY = 'Final Delivery'
}