import {compose} from "redux";
import {IfAuthRedirect} from "../../HOC/IfAuthRedirect";
import Body from "./Body";

export default compose(IfAuthRedirect)(Body)
