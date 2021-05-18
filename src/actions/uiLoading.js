import { types } from "../types/types";


export const startUiLoading = ()=>({
    type: types.uiLoading
});

export const finishUiLoading = ()=>({
    type: types.uiFinishLoading
})