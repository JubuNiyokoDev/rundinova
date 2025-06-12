import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "comlab",
    title: "ComLab - Plateforme d'Innovation Collaborative",
    description: "Une plateforme complète de mise en relation entre talents, experts, mentors, startups, entreprises et ONG. ComLab facilite l'accompagnement de projets et offre des cours certifiés pour étudiants.",
    badge: "Plateforme",
    features: ["Matching Intelligent", "Formations Certifiées", "Multilingue (FR/EN/KR)", "Accompagnement Projets"],
    icon: "Users",
    gradient: "from-blue-500 to-purple-600",
    website: "https://comlab-burundi.com",
    status: "En production"
  },
  {
    id: "techsafe",
    title: "TechSafe - Protection Intelligente contre la VBG",
    description: "Application mobile utilisant l'IA pour lutter contre la violence basée sur le genre. Signalement intelligent, information sur les droits, et système d'alerte d'urgence en Kirundi pour les communautés locales.",
    badge: "IA & Sécurité",
    features: ["IA Intégrée", "App Mobile", "Alerte d'Urgence", "Interface Kirundi"],
    icon: "Shield",
    gradient: "from-pink-500 to-red-600",
    status: "En développement"
  },
  {
    id: "iwanje",
    title: "Iwanje - E-commerce Intelligent Multi-vendeurs",
    description: "Plateforme e-commerce avancée avec blockchain intégrée pour produits, services et immobilier. Filtres intelligents, géolocalisation, recommandations automatiques et support multilingue incluant le Kirundi.",
    badge: "E-commerce",
    features: ["Blockchain", "Géolocalisation", "Immobilier", "IA Recommandations"],
    icon: "ShoppingCart",
    gradient: "from-cyan-500 to-blue-600",
    status: "En développement"
  }
];