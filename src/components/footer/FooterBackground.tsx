import { motion } from 'framer-motion';

export default function FooterBackground() {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none" style={{ height: '40%' }}>
      <motion.h3 
        initial={{ opacity: 0, y: 50, x: "-50%" }}
        whileInView={{ opacity: 0.1, y: 0, x: "-50%" }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-white"
        style={{ 
          fontFamily: 'var(--font-instrument)',
          fontSize: 'clamp(8rem, 25vw, 20rem)',
          lineHeight: '1',
          fontWeight: 700,
          position: 'absolute',
          bottom: '0',
          left: '50%',
          whiteSpace: 'nowrap',
        }}
      >
        ALONGBAR
      </motion.h3>
    </div>
  );
}
