import { IMIDIInput } from "@midival/core";
import { UnregisterCallback } from "@midival/core";
import type { Input } from "midi";
import jzz = require("jzz");

export class NodeMIDIInput implements IMIDIInput {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly manufacturer: string
    ) {
        // Connecting to input?
        this.input
    }

    private _inp;
    private get input() {
        if (!this._inp) {
            this._inp = jzz().openMidiIn(this.name)
        }
        return this._inp
    }

    async onMessage(callback): Promise<UnregisterCallback> {
        const input = await this.input
        let isActive = true;

        const cb = (msg) => {
            callback({
                receivedTime: Date.now(),
                data: Uint8Array.from(msg)
            })
        }
        const resp = await input.connect(cb)

        return () => {
            input.disconnect(cb)
        }
    }
}
