"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
export default function Listener() {
  const router = useSearchParams();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (router.get("s") == "workWithUs") {
      setTimeout(() => {
        const top =
          ref.current?.getBoundingClientRect().top! +
          document.documentElement.scrollTop;
        window.scrollTo({
          top: top - 200,
          left: 0,
          behavior: "smooth",
        });
      }, 100);
    }
    window.scrollTo(0, 0);
  }, [router]);
  return <div ref={ref}></div>;
}
