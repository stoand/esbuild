(cd .. && make esbuild) && \
(../esbuild app.ts --outfile=out.js) && \
node run.js
