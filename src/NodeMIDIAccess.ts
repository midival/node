import { IMIDIAccess, UnregisterCallback } from "@midival/core";
import { InputStateChangeCallback, OutputStateChangeCallback } from "@midival/core/dist/wrappers/access/IMIDIAccess";
import { NodeMIDIInput } from "./NodeMIDIInput";
import {NodeMIDIOutput} from "./NodeMIDIOutput";

const midi = require('midi');

const range = (i) => Array.apply(null, Array(i)).map(function (_, i) {return i;});

class NodeMIDIAccess implements IMIDIAccess {
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
        const inputs = new midi.Input()
        const inputsNo = inputs.getPortCount();

        return range(inputsNo).map((i: number) => new NodeMIDIInput(i));
    }

    get outputs() {
        console.log("o", midi.Output);
        const outputs = new midi.Output();
        const outputsNo = outputs.getPortCount();
        return range(outputsNo).map((i: number) => new NodeMIDIOutput(i));
    }
}

export {NodeMIDIAccess, IMIDIAccess};