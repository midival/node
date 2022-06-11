import { randomUUID } from "crypto";
import type { Input } from "midi";
import { NodeMIDIAccess } from "./NodeMIDIAccess";
import { NodeMIDIInput } from "./NodeMIDIInput";

export class VirtualNodeMIDIInput extends NodeMIDIInput {
    private _midiInput: Input;
    constructor(name: string) {
        const input = new (NodeMIDIAccess.getMidiLibrary()).Input();
        input.openVirtualPort(name);
        super(randomUUID(), name, input);
        this._midiInput = input;
    }
    disconnect() {
        this._midiInput.closePort();
    }
}