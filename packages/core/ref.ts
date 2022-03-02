type OnChangeCallback<T> = (value: T) => void;
type Getter<T> = () => T;
type NextValueFactory<T> = (oldValue: T) => T;
type Setter<T> = (nextValue: (T | NextValueFactory<T>)) => void;

export function ref<T>(v: T, options?: { applyOnChangeCallbackAfterInit?: boolean, onChange?: OnChangeCallback<T> }): [Getter<T>, Setter<T>] {
    let value = v;

    if (!!options?.applyOnChangeCallbackAfterInit && !!options?.onChange) {
        options.onChange(value);
    }

    const getValue = () => value;

    const setValue: Setter<T> = (nextValue) => {
        if (typeof nextValue === "function") {
            value = (nextValue as (NextValueFactory<T>))(value);
        } else {
            value = nextValue;
        }

        if (!!options?.onChange) {
            options.onChange(value);
        }
    }

    return [
        getValue,
        setValue
    ]
}