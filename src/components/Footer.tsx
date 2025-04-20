
import { Code, Github, Lock, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-cyber-black py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Lock className="h-6 w-6 text-cyber-neonPurple" />
              <span className="text-xl font-bold neon-text">HackQuest</span>
            </div>
            <p className="text-white/70 mb-6">
              A gamified cybersecurity learning platform that makes security education fun and accessible to everyone.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="rounded-full text-white/70 hover:text-white hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full text-white/70 hover:text-white hover:bg-white/10">
                <Github className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full text-white/70 hover:text-white hover:bg-white/10">
                <Mail className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full text-white/70 hover:text-white hover:bg-white/10">
                <Code className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a></li>
              <li><a href="#lessons" className="text-white/70 hover:text-white transition-colors">Lessons</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Challenges</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Leaderboard</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>© 2025 HackQuest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
