import { MIDIVal } from "@midival/core";
import {NodeMIDIAccess} from "../src/index";
import * as midi from "midi";
import { version as versionMidivalCore } from "@midival/core/package.json";
import { version as versionMidivalNode } from "../package.json";


const nodeAccess = new NodeMIDIAccess(midi);
MIDIVal.configureAccessObject(nodeAccess);
console.log("------------------------");
console.log("MIDIVal - Listing inputs")
console.log("@midival/core", versionMidivalCore);
console.log("@midival/node", versionMidivalNode);
console.log("------------------------");
console.log();
MIDIVal.connect()
.then(access => {
    access.inputs.forEach(device => {
        console.log("[    input     ]", `${device.name} (${device.id})`);
    });

    setTimeout(() => {
        nodeAccess.createVirtualInputPort("HELLO WORLD");
    }, 1200);
});

MIDIVal.onInputDeviceConnected(device => {
    console.log("[  connected   ]", `${device.name} (${device.id})`);
});

MIDIVal.onInputDeviceDisconnected(device => {
    console.log("[ disconnected ]", `${device.name} (${device.id})`);
})