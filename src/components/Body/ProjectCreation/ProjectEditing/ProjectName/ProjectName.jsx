import React from "react";
import ValueDisplay from "../DisplayingDifferentData/InputEditMode";

export let ProjectName = (props) => {
    let nameProject = props.nameProject;
    /*if (nameProject === "") {
        if (props.clientContacts.length > 0 && (props.clientContacts[0].email !== "")) {
            nameProject = props.clientContacts[0].email
        } else {
            nameProject = 'Название проекта не выбрано'
        }
    }*/
    return <div>
        <h2>
            <ValueDisplay
                valueGlobal={nameProject}
                changeValueGlobal={props.changeNameProject}
                idNumbers={null}
                displayType={"text"}
                type={"text"}
            />
        </h2>
    </div>
};

/*
let checkProjectName = (changeNameProject)*/
