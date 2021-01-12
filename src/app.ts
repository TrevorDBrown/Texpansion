/*
    Texpansion
    (c)2020 Trevor D. Brown. All rights reserved.

    app.ts - the main entry point for the application.

*/

import {servest, join, dirname} from "./deps.ts";

const app = servest.createApp();

app.use((req) => {
    if (req.url.startsWith('/resources/css/')){
        servest.serveStatic('./src/interface/css/', {
            
        });
    } else if (req.url.startsWith('/resources/js/')){
        servest.serveStatic('./src/interface/js/');
    }
});

app.use(servest.serveStatic('./src/interface/'));

app.listen({port: 3000});