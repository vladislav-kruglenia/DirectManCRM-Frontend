import {gql} from "@apollo/client";


export const GetProjectData = gql`
    query GetProjectData($projectId: String!){
        getProjectInfoForClient(
            projectId: $projectId
        ){
            projectId, projectName, projectStatus, deadline,
            projectData{
                projectStages{isActive,stageType}
                dates{numberDaysForProject,startDate}
                dept{isExists,amountDebt,debtPercentage}
                orderedServices{tariffName,services{isReady,serviceName}}
                projectNotes, briefId
            }
        }
    }
`;
