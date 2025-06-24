"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ManualLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // simulate delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loadingContainer">
        <Image src="/logo/Logo.png" alt="Logo" width={180} height={180} />
        <div className="loader"></div> {/* Your custom loader */}
      </div>
    );
  }

  return <>{children}</>;
}
