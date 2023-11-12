import Button from './Button'



function Body({currentJob} : any) {
  return (
    <section className=" lg:w-[700px] bg-white dark:bg-app-very-black-blue rounded-md mx-auto mt-56 px-10 py-10 text-app-gray">
      <div>
        <span>{currentJob?.postedAt}</span>
        <span className="text-app-gray mx-2 text-6xl">.</span>
        <span>{" "}{currentJob?.contract}</span>
      </div>
      <div className='flex flex-col md:flex-row items-start md:items-center justify-between w-full'>
        <div className='my-2'>
          <h3 className='text-black dark:text-white text-3xl font-semibold'>{currentJob.position}</h3>
          <p className='text-app-violet'>{currentJob.location}</p>
        </div>
        <div className='hidden md:block'>
          <Button 
            text1='Apply'
            text2='Now'
            background='bg-app-violet'
            textColor='white'  
            paddingX='px-6'
            paddingY='py-2'
          />
        </div>
        <button className={`block md:hidden w-full px-6 py-2 bg-app-violet rounded-md text-white mt-2`}>
          <span className="text-base mr-1 font-semibold">Apply</span>
          <span className="text-base font-semibold">Now</span>
        </button>
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