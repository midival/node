import { IMIDIAccess, UnregisterCallback } from "@midival/core";
import { InputStateChangeCallback, OutputStateChangeCallback } from "@midival/core/dist/wrappers/access/IMIDIAccess";
import { NodeMIDIInput } from "./NodeMIDIInput";
import {NodeMIDIOutput} from "./NodeMIDIOutput";

const range = (i) => Array.apply(null, Array(i)).map(function (_, i) {return i;});

class NodeMIDIAccess implements IMIDIAccess {

    private static _midi: any;

    static getMidiLibrary() {
        return this._midi;
    }

    constructor(midi) {
        NodeMIDIAccess._midi = midi;
    }

    onInputConnected(callback: InputStateChangeCallback): UnregisterCallback {
        throw new Error("Method not implemented.");
    }
    onInputDisconnected(callback: InputStateChangeCallback): UnregisterCallback {
        throw new Error("Method not implemented.");
    }
    onOutputConnected(callback: OutputStateChangeCallback): UnregisterCallback {
        throw new Error("Method not implemented.");
    }
    onOutputDisconnected(callback: OutputStateChangeCallback): UnregisterCallback {
        throw new Error("Method not implemented.");
    }

    connect(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    get inputs() {
        const inputs = new (NodeMIDIAccess.getMidiLibrary()).Input()
        const inputsNo = inputs.getPortCount();

        return range(inputsNo).map((i: number) => new NodeMIDIInput(i));
    }

    get outputs() {
        const outputs = new (NodeMIDIAccess.getMidiLibrary()).Output();
        const outputsNo = outputs.getPortCount();
        return range(outputsNo).map((i: number) => new NodeMIDIOutput(i));
    }
}

export {NodeMIDIAccess, IMIDIAccess};