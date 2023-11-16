import 'little-state-machine';



export type Requirements = {
   content: string,
   items: string[]
}


export type Role = {
  content: string,
  items: string[]
}


export type JobPost = {
  id: string,
  company: string;
  logo: string;
  logoBackground: string;
  postedAt: number;
  position: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: Requirements;
  role: Role;
  postedById: string;
}

export type FormStep = {
  step: number
}

declare module 'little-state-machine' {
  interface GlobalState {
    data: {
      email: string;
      role: string;
      password: string;
    },
    jobPost: JobPost,
    formStep: FormStep;
    sidebarState: {
      status: number
    };
  }
}