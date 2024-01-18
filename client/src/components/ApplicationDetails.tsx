import Section from "./Section"
import DescriptionList from './DescriptionList';
import { useParams } from "react-router-dom";


const ApplicationDetails = () => {


  const params  = useParams();


  return (
    <Section>
        <DescriptionList dataName="applications" dataId={params.applicationId!}/>
    </Section>
  )
}

export default ApplicationDetails