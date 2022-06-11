import { MIDIVal } from "@midival/core";
import {NodeMIDIAccess} from "../src/index";
import * as midi from "midi";

import { version as versionMidivalCore } from "@midival/core/package.json";
import { version as versionMidivalNode } from "../package.json";

const nodeAccess = new NodeMIDIAccess(midi, {
    watchTimeout: 1000,
});
console.log("------------------------");
console.log("MIDIVal - Listing outputs")
console.log("@midival/core", versionMidivalCore);
console.log("@midival/node", versionMidivalNode);
console.log("------------------------");
console.log();
MIDIVal.configureAccessObject(nodeAccess);
MIDIVal.connect()
.then(access => {
    access.outputs.forEach(device => {
        console.log("[    output     ]", `${device.name} (${device.id})`);
    });

    setTimeout(() => {
        nodeAccess.createVirtualOutputPort("HELLO WORLD");
    }, 1200);
});

MIDIVal.onOutputDeviceConnected(device => {
    console.log("[   connected   ]", `${device.name} (${device.id})`);
});

MIDIVal.onOutputDeviceDisconnected(device => {
    console.log("[  disconnected ]", `${device.name} (${device.id})`);
});
