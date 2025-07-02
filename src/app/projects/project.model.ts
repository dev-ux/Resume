export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  image?: string;
  presentation: {
    context: string;
    definition: string;
    objectives: string;
    challenges: string[];
  };
  steps: {
    analysis: string[];
    design: string[];
    implementation: string[];
  };
  actors: {
    main: Actor[];
    interactions: Interaction[];
  };
  results: {
    personal: string[];
    company: string[];
  };
  future: {
    immediate: string[];
    longTerm: string[];
    current: string[];
  };
  criticalAnalysis: string;
  relatedSkills: string[];
  demo?: string;
  strengths?: string[];
  weaknesses?: string[];
  improvements?: string[];
}

export interface Actor {
  name: string;
  role: string;
  department: string;
  needs: string[];
}

export interface Interaction {
  actors: string[];
  description: string;
  frequency: string;
}
