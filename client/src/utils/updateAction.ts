import { JobPost, Requirements, Role } from '../types/global'
import { GlobalState } from 'little-state-machine'

const initialJobPostState = {
    id:'',
    company: '',
    logo: '',
    logoBackground: '',
    postedAt: 0,
    position: '',
    contract: '',
    location: '',
    website: '',
    apply: '',
    description: '',
    requirements: {
        content: '',
        items: [],
    },
    role: {
        content: '',
        items: [],
    },
    postedById: '',
}

export function updateSignUp(state: GlobalState, payload: any) {
    return {
        ...state,
        data: {
            ...state.data,
            ...payload,
        },
    }
}

export function updateJobPost(state: GlobalState, payload: JobPost) {
    return {
        ...state,
        jobPost: {
            ...state.jobPost,
            ...payload,
        },
    }
}

export function clearJobPost(state: GlobalState) {
    return {
        ...state,
        jobPost: {
            ...initialJobPostState,
        },
    }
}


export function setCurrentStep(state: GlobalState, payload: number) {
  return {
    ...state,
    formStep: {
      step: payload
    }
  }
}

export function updateJobPostStatus(state: GlobalState, payload: number) {
    return {
      ...state,
      formStep: {
        isSuccess: payload === 1 && true,
        isFailed: payload === 0 && false
      }
    }
  }

export function updateRequirements(state: GlobalState, payload: Requirements) {


    return {
        ...state,
        jobPost: {
            ...state.jobPost,
            requirements: {
                ...state.jobPost.requirements,
                content: payload.content,
                items: Object.values(payload.items),
            },
        },
    }
}

export function updateRole(state: GlobalState, payload: Role) {
    return {
        ...state,
        jobPost: {
            ...state.jobPost,
            role: {
                ...state.jobPost.role,
                content: payload.content,
                items: Object.values(payload.items),
            },
        },
    }
}

export function updateSidebarState(state: GlobalState, payload: number) {
    return {
        ...state,
        sidebarState: {
            status: payload
        }
    }
}
