"use client";

import { useEffect, useRef } from "react";

export function GiscusComments() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "bsolidgold/doorampbible");
    script.setAttribute("data-repo-id", "R_kgDOSm3usA");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDOSm3usM4C-DxL");
    script.setAttribute("data-mapping", "number");
    script.setAttribute("data-term", "1");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "dark");
    script.setAttribute("data-lang", "en");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    ref.current.appendChild(script);
  }, []);

  return <div ref={ref} />;
}
