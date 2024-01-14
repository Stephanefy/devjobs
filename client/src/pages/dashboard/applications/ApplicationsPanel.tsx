import { useContext } from 'react';
import ApplicationTable from '../../../components/ApplicationTable';
import { useQuery } from 'react-query';
import { getApplications } from '../../../api/applications';
import { AuthContext } from '../../../context/AuthContext';

const ApplicationsPanel = () => {

    const { state } = useContext(AuthContext)
    const userId = state.user?.id as unknown as string


    const { isLoading, data, error } = useQuery('applications', () =>
        getApplications(userId)
    )

    console.log(data)

    return (
        <section className="min-h-screen w-10/12 my-8 bg-gray-200 pt-8 md:pl-8 lg:pl-16 lg:px-8">
            <ApplicationTable applicationsData={data} isLoading={isLoading}/>
        </section>
    )
}

export default ApplicationsPanel
