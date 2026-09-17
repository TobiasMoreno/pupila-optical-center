"use client";

import { useEffect } from "react";
import { firebaseApp } from "@/lib/firebase";

export function FirebaseAnalytics() {
  useEffect(() => {
    let active = true;
    async function initializeAnalytics() {
      const { getAnalytics, isSupported } = await import("firebase/analytics");
      if (active && (await isSupported())) getAnalytics(firebaseApp);
    }

    void initializeAnalytics();
    return () => {
      active = false;
    };
  }, []);

  return null;
}
