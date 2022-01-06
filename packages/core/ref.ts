type OnChangeCallback<T> = (value: T) => void;
type Getter<T> = () => T;
type Setter<T> = OnChangeCallback<T>;

export function ref<T>(v: T, options?: { applyOnChangeCallbackAfterInit?: boolean, onChange?: OnChangeCallback<T> }): [Getter<T>, Setter<T>] {
    let value = v;

    if (!!options?.applyOnChangeCallbackAfterInit && !!options?.onChange) {
        options.onChange(value);
    }

    const getValue = () => value;

    const setValue = (nextValue: T) => {
        value = nextValue;

        if (!!options?.onChange) {
            options.onChange(value);
        }
    }

    return [
        getValue,
        setValue
    ]
}