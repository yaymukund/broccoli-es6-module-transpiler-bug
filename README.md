broccoli-es6-module-transpiler-bug
==================================

To demonstrate bug:

```bash
> npm install
> broccoli build dist

Error: ENOENT, no such file or directory '~/broccoli-es6-module-transpiler-bug/tmp/compile_modules-tmp_cache_dir-jbRvJdUD.tmp/0/app.cjs.js.map'
    at Error (native)
    at Object.fs.lstatSync (fs.js:716:18)
    at Function.symlinkOrCopySync (~/broccoli-es6-module-transpiler-bug/node_modules/broccoli-es6-module-transpiler/node_modules/symlink-or-copy/index.js:19:12)
    at ~/broccoli-es6-module-transpiler-bug/node_modules/broccoli-es6-module-transpiler/index.js:252:23
    at Array.forEach (native)
    at CompileModules.copyFromCache (~/broccoli-es6-module-transpiler-bug/node_modules/broccoli-es6-module-transpiler/index.js:247:28)
    at CompileModules.compileAndCacheModules (~/broccoli-es6-module-transpiler-bug/node_modules/broccoli-es6-module-transpiler/index.js:240:14)
    at CompileModules.<anonymous> (~/broccoli-es6-module-transpiler-bug/node_modules/broccoli-es6-module-transpiler/index.js:150:14)
    at $$$internal$$tryCatch (~/broccoli-es6-module-transpiler-bug/node_modules/broccoli/node_modules/rsvp/dist/rsvp.js:470:16)
    at $$$internal$$invokeCallback (~/broccoli-es6-module-transpiler-bug/node_modules/broccoli/node_modules/rsvp/dist/rsvp.js:482:17)

Build failed
```

