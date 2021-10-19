export const config: WebdriverIO.Config = {
    // ...
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: "tsconfig.json",
        },
    },
    framework: "jasmine",
    capabilities: []
};
