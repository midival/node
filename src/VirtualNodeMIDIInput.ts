import { randomUUID } from "crypto";
import type { Input } from "midi";
import { NodeMIDIAccess } from "./NodeMIDIAccess";
import { NodeMIDIInput } from "./NodeMIDIInput";
import jzz = require("jzz");

export class VirtualNodeMIDIInput extends NodeMIDIInput {
    private _midiInput: Input;
    constructor(name: string, manufacturer?: string) {
        super('dsad', name, manufacturer)
    }
    disconnect() {
    }
}