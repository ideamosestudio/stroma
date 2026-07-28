import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the STROMA Home with the client content", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>STROMA \| Gestión estratégica de servicios críticos<\/title>/i,
  );
  assert.match(
    html,
    /Los servicios críticos requieren una gestión estratégica\./,
  );
  assert.match(
    html,
    /El desempeño del servicio depende tanto del proveedor como de quien lo contrata\./,
  );
  assert.match(
    html,
    /Gestionamos estratégicamente cada etapa del ciclo de vida del servicio\./,
  );
  assert.match(html, /Dónde generamos valor\./);
  assert.match(html, /Experiencia que se convierte en metodología\./);
  assert.match(html, /Helvio Frieiro/);
  assert.match(html, /Solicitar una reunión/);
});

test("does not render reference or filler content", async () => {
  const response = await render();
  const html = await response.text();

  assert.doesNotMatch(html, /\bIndex\b/);
  assert.doesNotMatch(html, /lorem ipsum/i);
  assert.doesNotMatch(html, /Your site is taking shape/i);
  assert.doesNotMatch(html, /codex-preview/i);
  assert.doesNotMatch(html, /01 \/ Por qué STROMA/);
  assert.doesNotMatch(html, /02 \/ Operación crítica/);
  assert.doesNotMatch(html, /03 \/ Cómo trabajamos/);
  assert.doesNotMatch(html, /04 \/ Experiencia STROMA/);
  assert.doesNotMatch(html, /05 \/ Contacto/);
  assert.doesNotMatch(html, /operacion-critica/);
});
