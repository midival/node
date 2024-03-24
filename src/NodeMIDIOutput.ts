import { IMIDIOutput } from "@midival/core";
import jzz = require("jzz");

export class NodeMIDIOutput implements IMIDIOutput {
    constructor(public readonly id: string, public readonly name: string, public readonly manufacturer: string) {

    }

    private _out
    get output() {
        this._out = jzz().openMidiOut(this.name)
        if (this._out) {
            return this._out
        }
    }

    send(data: Uint8Array | number[]): void {
        this.output.then(o => o.send(...data))
    }

}