



export const initialState = {
    data: {
        email: '',
        role: '',
        password: '',
    },
    jobPost: {
        id: '',
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
    },
    formStep: {
        step: 0,
        isSuccess: false,
        isFailed: false,
    },
    sidebarState: {
        status: 0,
    },
    currentSelectedJob: {
        id: '',
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
    },
}


