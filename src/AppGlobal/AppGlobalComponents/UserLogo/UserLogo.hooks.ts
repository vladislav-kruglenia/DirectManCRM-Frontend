import style from "./UserLogo.module.scss"
import {UserLogoVariant} from "./UserLogo.types";

export const useLogoSizeStyle = (variantLogo: UserLogoVariant) => {
    let logoSizeStyle = style.small;
    switch (variantLogo) {
        case UserLogoVariant.small:
            logoSizeStyle = style.small;
            break;
    }
    return logoSizeStyle;
};