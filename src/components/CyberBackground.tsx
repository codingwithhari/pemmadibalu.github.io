export default function CyberBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="cyber-grid absolute inset-0 opacity-20"></div>
      
      {/* Floating Neon Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-30 blur-3xl animate-float"></div>
      <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-secondary rounded-full opacity-40 blur-2xl animate-float animate-delay-300"></div>
      <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-accent rounded-full opacity-25 blur-3xl animate-float animate-delay-500"></div>
      <div className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-neon-purple rounded-full opacity-35 blur-2xl animate-float animate-delay-700"></div>
      
      {/* Scanning Lines Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 animate-pulse"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30 animate-pulse animate-delay-200"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-40 animate-pulse animate-delay-400"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-25 animate-pulse animate-delay-600"></div>
      </div>
      
      {/* Corner Highlights */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-primary opacity-10 blur-xl"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-secondary opacity-10 blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-accent opacity-10 blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-neon-purple opacity-10 blur-xl"></div>
    </div>
  );
}