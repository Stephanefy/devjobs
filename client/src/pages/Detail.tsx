import React, { useEffect, useState, useContext } from 'react'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { JobContext } from '../context/JobContext'
import { JobPost } from '../types/global'

type CurrentJob = {
  
    id: number;
    company: string;
    logo: string;
    logoBackground: string;
    position: string;
    postedAt: string
    contract: string;
    location: string;
    website: string;
    apply: string;
    description: string;
    requirements?: {
      content?: string;
      items?: string[];
  },
  role?: {
    content?: string;
    items?: string[];
  }
  
};




const Detail = () => {

  const context = useContext(JobContext)

  const { id } = useParams()

  console.log(id)

  const [currentJob, setCurrentJob] = useState<JobPost | {}>({})

  useEffect(() => {
    let currJob = context!.jobsData.filter((e:JobPost) => e.id == id!)    
    console.log('currentjob',currJob)
    setCurrentJob({...currJob[0]})
  }, [])



  return (
    <>
      <Header currentJob={currentJob}/>
      <Body page="detail" currentJob={currentJob}/>
      <Footer currentJob={currentJob}/>
    </>
  )
}

export default Detail