import { randomUUID } from "crypto";
import type { Output } from "midi";
import { NodeMIDIAccess } from "./NodeMIDIAccess";
import { NodeMIDIOutput } from "./NodeMIDIOutput";

export class VirtualNodeMIDIOutput extends NodeMIDIOutput {
    private _midiOutput: Output;
    constructor(name: string, manufacturer?: string) {
        super(randomUUID(), name, manufacturer);
    }
    disconnect() {
        this._midiOutput.closePort();
    }
}