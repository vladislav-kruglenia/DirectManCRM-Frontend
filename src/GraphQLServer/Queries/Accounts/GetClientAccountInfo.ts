import {gql} from "@apollo/client";


export const GetClientAccountData = gql`
    query GetClientAccountData($userId: String!){
        getClientAccountInfo(
            userId: $userId
        ){
            projectsInProgress{...projectMainData}
            managedProjects{...projectMainData}
            frozenProjects{...projectMainData}
            completedProjects{...projectMainData}
        }
    }

    fragment projectMainData on MainProjectData{
        projectName, projectStatus, deadline, projectId
    }
`;