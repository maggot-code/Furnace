import { POPUP_SYMBOLE } from "../shared/context";

export function useDialog(key) {
    const popup = inject(POPUP_SYMBOLE);

    return popup.cache.take(key);
}

export default useDialog;
