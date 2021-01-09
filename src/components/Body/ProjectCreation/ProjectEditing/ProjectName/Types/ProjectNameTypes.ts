import {
    changeNameProjectType,
    ClientContactType
} from "../../../../../../redux/Types/ProjectCreation/ProjectCreationReducerTypes";

export type PropsTypes = {
    nameProject: string
    clientContacts: Array<ClientContactType>
    changeNameProject: changeNameProjectType
}