import { injectables } from "./injectables";

export function useInjectable(injectableToken: string) {
    const injectable = injectables.find(injectable => injectable.injectableToken === injectableToken);
    return injectable?.options?.useValue;
}