import React, {useState} from "react";

export const usePopperComponentParams = (onClickFunc?: () => void) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        if(onClickFunc) onClickFunc()
    };

    return {anchorEl, setAnchorEl, handleClick,}
};