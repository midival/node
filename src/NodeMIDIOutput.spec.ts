import { Output } from "midi";
import { NodeMIDIOutput } from "./NodeMIDIOutput";

const getMockOutput = (): Output => ({

} as undefined as Output);

describe("NodeMIDIOutput", () => {
    it("should properly instantiate", () => {
        const mock: Output = getMockOutput();
        const output = new NodeMIDIOutput("1234", "hello", mock);
        expect(output.id).toEqual("1234");
        expect(output.name).toEqual("hello");
    });
})