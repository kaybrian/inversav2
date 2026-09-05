"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { MotionConfig, motion } from "motion/react";
import ScrollTop from "@/components/common/ScrollTop";
import ScrollProgress from "@/components/motion/ScrollProgress";
import ScrollTopBehaviour from "@/components/common/ScrollTopBehavier";
import Context from "@/context/Context";

if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap.esm");
}

/**
 * Every client side provider lives here so that app/layout.jsx can stay a
 * server component and export metadata. Next only reads metadata exports from
 * server components, so this split is what makes site wide SEO tags possible.
 */
export default function Providers({ children }) {
  const path = usePathname();

  useEffect(() => {
    const WOW = require("@/utils/wow");
    const wow = new WOW.default({ live: false, mobile: false });
    wow.init();
  }, [path]);

  return (
    <Context>
      {/* reducedMotion "user" makes every Motion animation in the app
          respect the operating system setting automatically. */}
      <MotionConfig reducedMotion="user">
        <ScrollProgress />
        <ParallaxProvider>
          <motion.div
            key={path}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </ParallaxProvider>
      </MotionConfig>
      <ScrollTop />
      <ScrollTopBehaviour />
    </Context>
  );
}
