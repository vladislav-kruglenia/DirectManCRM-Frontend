import {AccountPages} from "../../../../../../AppGlobal/AppGlobalTypes/LinksComponents";
import {LinkClientAccountBody} from "../../../Types/Account.types";

export class LinksService {
    links: LinkClientAccountBody[];
    indexMainLink: number;

    constructor() {
        this.links = this._getLinks();
        this.indexMainLink = this._getStartIndexMainLink(this.links);

    }

    private _getLinks(): LinkClientAccountBody[] {
        return [
            {link: AccountPages.Projects, linkName: "Проекты"},
            {link: AccountPages.Profile, linkName: "Мой профиль"},
            {link: AccountPages.Instructions, linkName: "Инструкции"},
            {link: AccountPages.Feedback, linkName: "Обратная связь"},
            {link: AccountPages.NewProject, linkName: "Создание проекта"},
        ];
    }

    private _getStartIndexMainLink(links: LinkClientAccountBody[]): number {
        const PathName = window.location.pathname;
        const indexMainLink = links.findIndex((linkData: LinkClientAccountBody) => {
            return linkData.link === PathName
        });

        return indexMainLink > -1 ? indexMainLink : 0
    }
}