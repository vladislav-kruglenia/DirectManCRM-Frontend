import React from 'react';
import style from './ProjectEditing.module.css'


let ProjectEditing = (props) => {
    let directions = props.servicesAndNamesTariffs.map(d => <DirectionEditing
        key={d.idDirection}
        namesTariffs={d.namesTariffs}
        nameDirection={d.nameDirection}/>);
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
        namesServices={t.namesServices}
        tariffName={t.tariffName}/>);
    return <div>
        <h3>{props.nameDirection}</h3>
        {props.namesTariffs.length > 0
            ? tariffs
            : <div>Нет выбранных тарифов</div>}
        <button>Добавить тариф</button>
    </div>
};

let TariffEditing = (props) => {
    let services = props.namesServices.map(s => <ServiceEditing
        key={s.serviceId}
        serviceName={s.serviceName}
        serviceId={s.serviceId}
        serviceStatus={s.serviceStatus}
    />);
    return <div>
        <h4>{props.tariffName}</h4>
        {services}
    </div>
};

let ServiceEditing = (props) => {
    return <div>
        <div>{props.serviceName} - {`${props.serviceStatus}`}</div>
    </div>
};



export default ProjectEditing