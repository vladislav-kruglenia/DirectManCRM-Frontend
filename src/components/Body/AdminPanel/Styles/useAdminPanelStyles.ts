import {createUseStyles} from "react-jss";

let AdminContainer = {
    backgroundColor: "red",
};

export const useAdminPanelStyles = createUseStyles({
    AdminContainer: {...AdminContainer}
});