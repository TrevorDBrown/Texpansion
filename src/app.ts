/*
    Texpansion
    (c)2020 Trevor D. Brown. All rights reserved.

    app.ts - the main entry point for the application.

*/

import { Webview, path } from "./deps.ts";

function main(): void {

    Deno.readTextFile("./src/interface/index.html").then((data) => {
        var texspansionInterface = `data:text/html,${encodeURIComponent(data)}`;
        
        const webview = new Webview({
            // Data
            "title": "Texpansion",
            "url": texspansionInterface,
            // Window Dimensions
            "width": 1024,
            "height": 768,
            "minWidth": 800,
            "minHeight": 600,
            // Window Attributes 
            "resizable": true,
            "frameless": false,
            // Debugging
            "debug": true
        });
    
        webview.run();
    
    });
};

main();