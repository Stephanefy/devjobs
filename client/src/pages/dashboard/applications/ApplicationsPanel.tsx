import { useContext } from 'react';
import ApplicationTable from '../../../components/ApplicationTable';
import { useQuery } from 'react-query';
import { getApplications } from '../../../api/applications';
import { AuthContext } from '../../../context/AuthContext';
import Section from '../../../components/Section';
import { Outlet } from 'react-router-dom';

const ApplicationsPanel = () => {

    return (
        <Section>
            <Outlet/>
        </Section>
    )
}

export default ApplicationsPanel
