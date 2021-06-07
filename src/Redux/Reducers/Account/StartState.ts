import {LinkClientAccountBody, StartStateType} from "./Types/Account.types";
import {AccountPages} from "../../../AppGlobal/AppGlobalTypes/LinksComponents";
import {v4 as uuidv4} from 'uuid';

export class StartStateClientAccount {
    links = [
            {link: AccountPages.Projects, linkName: "Проекты"},
            {link: AccountPages.Profile, linkName: "Мой профиль"},
            {link: AccountPages.Instructions, linkName: "Инструкции"},
            {link: AccountPages.Feedback, linkName: "Обратная связь"},
            {link: AccountPages.NewProject, linkName: "Создание проекта"},
        ];

    indexMainLink = this._getStartIndexMainLink(this.links) === -1 ? 0 : this._getStartIndexMainLink(this.links);

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
                    projectStatus: "",
                    idProjectTab: uuidv4(),
                },
            ],
            links: this.links,
            indexMainLink: this.indexMainLink,
        }
    }
}

