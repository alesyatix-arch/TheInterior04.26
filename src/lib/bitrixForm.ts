// Bitrix24 inline form loader. The loader script scans the DOM for
// <script data-b24-form="..."> placeholders ONCE on load, so for multiple
// form instances on the same page we re-inject the loader each time a new
// placeholder is mounted.

const LOADER_SRC = "https://cdn-ru.bitrix24.ru/b435911/crm/form/loader_49.js";

function injectLoader() {
  const s = document.createElement("script");
  s.async = true;
  s.src = `${LOADER_SRC}?${(Date.now() / 180000) | 0}`;
  s.dataset.b24LoaderInstance = String(Date.now());
  document.body.appendChild(s);
}

/**
 * Mounts a Bitrix24 form into `container`. Defers script loading until the
 * browser is idle so it doesn't block first paint.
 * Returns a cleanup function.
 */
export function mountBitrixForm(container: HTMLElement): () => void {
  const inline = document.createElement("script");
  inline.setAttribute("data-b24-form", "inline/49/c0wsv9");
  inline.setAttribute("data-skip-moving", "true");
  container.appendChild(inline);

  const idle =
    (window as unknown as { requestIdleCallback?: (cb: () => void) => number })
      .requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1));
  const handle = idle(() => {
    injectLoader();
  });

  return () => {
    if (typeof handle === "number")
      (
        window as unknown as { cancelIdleCallback?: (h: number) => void }
      ).cancelIdleCallback?.(handle);
    container.innerHTML = "";
  };
}

