const ASSETS_URL = "https://wlfxrqgczmkdisaygmra.supabase.co/storage/v1/object/public/portfolio-assets";

export interface Profile {
    name: string;
    role: string;
    bio: string;
    cvUrl: string;
    photoUrl: string;
    socialLinks: {
        github: string;
        linkedin: string;
        twitter: string;
    };
}

export const profile: Profile = {
    name: "Jhonatan Espinal",
    role: "Frontend Developer",
    bio: "Soy un joven desarrollador con más de 2 años de experiencia, creo y doy mantenimiento constate a los sitios web de Grupo IAMSA para sus diversas marcas, así como mantengo mi propio producto en linea dando soporte y actualizaciones constantes para garantizar una excelente experiencia de usuario.",
    cvUrl: `${ASSETS_URL}/cv/CV_Jhonatan_Espinal_Garcia.pdf`,
    photoUrl: `${ASSETS_URL}/profile/jhonatan-espinal.webp`,
    socialLinks: {
        github: "https://github.com/JhonnDevJs",
        linkedin: "https://www.linkedin.com/in/jhoneg",
        twitter: "https://x.com/JhonEG17",
    }
}

export interface Experience {
    id: number;
    title: string;
    company: string;
    date: string;
    description: string;
}

export const experience: Experience[] = [
    {
        id: 1,
        title: "Desarrollador",
        company: "CalculFisc",
        date: "20 / mayo / 2024 - Actualidad",
        description: "Diseño y desarrollo de la plataforma web de CalculFisc, una aplicación web que permite a los usuarios calcular impuestos, administrar sus nóminas, verificar su salario real despues de impuestos y previsualizar facturas para personas fisicas en el regimen RESICO."
    },
    {
        id: 2,
        title: "Desarrollador Frontend | SEO jr",
        company: "Grupo IAMSA",
        date: "20 / feb / 2025 - Actualidad",
        description: "Lidero la reconstrucción de sitios web clave, logrando un aumento del 40-50% en rendimiento, accesibilidad y buenas practicas de SEO."
    },
    {
        id: 3,
        title: "Desarrollador Frontend",
        company: "JEG Dev Studios",
        date: "20 / mayo / 2024 - Actualidad",
        description: "Liderazgo y desarrollo integral de proyectos full-stack. Responsable del desarrollo frontend con React/Next.js, backend con Node.js, y la implementación de estrategias SEO y marketing digital."
    }
]

export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    image: string;
    link: string;
    github: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "CalculFisc",
        description: "Diseño y desarrollo del sitio web y aplicación web de CalculFisc, que se encuentra en producción y con más de 10 usuarios activos.",
        tech: ["Next", "TypeScript", "Tailwind CSS", "Vercel", "Firebase", "Strapi", "Google Cloud", "Stripe"],
        image: `${ASSETS_URL}/projects-img/CalculFisc.webp`,
        link: "https://www.calculfisc.com",
        github: "https://github.com/JhonnDevJs/CalculFisc-Web"
    },
    {
        id: 1,
        title: "Sema UI",
        description: "Paquete de npm de web components de UI optimizados para instrustacion de metadatos y datos estructurados Schema",
        tech: ["NPM", "TypeScript", "Lit", "Github", "Vite"],
        image: `${ASSETS_URL}/projects-img/sema-ui.webp`,
        link: "https://www.calculfisc.com",
        github: "https://github.com/JhonnDevJs/CalculFisc-Web"
    },
    {
        id: 2,
        title: "The Simpsons Game",
        description: "Mini juego web del clasico memorama utilizando web components y consumiendo la api de los simpsons",
        image: `${ASSETS_URL}/projects-img/the-simpsons-memo.webp`,
        tech: ["Lit", "The Simpsons API", "Vite", "Vercel"],
        link: "https://the-simpsons-memo.vercel.app/",
        github: "https://github.com/JhonnDevJs/liverpool-shop-clone",
    },
    {
        id: 3,
        title: "Liverpool Shop Clone",
        description: "Clon del e-commerce de Liverpool, enfocado en replicar y mejorar la UX y el flujo visual de la tienda aprovechando más el uso del area util de la pantalla.",
        image: `${ASSETS_URL}/projects-img/liverpool-shope-clone.webp`,
        tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
        link: "https://liverpool-shop-clone.vercel.app/",
        github: "https://github.com/JhonnDevJs/liverpool-shop-clone",
    },
    {
        id: 4,
        title: "JEG Dev Studios WEB",
        description: "Sitio web corporativo con frontend en React/Next.js y backend en Node.js/Express, Integración de API de Blogger y Firebase, con despliegue en Vercel y Render y optimización SEO",
        tech: ["Next", "TypeScript", "Tailwind CSS", "Vercel", "Render", "Blogger", "Firebase"],
        image: `${ASSETS_URL}/projects-img/JEGDEVSTUDIOS.webp`,
        link: "https://www.jegdevstudios.com",
        github: "https://github.com/JhonnDevJs/jeg-dev-studios-site",
    },
]

export const certifications = [
    "React para principiantes",
    "React en acción: De cero a experto en Desarrollo Front End",
    "HTML esencial",
    "HTML y CSS desde cero",
    "CSS Avanzado",
    "Diseño accesible e inclusivo",
    "Introducción a Git y GitHub",
    "BD Relacionales con MySQL",
    "Bases de datos con un café",
    "QA Desde cero: Principios",
    "Machine Learning con un café",
    "Curso de iniciación al desarrollo con IA",
    "Redes Neuronales desde cero: Un enfoque practico y fácil de entender",
    "Python",
    "C++ Esencial",
    "Java para principiantes",
]