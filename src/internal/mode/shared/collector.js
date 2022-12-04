import { transObject } from "~/shared/trans";

let ModeEntity;

export function wrapModeEntity() {
    ModeEntity = ModeEntity ?? import.meta.globEager("../entity/**/*.{js,ts}", { eager: true });
    return {
        group: ModeEntity,
        paths: Object.keys(transObject(ModeEntity))
    }
}

export default wrapModeEntity();
