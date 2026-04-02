 export type project = {
    title: string;
    imgUrl: string;
    description: string;
    techStack: string[];
    liveLink: string;
    githubLink: string;
    details:string[];
  };
 const projects: project[] = [
  {
    title: "Gym Management",
    imgUrl: "/gym.png",
    description: "A full-stack web application for managing gym operations, including member registration, subscription plans, and attendance tracking.",
    techStack: ["React", "Node", "Express", "MongoDB"],
    liveLink: "https://gymmanagementapp-admin.onrender.com",
    githubLink: "https://github.com/maheshkose/GymManagementApp.git",
    details: [
      "Developed a full-stack gym management system to streamline member registration, subscription handling, and attendance tracking.",
      "Implemented secure authentication and role-based access control (RBAC) using JWT for user and admin management.",
      "Built features for employee and member management, improving operational efficiency.",
      "Designed a finance dashboard to monitor revenue, subscriptions, and payment history.",
      "Created a responsive and user-friendly UI using React for seamless user experience.",
      "Developed RESTful APIs using Node.js and Express with MongoDB for efficient data handling."
    ]
  },
  {
    title: "Quick Food Client",
    imgUrl: "/quickfr.png",
    description: "A food delivery web application where users can browse menus, place orders, and track their order status in real-time.",
    techStack: ["React", "Node", "Express", "MongoDB"],
    liveLink: "https://quick-food-2.onrender.com",
    githubLink: "https://github.com/maheshkose/Quick-food.git",
    details: [
      "Built a client-side food ordering platform enabling users to browse menus and place orders seamlessly.",
      "Implemented dynamic cart management and real-time order tracking features.",
      "Integrated secure user authentication using JWT and cookie-based session handling.",
      "Optimized UI/UX with responsive design for better accessibility across devices.",
      "Connected frontend with RESTful APIs for efficient data flow and performance."
    ]
  },
  {
    title: "Quick Food Dashboard",
    imgUrl: "/quickds.png",
    description: "An admin dashboard for managing food delivery operations, including order management, menu updates, and customer insights.",
    techStack: ["React", "Node", "Express", "MongoDB"],
    liveLink: "https://quick-food-admin.onrender.com",
    githubLink: "https://github.com/maheshkose/Quick-food.git",
    details: [
      "Developed a dedicated admin dashboard to manage orders, menus, and customer data efficiently.",
      "Implemented role-based access control (RBAC) for secure admin operations.",
      "Built features for real-time order status updates and management.",
      "Enhanced operational efficiency through centralized control of food delivery workflows.",
      "Designed responsive UI components using React for smooth admin experience."
    ]
  },
  {
    title: "Hospital Management Dashboard",
    imgUrl: "/hosdash.png",
    description: "A comprehensive admin panel for managing hospital operations such as patient records, doctor profiles, and appointment scheduling.",
    techStack: ["React", "Node", "Express", "MongoDB"],
    liveLink: "https://hospital-managment-dashboard.onrender.com",
    githubLink: "https://github.com/maheshkose/hospital-managment.git",
    details: [
      "Engineered an admin dashboard to manage hospital operations including doctors, patients, and appointments.",
      "Implemented secure authentication and authorization for admin access.",
      "Developed features for appointment scheduling, doctor management, and patient communication.",
      "Ensured efficient data flow through RESTful APIs and backend optimization.",
      "Designed a scalable and responsive interface using React."
    ]
  },
  {
    title: "Hospital Management Frontend",
    imgUrl: "/hospitalfrontend.png",
    description: "A user-friendly frontend application where patients can explore hospital services, book appointments, and communicate with staff.",
    techStack: ["React", "Node", "Express", "MongoDB"],
    liveLink: "https://hospital-managment-frontend.onrender.com",
    githubLink: "https://github.com/maheshkose/hospital-managment.git",
    details: [
      "Developed a patient-facing application for exploring hospital services and booking appointments.",
      "Implemented messaging functionality for communication between patients and hospital staff.",
      "Integrated secure login and session handling using JWT.",
      "Built responsive UI for seamless experience across mobile and desktop devices.",
      "Connected frontend with backend APIs for real-time data updates."
    ]
  },
  {
    title: "Pixabay Clone",
    imgUrl: "/pixabay.png",
    description: "A clone of the Pixabay platform built for practice, allowing users to search and explore high-quality images using an API.",
    techStack: ["React", "Node", "Express", "MongoDB"],
    liveLink: "https://pixabay-two-mu.vercel.app/",
    githubLink: "https://github.com/maheshkose/pixabay.git",
    details: [
      "Developed a Pixabay clone enabling users to search and explore images using external APIs.",
      "Implemented dynamic search functionality with optimized API calls.",
      "Designed a clean and responsive UI using React for improved user experience.",
      "Handled API integration and data rendering efficiently.",
      "Enhanced performance through optimized component structure and state management."
    ]
  }
];

export default projects;