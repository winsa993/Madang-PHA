export interface HealthFacility {
  id: string;
  name: string;
  type: 'Hospital' | 'Health Center' | 'Community Post' | 'Clinic';
  location: string;
  phone: string;
  services: string[];
  hours: string;
  coordinates?: { lat: number; lng: number };
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Alert' | 'News' | 'Announcement';
  summary: string;
  content: string;
  image?: string;
}

export interface HealthProgram {
  id: string;
  title: string;
  description: string;
  objectives: string[];
  services: string[];
  icon: string;
}
