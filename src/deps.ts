/*
    Texpansion
    (c)2020 Trevor D. Brown. All rights reserved.

    deps.ts - the dependencies for the entire project.

*/

// WebView - allows the creation of windowed applications rendered with web pages.
export {
    Webview
} from "https://deno.land/x/webview@0.5.5/mod.ts";

export {
    dirname,
    join
}
from "https://deno.land/std@0.82.0/path/mod.ts";

export
    *
as servest from "https://servestjs.org/@v1.1.7/mod.ts";

// export
//     *
// as oak from "https://deno.land/x/oak@v6.4.1/mod.ts";

// export {
//     serve,
//     ServerRequest
// } from "https://deno.land/std@0.82.0/http/server.ts";

// export type { Response } from "https://deno.land/std@0.82.0/http/server.ts";
