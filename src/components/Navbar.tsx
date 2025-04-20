
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Code, Lock, Menu, X } from "lucide-react";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleLogin = () => {
    setAuthMode('login');
    setShowAuthModal(true);
  };
  
  const handleSignup = () => {
    setAuthMode('signup');
    setShowAuthModal(true);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-cyber-darkPurple/80 backdrop-blur-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <Lock className="h-6 w-6 text-cyber-neonPurple" />
            <span className="text-xl font-bold neon-text">HackQuest</span>
            <div className="bg-cyber-neonPink text-xs text-white px-2 py-0.5 rounded-full ml-2">Beta</div>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6">
              <li><a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a></li>
              <li><a href="#lessons" className="text-white/70 hover:text-white transition-colors">Lessons</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About</a></li>
            </ul>
            
            <div className="flex gap-3">
              <Button variant="ghost" onClick={handleLogin} className="text-white hover:text-cyber-neonPurple hover:bg-white/5">
                Login
              </Button>
              <Button onClick={handleSignup} className="bg-cyber-neonPurple hover:bg-cyber-neonPurple/80 text-white">
                Get Started
                <Code className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="md:hidden text-white">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-cyber-darkPurple fixed inset-0 top-16 z-40 animate-fade-in">
            <div className="container mx-auto px-4 py-8">
              <ul className="flex flex-col gap-6 text-center">
                <li>
                  <a 
                    href="#features" 
                    className="text-xl text-white/70 hover:text-white block py-3"
                    onClick={toggleMenu}
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a 
                    href="#lessons" 
                    className="text-xl text-white/70 hover:text-white block py-3"
                    onClick={toggleMenu}
                  >
                    Lessons
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="text-xl text-white/70 hover:text-white block py-3"
                    onClick={toggleMenu}
                  >
                    About
                  </a>
                </li>
                <li className="pt-6 flex flex-col gap-4">
                  <Button variant="outline" onClick={() => {handleLogin(); toggleMenu();}} className="w-full">
                    Login
                  </Button>
                  <Button onClick={() => {handleSignup(); toggleMenu();}} className="w-full bg-cyber-neonPurple hover:bg-cyber-neonPurple/80">
                    Get Started
                    <Code className="ml-2 h-4 w-4" />
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
      
      {showAuthModal && (
        <AuthModal 
          mode={authMode} 
          onClose={() => setShowAuthModal(false)} 
          onToggleMode={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')} 
        />
      )}
    </>
  );
};

export default Navbar;
