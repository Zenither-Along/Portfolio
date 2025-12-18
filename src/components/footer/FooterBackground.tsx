export default function FooterBackground() {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none" style={{ height: '40%' }}>
      <h3 
        className="text-white opacity-10"
        style={{ 
          fontFamily: 'var(--font-instrument)',
          fontSize: 'clamp(8rem, 25vw, 20rem)',
          lineHeight: '1',
          fontWeight: 700,
          position: 'absolute',
          bottom: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          whiteSpace: 'nowrap',
        }}
      >
        ALONGBAR
      </h3>
    </div>
  );
}
