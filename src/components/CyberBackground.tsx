export default function CyberBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Simplified Static Grid Background */}
      <div className="absolute inset-0 opacity-10" 
           style={{
             backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }}>
      </div>
      
      {/* Static Corner Highlights - No Animation */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-primary opacity-5 blur-lg"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-secondary opacity-5 blur-lg"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-accent opacity-5 blur-lg"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-neon-purple opacity-5 blur-lg"></div>
    </div>
  );
}