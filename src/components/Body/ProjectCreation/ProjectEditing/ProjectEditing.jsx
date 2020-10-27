import React, {useState} from 'react';
import style from './ProjectEditing.module.css'
import EditMode from "./InputEditMode";


let ProjectEditing = (props) => {
    let directions = props.servicesAndNamesTariffs.map(d => <DirectionEditing
        // values
        key={d.idDirection}
        namesTariffs={d.namesTariffs}
        nameDirection={d.nameDirection}
        idDirection={d.idDirection}
        directionTotalPrice={d.directionTotalPrice}

        // functions
        addTariff={props.addTariff}
        addService={props.addService}
        changeTariffStatus={props.changeTariffStatus}
        deleteService={props.deleteService}
        changeServiceName={props.changeServiceName}
        changeTariffName={props.changeTariffName}
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

        // functions
        addService={props.addService}
        changeTariffStatus={props.changeTariffStatus}
        deleteService={props.deleteService}
        changeServiceName={props.changeServiceName}
        changeTariffName={props.changeTariffName}
    />);
    return <div>
        <h3>{props.nameDirection}</h3>
        {props.namesTariffs.length > 0
            ? <div>
                {tariffs}
                Итоговая цена: {`${props.directionTotalPrice} р.`}
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
    />);
    let [editMode, setEditMode] = useState(false);

    return <div>
        {!editMode
            ? <div onDoubleClick={() => {
                setEditMode(true)
            }}>
                <h4>{props.tariffName} -
                    <button onClick={() => props.changeTariffStatus(false, props.tariffId, props.idDirection)}>
                        Убрать тариф
                    </button>
                </h4>
                <h5>
                    <div>
                        Цена тарифа: {props.totalPriceTariff}
                    </div>
                    <div>
                        Количество дней на настройку: {`${props.deadlineTariff}`}
                    </div>
                </h5>
            </div>
            : <EditMode
                changeNameGlobal={props.changeTariffName}
                idNumbers={{
                    idDirection: props.idDirection,
                    idTariff: props.tariffId
                }}
                nameGlobal={props.tariffName}
                setEditMode={(status) => {
                    setEditMode(status)
                }}
            />
        }
        {props.namesServices.length > 0
            ? services
            : <div>Нет услуг</div>}
        <button onClick={() => props.addService(props.idDirection, props.tariffId)}>
            Добавить услугу
        </button>
    </div>
};

let ServiceEditing = (props) => {
    let [editMode, setEditMode] = useState(false);

    return <div>
        {!editMode
            ? <div onDoubleClick={() => setEditMode(true)}>
                {props.serviceName} - {`${props.servicePrice} р.`}
                <button onClick={() => props.deleteService(props.idDirection, props.tariffId, props.serviceId)}>
                    Удалить услугу
                </button>
            </div>
            : <EditMode
                changeNameGlobal={props.changeServiceName}
                idNumbers={{
                    idDirection: props.idDirection,
                    idTariff: props.tariffId,
                    idService: props.serviceId
                }}
                nameGlobal={props.serviceName}
                setEditMode={(status) => {
                    setEditMode(status)
                }}
            />
        }
    </div>
};

export default ProjectEditing
