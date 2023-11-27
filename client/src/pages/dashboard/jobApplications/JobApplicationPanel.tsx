import JobApplicationForm from "./jobApplicationForm/JobApplicationForm"

const JobApplicationPanel = () => {
  return (
    <section className="w-full">
        <div className="w-full flex flex-col justify-center items-center ">
            <h2 className="text-4xl font-bold my-10">Appication to ... name of the job psot</h2>
            <JobApplicationForm/>
        </div>
    </section>
  )
}

export default JobApplicationPanel