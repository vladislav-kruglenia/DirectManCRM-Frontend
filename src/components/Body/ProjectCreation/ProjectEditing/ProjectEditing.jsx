import React, {useState} from 'react';
import style from './ProjectEditing.module.css'
import EditModeText from "./InputEditModeText";
import PriceDisplay from "./InputEditModeNumber";


let ProjectEditing = (props) => {
    let directions = props.servicesAndNamesTariffs.map(d => <DirectionEditing
        // values
        key={d.idDirection}
        namesTariffs={d.namesTariffs}
        nameDirection={d.nameDirection}
        idDirection={d.idDirection}
        directionTotalPrice={d.directionTotalPrice}
        paymentInFull={d.paymentInFull}

        // functions
        addTariff={props.addTariff}
        addService={props.addService}
        changeTariffStatus={props.changeTariffStatus}
        deleteService={props.deleteService}
        changeServiceName={props.changeServiceName}
        changeTariffName={props.changeTariffName}
        changePaymentPackage={props.changePaymentPackage}
        changeServicePrice={props.changeServicePrice}
        changePacketPrice={props.changePacketPrice}
        changeDeadlineTariff={props.changeDeadlineTariff}
        changePaymentInFull={props.changePaymentInFull}
    />);
    return <div className={style.bodyContainer}>
        <h2>Редактировать заказ</h2>
        {props.servicesAndNamesTariffs.length > 0
            ? directions
            : <div>Нет выбранных направлений</div>}
        <button>Оформить заказ</button>
    </div>
};

let DirectionEditing = (props) => {
    let tariffs = props.namesTariffs.map(t => <TariffEditing
        // values
        key={t.tariffId}
        idDirection={props.idDirection}
        namesServices={t.namesServices}
        tariffId={t.tariffId}
        tariffName={t.tariffName}
        totalPriceTariff={t.totalPrice}
        deadlineTariff={t.deadline}
        paymentPackage={t.paymentPackage}

        // functions
        addService={props.addService}
        changeTariffStatus={props.changeTariffStatus}
        deleteService={props.deleteService}
        changeServiceName={props.changeServiceName}
        changeTariffName={props.changeTariffName}
        changePaymentPackage={props.changePaymentPackage}
        changeServicePrice={props.changeServicePrice}
        changePacketPrice={props.changePacketPrice}
        changeDeadlineTariff={props.changeDeadlineTariff}
    />);
    return <div>
        <h3>{props.nameDirection}</h3>
        {props.namesTariffs.length > 0
            ? <div>
                {tariffs}
                <div>
                    Тип оплаты:
                    <div
                        className={`${props.paymentInFull && style.paymentInFull}`}
                        onClick={() => {props.changePaymentInFull(props.idDirection, true)}}
                    >
                        100%
                    </div>
                    <div
                        className={`${!props.paymentInFull && style.paymentInFull}`}
                        onClick={() => {props.changePaymentInFull(props.idDirection, false)}}
                    >
                        50%
                    </div>
                </div>
                <div>
                    {!props.paymentInFull && <div>Промежуточная цена: {props.directionTotalPrice / 2} р.</div>}
                    <div>Итоговая цена: {`${props.directionTotalPrice} р.`}</div>
                </div>
            </div>
            : <div>Нет выбранных тарифов</div>}

        <button onClick={() => props.addTariff(props.idDirection)}>Добавить тариф</button>
    </div>
};

let TariffEditing = (props) => {
    let services = props.namesServices.map(s => <ServiceEditing
        // values
        key={s.serviceId}
        serviceName={s.serviceName}
        serviceId={s.serviceId}
        servicePrice={s.servicePrice}
        idDirection={props.idDirection}
        tariffId={props.tariffId}

        // functions
        deleteService={props.deleteService}
        changeServiceName={props.changeServiceName}
        changeServicePrice={props.changeServicePrice}
    />);
    let [editMode, setEditMode] = useState(false);
    let idNumbers = {
        idDirection: props.idDirection,
        idTariff: props.tariffId
    };

    return <div>
        {!editMode
            ? <div onDoubleClick={() => {
                setEditMode(true)
            }}>
                <h4>{props.tariffName} -</h4>
            </div>
            : <EditModeText
                changeNameGlobal={props.changeTariffName}
                idNumbers={idNumbers}
                nameGlobal={props.tariffName}
                setEditMode={(status) => {
                    setEditMode(status)
                }}
            />
        }
        <button onClick={() => {
            props.changeTariffStatus(false, props.tariffId, props.idDirection)
        }}>
            Убрать тариф
        </button>
        <h5>
            <div onClick={() => {
                props.changePaymentPackage(!props.paymentPackage, props.tariffId, props.idDirection)
            }}>
                Способ оплаты:
                {props.paymentPackage ? ' Пакет' : ' Сумма стоимости услуг'}
            </div>
            <div>
                Цена тарифа: {props.paymentPackage
                ? <PriceDisplay
                    idNumbers={idNumbers}
                    price={props.totalPriceTariff}
                    changePrice={props.changePacketPrice}
                />
                : props.totalPriceTariff}
            </div>
            <div>
                Количество дней на настройку:
                <PriceDisplay
                    idNumbers={idNumbers}
                    price={props.deadlineTariff}
                    changePrice={props.changeDeadlineTariff}
                />
            </div>
        </h5>
        {props.namesServices.length > 0
            ? services
            : <div>Нет услуг</div>}
        <button onClick={() => props.addService(props.idDirection, props.tariffId)}>
            Добавить услугу
        </button>
    </div>
};

let ServiceEditing = (props) => {
    let [editModeServiceName, setEditModeServiceName] = useState(false);
    let idNumbers = {
        idDirection: props.idDirection,
        idTariff: props.tariffId,
        idService: props.serviceId
    };
    return <div>
        {!editModeServiceName
            ? <div onDoubleClick={() => setEditModeServiceName(true)}>
                {props.serviceName} -
            </div>
            : <EditModeText
                changeNameGlobal={props.changeServiceName}
                idNumbers={idNumbers}
                nameGlobal={props.serviceName}
                setEditMode={(status) => {
                    setEditModeServiceName(status)
                }}
            />
        }
        <div>
            <PriceDisplay
                idNumbers={idNumbers}
                price={props.servicePrice}
                changePrice={props.changeServicePrice}
            />
            <button onClick={() => {
                props.deleteService(props.idDirection, props.tariffId, props.serviceId)
            }}>
                Удалить услугу
            </button>
        </div>
    </div>
};

export default ProjectEditing
