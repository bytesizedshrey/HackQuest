
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero3D from "@/components/Hero3D";
import LessonCard from "@/components/LessonCard";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  BookOpen, 
  Brain, 
  Code, 
  Flag, 
  GamepadIcon, 
  GraduationCap, 
  Lock, 
  Shield, 
  Trophy, 
  Users
} from "lucide-react";

// Placeholder images
const LESSON_IMAGES = [
  "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544890225-2f3faec4cd60?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?q=80&w=1000&auto=format&fit=crop",
];

const Index = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  
  useEffect(() => {
    // Hide scroll indicator when user scrolls
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-cyber-black overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20">
        <div className="container mx-auto px-4 py-20 h-full flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-cyber-glitch">
                <span className="neon-text">Learn Cybersecurity</span> <br />
                <span className="neon-text-blue">Through Play</span>
              </h1>
              <p className="text-white/70 text-lg mb-8">
                Master cybersecurity skills through interactive games, challenges, and simulations. Level up your career while having fun!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-cyber-neonPurple hover:bg-cyber-neonPurple/90 text-white button-glow">
                  <GamepadIcon className="mr-2 h-5 w-5" />
                  Start Your Adventure
                </Button>
                <Button size="lg" variant="outline" className="border-cyber-purple/50 hover:bg-cyber-purple/10 text-white">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Lessons
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div>
                  <div className="text-3xl font-bold text-cyber-neonBlue">15+</div>
                  <div className="text-white/50 text-sm">Interactive Challenges</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyber-neonPink">5k+</div>
                  <div className="text-white/50 text-sm">Active Players</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyber-neonGreen">98%</div>
                  <div className="text-white/50 text-sm">Completion Rate</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 h-[400px] md:h-[500px]">
            <Hero3D />
          </div>
        </div>
        
        {/* Scroll indicator */}
        {showScrollIndicator && (
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-white/50 text-sm mb-2">Scroll to Explore</span>
            <svg 
              className="w-6 h-6 text-cyber-neonPurple" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        )}
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-cyber-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">Learn Cybersecurity Like Never Before</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our gamified platform transforms complex security concepts into engaging, interactive experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<GamepadIcon className="h-6 w-6" />}
              title="Interactive Gameplay"
              description="Learn by doing with hands-on simulations and games that make cybersecurity concepts stick."
            />
            <FeatureCard 
              icon={<Brain className="h-6 w-6" />}
              title="Real-world Scenarios"
              description="Face the same challenges security professionals encounter in their daily work."
            />
            <FeatureCard 
              icon={<Trophy className="h-6 w-6" />}
              title="Achievement System"
              description="Earn badges, level up, and track your progress as you master new skills."
            />
            <FeatureCard 
              icon={<Users className="h-6 w-6" />}
              title="Community Challenges"
              description="Compete with friends and join global leaderboards to test your skills."
            />
            <FeatureCard 
              icon={<Flag className="h-6 w-6" />}
              title="Capture The Flag"
              description="Solve puzzles, crack codes, and find vulnerabilities in our CTF challenges."
            />
            <FeatureCard 
              icon={<GraduationCap className="h-6 w-6" />}
              title="Career Advancement"
              description="Build a portfolio of completed challenges to showcase your skills to employers."
            />
          </div>
        </div>
      </section>
      
      {/* Lessons Section */}
      <section id="lessons" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text-blue">Popular Challenges</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Start your cybersecurity journey with our most engaging challenges and missions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <LessonCard 
              title="Phishing Detective"
              description="Learn to identify and avoid phishing attempts through interactive email simulations."
              image={LESSON_IMAGES[0]}
              level="Beginner"
              duration="20 min"
              players={1250}
              rating={4.8}
            />
            <LessonCard 
              title="Password Fortress"
              description="Master the art of creating and managing secure passwords that can't be easily cracked."
              image={LESSON_IMAGES[1]}
              level="Beginner"
              duration="15 min"
              players={980}
              rating={4.6}
            />
            <LessonCard 
              title="Social Engineering Defense"
              description="Learn to recognize and counter common social engineering tactics used by hackers."
              image={LESSON_IMAGES[2]}
              level="Intermediate"
              duration="30 min"
              players={750}
              rating={4.9}
              locked={true}
            />
            <LessonCard 
              title="Encryption Puzzles"
              description="Decode encrypted messages and learn the basics of modern cryptography techniques."
              image={LESSON_IMAGES[3]}
              level="Intermediate"
              duration="45 min"
              players={620}
              rating={4.7}
              locked={true}
            />
            <LessonCard 
              title="Network Guardian"
              description="Configure firewalls and secure networks against common attack vectors and intrusions."
              image={LESSON_IMAGES[4]}
              level="Advanced"
              duration="60 min"
              players={450}
              rating={4.5}
              locked={true}
              comingSoon={true}
            />
            <LessonCard 
              title="Forensic Investigator"
              description="Analyze digital evidence and solve cybercrime cases with forensic investigation tools."
              image={LESSON_IMAGES[5]}
              level="Advanced"
              duration="90 min"
              players={380}
              rating={4.8}
              locked={true}
              comingSoon={true}
            />
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-cyber-purple hover:bg-cyber-neonPurple text-white button-glow">
              View All Challenges
              <Shield className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-cyber-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">How HackQuest Works</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our platform turns cybersecurity learning into an engaging game with real rewards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-cyber-neonPurple/20 flex items-center justify-center mx-auto mb-6">
                <div className="w-10 h-10 rounded-full bg-cyber-neonPurple flex items-center justify-center text-white font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Create Your Account</h3>
              <p className="text-white/70">
                Sign up and customize your hacker profile with a unique username and avatar.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-cyber-neonPink/20 flex items-center justify-center mx-auto mb-6">
                <div className="w-10 h-10 rounded-full bg-cyber-neonPink flex items-center justify-center text-white font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Complete Challenges</h3>
              <p className="text-white/70">
                Play through interactive security scenarios and solve real-world problems.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-cyber-neonBlue/20 flex items-center justify-center mx-auto mb-6">
                <div className="w-10 h-10 rounded-full bg-cyber-neonBlue flex items-center justify-center text-white font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Earn & Level Up</h3>
              <p className="text-white/70">
                Gain XP, unlock badges, and rise through the ranks from Novice to Cyber Master.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">About HackQuest</h2>
              <p className="text-white/70">
                We're on a mission to make cybersecurity education accessible, engaging, and effective for everyone.
              </p>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
              <p className="text-white/70 mb-6">
                In a world where cyber threats are constantly evolving, we believe everyone should have access to high-quality security education. Traditional learning methods often fail to engage students or provide practical skills. HackQuest transforms this experience by turning security concepts into immersive games and challenges.
              </p>
              <p className="text-white/70">
                Whether you're a student, professional, or curious learner, our platform offers a fun way to build real-world cybersecurity skills that matter in today's digital landscape.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Why Choose HackQuest?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-cyber-neonPurple/20 p-1 rounded-full">
                    <Award className="h-5 w-5 text-cyber-neonPurple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Learn by Doing</h4>
                    <p className="text-white/70">Our hands-on approach emphasizes practical skills over passive content consumption.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-cyber-neonPink/20 p-1 rounded-full">
                    <Lock className="h-5 w-5 text-cyber-neonPink" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Industry Relevance</h4>
                    <p className="text-white/70">Challenges are designed by cybersecurity professionals to mirror real-world scenarios.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-cyber-neonBlue/20 p-1 rounded-full">
                    <Code className="h-5 w-5 text-cyber-neonBlue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Continuous Growth</h4>
                    <p className="text-white/70">Our platform regularly adds new challenges to keep pace with evolving security trends.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-cyber-black relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-neonPurple/5 z-0"></div>
        
        {/* Animated background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-cyber-neonPurple/20 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyber-neonPink/20 rounded-full filter blur-3xl animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 neon-text">Ready to Level Up Your Cybersecurity Skills?</h2>
            <p className="text-white/70 text-lg mb-8">
              Join thousands of players learning cybersecurity through our gamified platform. Start your journey today!
            </p>
            <Button size="lg" className="bg-cyber-neonPurple hover:bg-cyber-neonPurple/90 text-white button-glow">
              <GamepadIcon className="mr-2 h-5 w-5" />
              Get Started Now
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
