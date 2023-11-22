

const EmployerWelcomeCard = (props: any) => {
    return (
        <div className="basis-6/12 space-y-10 md:space-y-20 text-app-dark-grey">
            <h1 className="text-3xl">Welcome to your dashboard</h1>
            <p className="">You have posted {props.postedJobCount} job posts</p>
            <p className="">You have 0 job application</p>
        </div>
    )
}

export default EmployerWelcomeCard
