import { InjectableRegistrationOptions } from "./InjectableRegistrationOptions";
import { injectables } from "./injectables";

export function registerInjectable<T>(injectableToken: string, options?: InjectableRegistrationOptions<T>) {
    injectables.push({ injectableToken, options })

}