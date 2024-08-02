"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function Listener() {
  const pathname = usePathname();
  const [changes, setChanges] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    // if (pathname.slice(0, 8) == "/service") {
    //   alert("gg");
    // }
    setChanges((prev) => prev + 1);
  }, [pathname]);

  return <></>;
}
