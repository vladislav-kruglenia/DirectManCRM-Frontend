import React, {FC, useState} from "react";
import style from "./TariffEditing.module.scss";
import projectEditingStyle from "../../ProjectEditing.module.scss";
import ValueDisplay from "../../DisplayingDifferentData/InputEditMode";
import {
    AddNewServicePropsType,
    DeleteTariffPropsType,
    DisplayDeadlineTariffPropsType,
    DisplayNumberButtonPropsType,
    DisplayNumberEnum,
    DisplayTariffNamePropsType,
    DisplayTariffPricePropsType,
    DisplayTariffPropertiesPropsType,
    PaymentMethodPropsType
} from "../Types/TariffEditingTypes";
import {FormTypeEnum} from "../../DisplayingDifferentData/Types/InputEditModeTypes";
import {DisplayTypeEnum} from "../../DisplayingDifferentData/Types/DisplayingDifferentDataTypes";
import {IconButton, Typography} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import Button from "@material-ui/core/Button";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import AttachMoneySharpIcon from '@material-ui/icons/AttachMoneySharp';
import UpdateSharpIcon from '@material-ui/icons/UpdateSharp';
import ClearIcon from '@material-ui/icons/Clear';


export let DisplayTariffName: FC<DisplayTariffNamePropsType> = (props) => {
    let [editModeStatus, changeEditModeStatus] = useState(props.tariffName === "");

    //let editModeStatus = props.tariffName === null;
    return <div className={style.TariffNameContainer}>
        <div className={style.DisplayTariffNameContainer}>
            <Typography className={style.DisplayTariffName} component={'h6'} variant={"h6"}>
                <ValueDisplay
                    inputLabel={'Название тарифа'}
                    editModeStatus={editModeStatus}
                    valueGlobal={props.tariffName}
                    changeValueGlobal={props.changeTariffName}
                    idNumbers={props.idNumbers}
                    displayType={DisplayTypeEnum.text}
                    type={FormTypeEnum.text}
                    setEditModeInProps={(value) => {
                        changeEditModeStatus(value)
                    }}
                />
            </Typography>
        </div>
        <DeleteTariff
            changeTariffStatus={props.changeTariffStatus}
            tariffId={props.tariffId}
            idDirection={props.idDirection}
            runEditModeStatus={() => {
                changeEditModeStatus(true)
            }}
        />
    </div>

};

export let DeleteTariff: FC<DeleteTariffPropsType> = (props) => {
    return <div className={style.DeleteTariffContainer}>
        <div className={style.DeleteTariff}>
            <IconButton className={style.buttonEditTariffName} size={"medium"} href={''} aria-label="delete"
                        onClick={() => {
                            props.runEditModeStatus(true)
                        }}>
                <EditIcon fontSize={"inherit"}/>
            </IconButton>
            <IconButton className={style.buttonEditTariffName} size={"medium"} about={'Убрать тариф из заказа'} href={''} aria-label="delete"
                        onClick={() => {
                            props.changeTariffStatus(false, props.tariffId, props.idDirection)
                        }}>
                <ClearIcon fontSize={"inherit"}/>
            </IconButton>
        </div>
    </div>
};

export let DisplayTariffProperties: FC<DisplayTariffPropertiesPropsType> = (props) => {
    return <div className={style.DisplayTariffProperties}>
        <PaymentMethod
            changePaymentPackage={props.changePaymentPackage}
            paymentPackage={props.paymentPackage}
            tariffId={props.tariffId}
            idDirection={props.idDirection}
        />
        <DisplayTariffPrice
            paymentPackage={props.paymentPackage}
            totalPriceTariff={props.totalPriceTariff}
            changePacketPrice={props.changePacketPrice}
            idNumbers={props.idNumbers}
        />
        <DisplayDeadlineTariff
            deadlineTariff={props.deadlineTariff}
            changeDeadlineTariff={props.changeDeadlineTariff}
            idNumbers={props.idNumbers}
        />
    </div>
};

export let PaymentMethod: FC<PaymentMethodPropsType> = (props) => {
    return <div className={style.TariffProperty}>
        <div className={style.description}>
            <div className={projectEditingStyle.icon}>
                <AccountBalanceWalletRoundedIcon color={"action"} fontSize={"small"}/>
            </div>
            <div className="">Способ оплаты:</div>
        </div>
        <div className={style.value}>
            <Button href={''} variant="text" color="primary" onClick={() => {
                props.changePaymentPackage(!props.paymentPackage, props.tariffId, props.idDirection)
            }}>
                {props.paymentPackage ? ' Пакет' : ' Сумма стоимости услуг'}
            </Button>
        </div>
    </div>
};


export let DisplayTariffPrice: FC<DisplayTariffPricePropsType> = (props) => {
    return <div className={style.TariffProperty}>
        <div className={style.description}>
            <div className={projectEditingStyle.icon}>
                <AttachMoneySharpIcon color={"action"} fontSize={"small"}/>
            </div>
            <div>Цена тарифа:</div>
        </div>
        <div className={style.value}>
            {props.paymentPackage
                ? <ValueDisplay
                    valueGlobal={props.totalPriceTariff}
                    changeValueGlobal={props.changePacketPrice}
                    idNumbers={props.idNumbers}
                    displayType={DisplayTypeEnum.component}
                    type={FormTypeEnum.number}
                    editModeStatus={false}
                    displayComponent={<DisplayNumberButton
                        number={props.totalPriceTariff}
                        type={DisplayNumberEnum.price}
                    />}
                />
                : <Button href={''} variant="text" color="primary">
                    {props.totalPriceTariff} р.
                </Button>
            }
        </div>
    </div>
};

export let DisplayDeadlineTariff: FC<DisplayDeadlineTariffPropsType> = (props) => {
    return <div className={style.TariffProperty}>
        <div className={style.description}>
            <div className={projectEditingStyle.icon}>
                <UpdateSharpIcon color={"action"} fontSize={"small"}/>
            </div>
            <div>Количество дней на настройку:</div>
        </div>
        <div className={style.value}>
            <ValueDisplay
                valueGlobal={props.deadlineTariff}
                changeValueGlobal={props.changeDeadlineTariff}
                idNumbers={props.idNumbers}
                displayType={DisplayTypeEnum.component}
                type={FormTypeEnum.number}
                editModeStatus={false}
                displayComponent={<DisplayNumberButton
                    type={DisplayNumberEnum.day}
                    number={props.deadlineTariff}
                />}
            />
        </div>
    </div>
};
export let AddNewService: FC<AddNewServicePropsType> = (props) => {
    return <div>
        <Button variant={"text"}
                size={"small"}
                href={''}
                onClick={() => {
                    props.addService(props.idDirection, props.tariffId)
                }}>
            <div className={projectEditingStyle.icon}>
                <PlaylistAddIcon color={"action"}/>
            </div>
            Добавить услугу
        </Button>
    </div>
};

export let DisplayNumberButton: FC<DisplayNumberButtonPropsType> = (props) => {
    return <div className={style.valueChildren}>
        <Button href={''} variant="text" color="primary">
            {props.type === DisplayNumberEnum.number && props.number}
            {props.type === DisplayNumberEnum.price && `${props.number} р.`}
            {props.type === DisplayNumberEnum.day && `${props.number} дн.`}
        </Button>
    </div>
};




