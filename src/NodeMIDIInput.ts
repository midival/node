import { IMIDIInput } from "@midival/core";
import { OnMessageCallback, UnregisterCallback } from "@midival/core/dist/wrappers/inputs/IMIDIInput";

import midi = require("midi");


export class NodeMIDIInput implements IMIDIInput {

    private _id: number;
    private _input;

    constructor(id: number) {
        this._id = id;
        this._input = new midi.Input();
        this._input.openPort(this._id);
    }


    async onMessage(callback: OnMessageCallback): Promise<UnregisterCallback> {
        let isActive = true;
        this._input.on("message", (deltaTime, message) => {
            if (!isActive) {
                return;
            }
            // FIXME: delta time should get recomputed to the actual time.
            callback({
                receivedTime: deltaTime,
                data: message,
            });
        });

        return () => {
            isActive = false;
        };
    }

    get id(): string {
        return String(this._id);
    }

    get name(): string {
        return this._input.getPortName(this._id);
    }

    
}