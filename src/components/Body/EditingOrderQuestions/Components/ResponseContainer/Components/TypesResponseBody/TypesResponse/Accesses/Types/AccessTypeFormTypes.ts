import { StringSchema, /*StringSchemaConstructor*/} from "yup";


export type AccessTypeFormProps = {
    accessName: string,
    accessLink: string,
    exitEditMode: () => void,
    editNameAndLinkAccess: (accessLink: string, accessName: string) => void
}

export type ValuesFormType = {
    accessName: string,
    accessLink: string
}

declare module "yup" {
    interface StringSchema {
        AccessNamesValidateFunction (accessName: string, accessNames: Array<string>): StringSchema;
    }
}

// export const string: StringSchemaConstructor;