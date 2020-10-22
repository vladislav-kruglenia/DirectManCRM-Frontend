import React, {useState} from 'react';
import style from './ProjectEditing.module.css'


let ProjectEditing = (props) => {
    let directions = props.servicesAndNamesTariffs.map(d => <DirectionEditing
        key={d.idDirection}
        namesTariffs={d.namesTariffs}
        nameDirection={d.nameDirection}
        idDirection={d.idDirection}
        addTariff={props.addTariff}
        addService={props.addService}
        changeTariffStatus={props.changeTariffStatus}
        deleteService={props.deleteService}
        changeServiceName={props.changeServiceName}
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
        key={t.tariffId}
        idDirection={props.idDirection}
        namesServices={t.namesServices}
        tariffId={t.tariffId}
        tariffName={t.tariffName}
        addService={props.addService}
        changeTariffStatus={props.changeTariffStatus}
        deleteService={props.deleteService}
        changeServiceName={props.changeServiceName}
    />);
    return <div>
        <h3>{props.nameDirection}</h3>
        {props.namesTariffs.length > 0
            ? tariffs
            : <div>Нет выбранных тарифов</div>}
        <button onClick={() => props.addTariff(props.idDirection)}>Добавить тариф</button>
    </div>
};

let TariffEditing = (props) => {
    let services = props.namesServices.map(s => <ServiceEditing
        key={s.serviceId}
        serviceName={s.serviceName}
        serviceId={s.serviceId}
        serviceStatus={s.serviceStatus}
        idDirection={props.idDirection}
        tariffId={props.tariffId}
        deleteService={props.deleteService}
        changeServiceName={props.changeServiceName}
    />);
    return <div>
        <div>
            <h4>{props.tariffName} -
                <button onClick={() => props.changeTariffStatus(false, props.tariffId, props.idDirection)}>
                    Убрать тариф
                </button>
            </h4>
        </div>
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
    let [serviceName, changeServiceNameHook] = useState(props.serviceName);

    return <div>
        {!editMode
            ? <div onDoubleClick={() => setEditMode(true)}>
            {serviceName} - {`${props.serviceStatus} `}
            <button onClick={() => props.deleteService(props.idDirection, props.tariffId, props.serviceId)}>
                Удалить услугу
            </button>
        </div>
            : <div>
                <div className={style.editLayer}>
                    <input
                        onChange={(e) => changeServiceNameHook(e.currentTarget.value)}
                        type="text"
                        value={serviceName}
                        autoFocus={true}
                    />
                    <button onClick={() => {
                        props.changeServiceName(
                            props.idDirection,
                            props.tariffId,
                            props.serviceId,
                            serviceName
                        );
                        setEditMode(false);
                    }}>Сохранить</button>
                </div>
                {/*сделали под блоком редактирования большой широкий элемент на весь экран,
                 но полностью прозрачный,поставили на нём клик событие и скрыли оба слоя*/}
                <div className={style.transparentLayer} onClick={()=>{
                    changeServiceNameHook(props.serviceName);
                    setEditMode(false);
                }}>{}</div>
            </div>
        }
    </div>
};


export default ProjectEditing