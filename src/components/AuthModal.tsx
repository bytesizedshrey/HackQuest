
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Check, Github, Lock, Mail, User, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type AuthModalProps = {
  mode: 'login' | 'signup';
  onClose: () => void;
  onToggleMode: () => void;
};

const AuthModal = ({ mode, onClose, onToggleMode }: AuthModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      
      if (mode === 'login') {
        toast({
          title: "Welcome back, hacker!",
          description: "You've successfully logged in to your account.",
          duration: 5000,
        });
      } else {
        toast({
          title: "Account created!",
          description: "Welcome to HackQuest! Your journey begins now.",
          duration: 5000,
        });
      }
      
      onClose();
    }, 1500);
  };
  
  const PasswordStrength = () => {
    if (!password) return null;
    
    const strength = 
      password.length >= 8 && 
      /[A-Z]/.test(password) && 
      /[a-z]/.test(password) && 
      /[0-9]/.test(password) && 
      /[^A-Za-z0-9]/.test(password);
      
    const medium = 
      password.length >= 8 && 
      ((/[A-Z]/.test(password) && /[a-z]/.test(password)) || 
      (/[0-9]/.test(password) && /[A-Za-z]/.test(password)));
      
    return (
      <div className="mt-2">
        <div className="flex items-center gap-2 text-xs">
          <div className={`h-1 flex-1 rounded-full ${strength ? 'bg-green-500' : medium ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
          <span className={strength ? 'text-green-500' : medium ? 'text-yellow-500' : 'text-red-500'}>
            {strength ? 'Strong' : medium ? 'Medium' : 'Weak'}
          </span>
        </div>
        
        {mode === 'signup' && (
          <ul className="mt-2 text-xs space-y-1">
            <li className="flex items-center gap-1">
              {password.length >= 8 ? <Check className="h-3 w-3 text-green-500" /> : <X className="h-3 w-3 text-red-500" />}
              <span className={password.length >= 8 ? "text-green-500" : "text-white/50"}>At least 8 characters</span>
            </li>
            <li className="flex items-center gap-1">
              {/[A-Z]/.test(password) ? <Check className="h-3 w-3 text-green-500" /> : <X className="h-3 w-3 text-red-500" />}
              <span className={/[A-Z]/.test(password) ? "text-green-500" : "text-white/50"}>Uppercase letter</span>
            </li>
            <li className="flex items-center gap-1">
              {/[0-9]/.test(password) ? <Check className="h-3 w-3 text-green-500" /> : <X className="h-3 w-3 text-red-500" />}
              <span className={/[0-9]/.test(password) ? "text-green-500" : "text-white/50"}>Number</span>
            </li>
            <li className="flex items-center gap-1">
              {/[^A-Za-z0-9]/.test(password) ? <Check className="h-3 w-3 text-green-500" /> : <X className="h-3 w-3 text-red-500" />}
              <span className={/[^A-Za-z0-9]/.test(password) ? "text-green-500" : "text-white/50"}>Special character</span>
            </li>
          </ul>
        )}
      </div>
    );
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md border border-cyber-purple/30 bg-cyber-darkPurple">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-2 neon-text">
            {mode === 'login' ? 'Welcome Back!' : 'Join HackQuest'}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          {mode === 'signup' && (
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium text-white/70">
                Username
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-5 w-5 text-white/50" />
                <Input
                  id="username"
                  placeholder="hackerX23"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-cyber-black pl-10 border-cyber-purple/30 focus-visible:ring-cyber-purple"
                  required
                />
              </div>
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-white/70">
              Email
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-white/50" />
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-cyber-black pl-10 border-cyber-purple/30 focus-visible:ring-cyber-purple"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-white/70">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-white/50" />
              <Input
                id="password"
                type="password"
                placeholder={mode === 'signup' ? "Create a strong password" : "Enter your password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-cyber-black pl-10 border-cyber-purple/30 focus-visible:ring-cyber-purple"
                required
              />
            </div>
            {mode === 'signup' && <PasswordStrength />}
          </div>
          
          <Button 
            type="submit" 
            className="w-full button-glow bg-cyber-purple hover:bg-cyber-purple/90 text-white"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                {mode === 'login' ? 'Logging in...' : 'Creating account...'}
              </div>
            ) : (
              <>{mode === 'login' ? 'Login' : 'Create Account'}</>
            )}
          </Button>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-cyber-purple/30"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-cyber-darkPurple px-2 text-white/50">or continue with</span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" className="w-full bg-cyber-black text-white border-cyber-purple/30 hover:bg-cyber-black/80 hover:border-cyber-purple/50">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button variant="outline" className="w-full bg-cyber-black text-white border-cyber-purple/30 hover:bg-cyber-black/80 hover:border-cyber-purple/50">
              <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path fill="currentColor" d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
              </svg>
              Discord
            </Button>
          </div>
        </form>
        
        <div className="mt-4 text-center text-sm text-white/50">
          {mode === 'login' ? (
            <>
              Don't have an account?{' '}
              <button 
                onClick={onToggleMode} 
                className="text-cyber-neonPurple hover:underline"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button 
                onClick={onToggleMode} 
                className="text-cyber-neonPurple hover:underline"
              >
                Log in
              </button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
