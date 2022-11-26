export function ElementEntity() {
    const refs = ref(null);
    const ready = computed(() => !isNil(unref(refs)));

    return {
        refs,
        ready
    }
}

export default ElementEntity;
