import { randomUUID } from "crypto";
import type { Output } from "midi";
import { NodeMIDIAccess } from "./NodeMIDIAccess";
import { NodeMIDIOutput } from "./NodeMIDIOutput";

export class VirtualNodeMIDIOutput extends NodeMIDIOutput {
    private _midiOutput: Output;
    constructor(name: string) {
        const output: Output = new (NodeMIDIAccess.getMidiLibrary()).Output();
        output.openVirtualPort(name);
        super(randomUUID(), name, output);
        this._midiOutput = output;
    }
    disconnect() {
        this._midiOutput.closePort();
    }
}