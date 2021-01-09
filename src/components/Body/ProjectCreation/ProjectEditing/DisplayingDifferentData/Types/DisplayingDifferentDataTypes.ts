export enum DisplayTypeEnum {
    price = "price",
    number = "number",
    text = "text",
    component = "component",
}

export type DisplayingDifferentDataPropsType = {
    displayType: DisplayTypeEnum,
    value: string,
    displayComponent: any
}