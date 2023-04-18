import { motion } from "framer-motion";
import { routeVariants, childVariants } from "../motion/variants";

export default function Home() {
  return (
    <motion.header
      className="App-header"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <motion.div variants={childVariants} initial="initial" animate="final">
        Home
      </motion.div>
    </motion.header>
  );
}
