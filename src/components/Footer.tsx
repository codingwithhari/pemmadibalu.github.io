import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-gradient-to-t from-background to-transparent border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="text-center space-y-6">
          {/* Thank You Message */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold gradient-text">
              Thank you for visiting my portfolio website!
            </h3>
            <p className="text-muted-foreground text-lg">
              Designed with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> by Pemmadi Balu
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Pemmadi Balu. All rights reserved.</p>
            <p className="mt-2">Built with React, TypeScript, and Tailwind CSS</p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-primary opacity-50"></div>
      </div>
    </footer>
  );
}