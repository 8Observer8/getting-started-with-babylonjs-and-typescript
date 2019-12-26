requirejs.config({
    baseUrl: "js",
    paths: {
        "babylonjs": "https://cdnjs.cloudflare.com/ajax/libs/babylonjs/4.0.3/babylon"
    }
});

requirejs(["Program"], () => { });
