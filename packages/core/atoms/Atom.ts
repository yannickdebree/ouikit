
type EventListenerCallback<E> = (event?: E) => void;

export class Atom {
    private eventsListeners: {
        [event: string]: Array<EventListenerCallback<any>>;
    } = {}

    private changeDetections = new Array<(() => void)>();
    private conditionFactory?: () => boolean;
    private elseAtoms?: Array<Atom>

    getConditionFactory() {
        return this.conditionFactory;
    }

    if(conditionFactory: () => boolean) {
        this.conditionFactory = conditionFactory;
        return this;
    }

    getElseAtoms() {
        return this.elseAtoms;
    }
    else(...elseAtoms: Array<Atom>) {
        this.elseAtoms = elseAtoms;
        return this;
    }

    on<K extends keyof DocumentEventMap>(type: K, callback: EventListenerCallback<DocumentEventMap[K]>) {
        if (!this.eventsListeners[type]) {
            this.eventsListeners[type] = [];
        }

        this.eventsListeners[type].push(callback);

        return this;
    }

    detectChanges() {
        this.changeDetections.forEach(onChange => {
            onChange();
        })
        return this;
    }

    onChangesDetected(callback: () => void) {
        this.changeDetections.push(callback);
        return this;
    }

    getEventsListeners() {
        return this.eventsListeners;
    }
}