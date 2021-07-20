import typescript from "rollup-plugin-typescript2";

export default {
    input: 'src/index.ts',
    output: {
        dir: 'dist',
        format: 'cjs'
    },
    external: ["midi"],
    plugins: [typescript({
        rollupCommonJSResolveHack: true
    })]
};