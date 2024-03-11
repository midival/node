import { MIDIVal } from "@midival/core";
import {NodeMIDIAccess} from "../src/index";
import { version as versionMidivalCore } from "@midival/core/package.json";
import { version as versionMidivalNode } from "../package.json";
import { MIDIValInput } from "@midival/core";
import { MIDIValOutput } from "@midival/core";


const nodeAccess = new NodeMIDIAccess();
MIDIVal.configureAccessObject(nodeAccess);
console.log("------------------------");
console.log("MIDIVal - Listing inputs")
console.log("@midival/core", versionMidivalCore);
console.log("@midival/node", versionMidivalNode);
console.log("------------------------");
console.log();
MIDIVal.connect()
.then(access => {
    console.log('ACCESS', access)
    access.inputs.forEach(device => {
        console.log("[    input     ]", `${device.name} (${device.id})`);
    });

    const myInput = access.inputs.find(i => i.name === 'Launchpad Pro Standalone Port')
    const myOutput = access.outputs.find(i => i.name === 'Launchpad Pro Standalone Port')
    if (myInput && myOutput) {
        const output = new MIDIValOutput(myOutput)
        const launchpad = new MIDIValInput(myInput)
        launchpad.onAllNoteOn(note => {
            if (note.velocity < 1) {
                return
            }
            console.log('NOTE ON', note)
            output.sendNoteOn(note.note, note.velocity)
        })
    }

    // setTimeout(() => {
    //     nodeAccess.createVirtualInputPort("HELLO WORLD");
    // }, 1200);
});

MIDIVal.onInputDeviceConnected(device => {
    console.log("[  connected   ]", `${device.name} (${device.id})`);
});

MIDIVal.onInputDeviceDisconnected(device => {
    console.log("[ disconnected ]", `${device.name} (${device.id})`);
})