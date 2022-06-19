import { IMIDIOutput } from "@midival/core";
import type { Output } from "midi";

export class NodeMIDIOutput implements IMIDIOutput {
    private _id: string;
    private _name: string;
    private _output: Output;

    constructor(id: string, name: string, output: Output) {
        this._id = id;
        this._name = name;
        this._output = output;
    }
    send(data: Uint8Array | number[]): void {
        console.log(this._output);
        this._output.sendMessage([data[0], data[1], data[2]]);
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