import {LinkClientAccountBody, StartStateType} from "./Types/ClientAccountReducerTypes";
import {ClientAccountPages} from "../../../AppGlobal/AppGlobalTypes/LinksComponents";
import {v4 as uuidv4} from 'uuid';

export class StartStateClientAccount {
    links = [
            {link: ClientAccountPages.Projects, linkName: "Проекты"},
            {link: ClientAccountPages.Settings, linkName: "Настройки"},
            {link: ClientAccountPages.Instructions, linkName: "Инструкции"},
            {link: ClientAccountPages.Feedback, linkName: "Обратная связь"}
        ];


    private _getStartIndexMainLink(links: LinkClientAccountBody[]): number  {
        const PathName = window.location.pathname;
        return links.findIndex((linkData: LinkClientAccountBody) => {
            return linkData.link === PathName
        });

    }

    getStartState():StartStateType{
        return {
            currentProjectIndex: 0,
            viewedProjects: [
                {
                    isProjectSelected: false,
                    projectName: "",
                    projectId: "",
                    idProjectTab: uuidv4(),
                },
            ],
            links: this.links,
            indexMainLink: this._getStartIndexMainLink(this.links)
        }
    }
}

