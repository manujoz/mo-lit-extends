export class MutablesLitPropsController {
    constructor(host) {
        this.host = host;
        this.host.addController(this);
        this.#addArrayMethods();
    }
    copyWithin(prop, ...params) {
        if (typeof prop !== "string") {
            throw new Error("Prop param must be an string");
        }

        if (prop.indexOf(".") === -1 && Array.isArray(this.host[prop])) {
            this.host[prop].copyWithin(...params);
            this.host.requestUpdate();
            return;
        }

        const parts = prop.split(/\.(?=[^.]+$)/);
        try {
            this.#getRefFromObject(this.host, parts[0])[parts[1]].copyWithin(...params);
            this.host.requestUpdate();
        } catch (err) {
            throw new Error(err);
        }
    }
    fill(prop, ...params) {
        if (typeof prop !== "string") {
            throw new Error("Prop param must be an string");
        }

        if (prop.indexOf(".") === -1 && Array.isArray(this.host[prop])) {
            this.host[prop].fill(...params);
            this.host.requestUpdate();
            return;
        }

        const parts = prop.split(/\.(?=[^.]+$)/);
        try {
            this.#getRefFromObject(this.host, parts[0])[parts[1]].fill(...params);
            this.host.requestUpdate();
        } catch (err) {
            throw new Error(err);
        }
    }
    pop(prop) {
        if (typeof prop !== "string") {
            throw new Error("Prop param must be an string");
        }

        if (prop.indexOf(".") === -1 && Array.isArray(this.host[prop])) {
            this.host[prop].pop();
            this.host.requestUpdate();
            return;
        }

        const parts = prop.split(/\.(?=[^.]+$)/);
        try {
            this.#getRefFromObject(this.host, parts[0])[parts[1]].pop();
            this.host.requestUpdate();
        } catch (err) {
            throw new Error(err);
        }
    }
    push(prop, ...params) {
        if (typeof prop !== "string") {
            throw new Error("Prop param must be an string");
        }

        if (prop.indexOf(".") === -1 && Array.isArray(this.host[prop])) {
            this.host[prop].push(...params);
            this.host.requestUpdate();
            return;
        }

        const parts = prop.split(/\.(?=[^.]+$)/);
        try {
            this.#getRefFromObject(this.host, parts[0])[parts[1]].push(...params);
            this.host.requestUpdate();
        } catch (err) {
            throw new Error(err);
        }
    }
    set(prop, value) {
        if (typeof prop !== "string") {
            throw new Error("Prop param must be an string");
        }

        if (prop.indexOf(".") === -1) {
            this.host[prop] = value;
            return;
        }

        const parts = prop.split(/\.(?=[^.]+$)/);
        try {
            this.#getRefFromObject(this.host, parts[0])[parts[1]] = value;
            this.host.requestUpdate();
        } catch (err) {
            throw new Error(err);
        }
    }
    shift(prop) {
        if (typeof prop !== "string") {
            throw new Error("Prop param must be an string");
        }

        if (prop.indexOf(".") === -1 && Array.isArray(this.host[prop])) {
            this.host[prop].shift();
            this.host.requestUpdate();
            return;
        }

        const parts = prop.split(/\.(?=[^.]+$)/);
        try {
            this.#getRefFromObject(this.host, parts[0])[parts[1]].shift();
            this.host.requestUpdate();
        } catch (err) {
            throw new Error(err);
        }
    }
    splice(prop, ...params) {
        if (typeof prop !== "string") {
            throw new Error("Prop param must be an string");
        }

        if (prop.indexOf(".") === -1 && Array.isArray(this.host[prop])) {
            this.host[prop].splice(...params);
            this.host.requestUpdate();
            return;
        }

        const parts = prop.split(/\.(?=[^.]+$)/);
        try {
            this.#getRefFromObject(this.host, parts[0])[parts[1]].splice(...params);
            this.host.requestUpdate();
        } catch (err) {
            throw new Error(err);
        }
    }
    unshift(prop, ...params) {
        if (typeof prop !== "string") {
            throw new Error("Prop param must be an string");
        }

        if (prop.indexOf(".") === -1 && Array.isArray(this.host[prop])) {
            this.host[prop].unshift(...params);
            this.host.requestUpdate();
            return;
        }

        const parts = prop.split(/\.(?=[^.]+$)/);
        try {
            this.#getRefFromObject(this.host, parts[0])[parts[1]].unshift(...params);
            this.host.requestUpdate();
        } catch (err) {
            throw new Error(err);
        }
    }
    #addArrayMethods() {
        this.host.copyWithin = this.copyWithin.bind(this);
        this.host.fill = this.fill.bind(this);
        this.host.pop = this.pop.bind(this);
        this.host.push = this.push.bind(this);
        this.host.shift = this.shift.bind(this);
        this.host.splice = this.splice.bind(this);
        this.host.unshift = this.unshift.bind(this);
        this.host.set = this.set.bind(this);
    }
    #getRefFromObject(obj, str) {
        return str.split(".").reduce((o, x) => {
            return o[x];
        }, obj);
    }
}
