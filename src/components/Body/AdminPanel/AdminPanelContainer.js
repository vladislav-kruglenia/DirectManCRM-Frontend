import AdminPanel from "./AdminPanel";
import {compose} from "redux";
import {IfAuthRedirect} from "../../../HOC/IfAuthRedirect";

export default compose(IfAuthRedirect)(AdminPanel)
