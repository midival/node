import { IMIDIOutput } from "@midival/core";

const midi = require("midi");

export class NodeMIDIOutput implements IMIDIOutput {
    private _id: number;
    private _output;

    constructor(id: number) {
        this._id = id;
        this._output = new midi.Output();
        this._output.openPort(this._id);
    }
    send(data: Uint8Array | number[]): void {
        console.log(this._output);
        this._output.sendMessage([data[0], data[1], data[2]]);
    }

    get id(): string {
        return String(this._id);
    }

    get name(): string {
        return this._output.getPortName(this._id);
    }

    
}