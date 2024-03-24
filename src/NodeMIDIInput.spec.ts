import { Input } from "midi"
import { NodeMIDIInput } from "./NodeMIDIInput";

interface MockInput extends Input {
    trigger(data);
}

const getMockInput = (): MockInput => {
    const callbacks = [];
    return {
        on: jest.fn((event: 'message', callback) => {
            callbacks.push(callback);
        }),
        trigger: (data) => callbacks.forEach(fn => fn(data)),
    } as undefined as MockInput;
}

describe("NodeMIDIInput", () => {
    it('empty', () => { })
    // it("should properly instantiate", () => {
    //     const mock: Input = getMockInput();
    //     const input = new NodeMIDIInput("1234", "hello", 'man');
    //     expect(input.id).toEqual("1234");
    //     expect(input.name).toEqual("hello");
    //     expect(input.manufacturer).toEqual('man')
    // });

    // it("should properly connect and trigger messages", () => {
    //     const mock: Input = getMockInput();
    //     const input = new NodeMIDIInput("1234", "hello", 'man');
    //     const fn = jest.fn();
    //     input.onMessage(fn);
    //     expect(mock.on).toBeCalledTimes(1);
    // })
})