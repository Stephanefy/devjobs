import Button from "./Button"

function Footer({currentJob}: any) {
  return (
    <footer className='w-full h-24 bg-white dark:bg-app-very-black-blue mt-24'>
      <div className='w-5/6 lg:max-w-[700px] h-full flex justify-between items-center mx-auto'>
        <div>
          <h3 className='hidden md:block font-semibold dark:text-white'>
            {currentJob?.position}
          </h3>
          <span className="hidden md:inline-block text-app-gray text-sm">{currentJob.company}</span>
        </div>
        <div className="hidden md:block">
        <Button 
            text1='Apply'
            text2='Now'
            background='bg-app-violet'
            textColor='white'  
            paddingX='px-6'
            paddingY='py-2'
          />
        </div>
          <button className={`block md:hidden w-full px-6 py-2 bg-app-violet rounded-md text-white`}>
          <span className="text-base mr-1 font-semibold">Apply</span>
          <span className="text-base font-semibold">Now</span>
        </button>
      </div>
    </footer>
  )
}

export default Footer