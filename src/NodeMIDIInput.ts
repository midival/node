import { IMIDIInput } from "@midival/core";
import { UnregisterCallback } from "@midival/core";
import type { Input } from "midi";

export class NodeMIDIInput implements IMIDIInput {

    private _id: string;
    private _input: Input;
    private _name: string;

    constructor(id: string, name: string, input: Input) {
        this._id = id;
        this._name = name;
        this._input = input;
    }

    async onMessage(callback): Promise<UnregisterCallback> {
        let isActive = true;
        this._input.on("message", (deltaTime, message) => {
            if (!isActive) {
                return;
            }
            // FIXME: delta time should get recomputed to the actual time.
            callback({
                receivedTime: deltaTime,
                data: Uint8Array.from(message),
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
        return this._name;
    }

    get manufacturer(): string {
        return "Unknown";
    }
}