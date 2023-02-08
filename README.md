# MO-LIT-EXTENDS

Adds features to lit element components.

## MutablesLitPropsControllerr

This controller adds methods to the component that detect on change in reactive properties of Array and Object type and force rendering of the component when it occurs.

It is based on Polymer behavior.

### Example

```javascript
import { LitElement, html, css } from "lit";
import { MutablesLitPropsController } from "mo-lit-extends/mutablesLitPropsController";

export class MyComponent extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `,
    ];

    render() {
        return html`<div>
                <ul>
                    ${this.cities.map((city) => html`<li>${city}</li>`)}
                </ul>
            </div>
            <div>${JSON.stringify(this.obj)}</div>`;
    }

    static properties = {
        cities: { type: Array },
    };

    constructor() {
        super();

        // Add controller
        new MutablesLitPropsController(this);

        this.cities = [
            "Albacete",
            "Almería",
            "Badajoz",
            "Barcelona",
            "Cáceres",
            "Cádiz",
            "Ciudad real",
            "Córdoba",
            "Granada",
            "Huelva",
            "Jaen",
            "La Coruña",
            "Lérida",
            "Madrid",
            "Sevilla",
            "Zamora",
            "Zaragoza",
        ];

        this.obj = {
            nested1: {
                nested2: "Hello",
            },
        };
    }

    firstUpdated() {
        setTimeout(() => {
            // Push Valencia to cities property and render component
            this.push("cities", "Valencia");
        }, 1500);

        setTimeout(() => {
            // Change nested2 value and render component
            this.set("obj.nested1.nested2", "Good bye");
        }, 3000);
    }
}
customElements.define("my-component", MyComponent);
```

## Available methods

The following methods are added to the component

```javascript
this.copyWithin("ref", ...params);
this.fill("ref", ...params);
this.pop("ref");
this.push("ref", ...params);
this.set("ref", value);
this.shift("ref");
this.splice("ref", ...params);
this.unshift("ref", ...params);
```

Where "ref" is the reference to the object or array as string that we want to modify and (...params) the parameters supported by the array function in javascript.

### Examples

```javascript
this.copyWithin("myObjectProp.arrayProp", 0, 3, 4);
this.splice("myArrayProp", 1, 1);
this.splice("myArrayProp", 1, 1, "Feb");
```
