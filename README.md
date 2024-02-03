# @midival/node

This is a node wrapper for `@midial/core` library. It provides MIDI bindings to make library run in the Node.js environment.

For instructions on how to use MIDIVal, please check:
- [the official documentation](https://midival.github.io/)
- [`@midival/core` repository](https://github.com/midival/core)


## How to setup MIDIVal in Node 1-0-1
```ts
import { MIDIVal } from "@midival/core";
import { NodeMIDIAccess } from "@midival/node";
import * as midi from "midi";

MIDIVal.configureAccessObject(new NodeMIDIAccess(midi));

// The rest code should be the same as core examples.

```


# Releases
## [0.1.0]
- Release compatible with `0.1.x` versions of `@midival/core`.