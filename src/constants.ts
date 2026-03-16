import { HealthFacility, NewsItem, HealthProgram } from './types';

export const FACILITIES: HealthFacility[] = [
  {
    id: '1',
    name: 'Madang Provincial Hospital (Modilon)',
    type: 'Hospital',
    location: 'Madang Town',
    phone: '+675 422 2022',
    services: ['Emergency', 'Surgery', 'Maternity', 'Pediatrics', 'Outpatient'],
    hours: '24/7',
  },
  {
    id: '2',
    name: 'Alexishafen Health Center',
    type: 'Health Center',
    location: 'North Coast Road',
    phone: '+675 422 1234',
    services: ['General Medicine', 'Maternal Health', 'Immunization'],
    hours: '8:00 AM - 4:00 PM',
  },
  {
    id: '3',
    name: 'Gaubin Rural Hospital',
    type: 'Hospital',
    location: 'Karkar Island',
    phone: '+675 422 5678',
    services: ['General Medicine', 'Surgery', 'Maternity'],
    hours: '24/7',
  },
];

export const NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Urgent: Vaccination Drive in Madang District',
    date: '2026-03-15',
    category: 'Alert',
    summary: 'MPHA is launching a massive immunization campaign starting next Monday.',
    content: 'Full details about the vaccination drive...',
  },
  {
    id: '2',
    title: 'New Health Post Opened in Bogia',
    date: '2026-03-10',
    category: 'News',
    summary: 'A new community health post has been commissioned to serve the remote areas of Bogia.',
    content: 'The new health post will provide basic healthcare services...',
  },
];

export const PROGRAMS: HealthProgram[] = [
  {
    id: 'maternal',
    title: 'Maternal & Child Health',
    description: 'Ensuring safe motherhood and healthy children through comprehensive care.',
    objectives: ['Reduce maternal mortality', 'Improve infant health'],
    services: ['Antenatal care', 'Postnatal care', 'Immunization'],
    icon: 'Baby',
  },
  {
    id: 'malaria',
    title: 'Malaria Prevention',
    description: 'Combating malaria through distribution of nets and community awareness.',
    objectives: ['Reduce malaria incidence', 'Educate on prevention'],
    services: ['Net distribution', 'Testing', 'Treatment'],
    icon: 'ShieldCheck',
  },
];
