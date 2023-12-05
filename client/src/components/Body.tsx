import { useContext } from 'react'
import Button from './Button'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';


interface Props {
  page: "detail" | "application"
  currentJob: any
}


function Body({page, currentJob} : Props) {


  console.log("from body",currentJob)

  const { state } = useContext(AuthContext);
  const { user } = state;
  const navigate = useNavigate()

  const navigateToApplicationForm = (id: string) => {
    navigate(`/job-applications`, {state: {jobId: id}})
  }


  return (
    <section className={classNames(` w-[500px] lg:w-[700px] bg-white dark:bg-app-very-black-blue rounded-md mx-auto px-10 text-app-gray`, {
      "mt-56 py-10": page === "detail",
      "mx-8" : page === "application"
    })}>
      <div>
        <span>{new Date(currentJob?.postedAt).toLocaleDateString()}</span>
        <span className="text-app-gray mx-2 text-6xl">.</span>
        <span>{" "}{currentJob?.contract}</span>
      </div>
      <div className='flex flex-col md:flex-row items-start md:items-center justify-between w-full'>
        <div className='my-2'>
          <h3 className='text-black dark:text-white text-3xl font-semibold'>{currentJob.position}</h3>
          <p className='text-app-violet'>{currentJob.location}</p>
        </div>
        {
          user?.role === "JOB_SEEKER" && page == 'detail' ? (
          <div className='hidden md:block'>
            <Button 
              text1='Apply'
              text2='Now'
              background='bg-app-violet'
              textColor='text-white'  
              paddingX='px-6'
              paddingY='py-2'
              onClick={() => navigateToApplicationForm(currentJob.id)}
            />
          </div>

          ) : null
        }
        {
          user?.role === "JOB_SEEKER" ? (
            <button className={`block md:hidden w-full px-6 py-2 bg-app-violet rounded-md text-white mt-2`} onClick={() => navigateToApplicationForm(currentJob.id)}>
                <span className="text-base mr-1 font-semibold">Apply</span>
                <span className="text-base font-semibold">Now</span>
          </button>
          ) : null
        }
  
      </div>
      <div className='mt-8'>
          <p>
            {currentJob.description}
          </p>
      </div>
      <div className='mt-8'>
        <h4 className='mb-4 text-black dark:text-white text-lg font-semibold'>
          Requirements
        </h4>
        <p>
          {currentJob?.requirements?.content}
        </p>
        <ul className='my-4 px-3'>
          {
            currentJob?.requirements?.items.map((requirement:string) => (
                <li className='my-2 list-disc px-8'>{requirement}</li>
            ))
          }
        </ul>
      </div>
            <div className='mt-8'>
        <h4 className='mb-4 text-black dark:text-white text-lg font-semibold'>
          What you will do ?
        </h4>
        <p>
          {currentJob?.role?.content}
        </p>
        <ol className='my-4'>
          {
            currentJob?.role?.items.map((requirement: string, index: number) => (
                <li key={index} className='my-2 list-none flex'>
                  <span className='inline-block text-app-violet pr-6'>{index + 1}</span>
                  <span className='inline-block'>{requirement}</span>
                </li>
            ))
          }
        </ol>
      </div>
    </section>
  )
}

export default Body