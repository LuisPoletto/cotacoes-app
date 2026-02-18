import { motion } from "framer-motion";

export default function AnimatedTitle({ title, delay = 0, color }) {
    return (
        <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1.2,
                delay: delay,
                ease: "easeOut"
            }}
            style={{ color: "#08a88a", marginTop: "10px", fontSize: "3rem" }}
        >
            {title}
        </motion.h1>
    );
}