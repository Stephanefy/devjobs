import { createStore } from 'little-state-machine'


createStore({
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
        items: []
      },
      role: {
        content: '',
        items: []
      },
      postedById: ''
    },
    formStep:{
      step: 0,
    }
    
},{
  name: 'devjob-store',
  storageType: window.localStorage,
  persist: 'action'

})