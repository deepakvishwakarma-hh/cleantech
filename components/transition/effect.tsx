interface Props {
  children: any;
  exceptRoutes: string[];
}

import { variants } from "./varient";
import { useRouter } from "next/router";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const TransitionEffect3 = ({ children, exceptRoutes }: Props) => {
  const { asPath, pathname } = useRouter();
  const shouldReduceMotion = useReducedMotion();

  if (exceptRoutes.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <div className="effect-3">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={asPath}
          variants={(!shouldReduceMotion ? variants : null) as any}
          initial="in"
          animate={["center", "scaleUp"]}
          exit={["scaleDown", "out"]}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TransitionEffect3;
