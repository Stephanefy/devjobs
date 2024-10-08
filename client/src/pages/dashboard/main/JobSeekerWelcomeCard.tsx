import { useQuery } from "react-query"
import { getApplicationCount } from "../../../api/applications"
import { useLocalStorage } from "../../../hooks/useLocaleStorage"
import { User } from "../../../context/AuthContext"
import { is } from "date-fns/locale"


const JobSeekerWelcomeCard = (props: any) => {

    const [ user ] = useLocalStorage<User>("user", {} as User)
    

    const { data, isLoading, error } = useQuery('user',  () => getApplicationCount(user.id))

    console.log(data)

    return (
        <div className="md:basis-6/12 space-y-10 md:space-y-20 text-app-dark-grey">
            <h1 className="text-3xl">Welcome to your dashboard</h1>
            {isLoading ? <p>Loading...</p> :  <p className="">You have applied to {data.number_of_applications} job{data.number_of_applications > 1 ? "s" : ""}</p> }
            <p className="">You have 0 message</p>
        </div>
    )
}

export default JobSeekerWelcomeCard
