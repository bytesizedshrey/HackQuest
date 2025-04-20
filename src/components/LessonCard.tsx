
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, LockIcon, Star, Trophy, User } from "lucide-react";

type LessonCardProps = {
  title: string;
  description: string;
  image: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  players: number;
  rating: number;
  locked?: boolean;
  comingSoon?: boolean;
};

const LessonCard = ({
  title,
  description,
  image,
  level,
  duration,
  players,
  rating,
  locked = false,
  comingSoon = false
}: LessonCardProps) => {
  const getLevelColor = () => {
    switch(level) {
      case 'Beginner': return 'bg-green-500/20 text-green-500';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-500';
      case 'Advanced': return 'bg-red-500/20 text-red-500';
      default: return 'bg-green-500/20 text-green-500';
    }
  };
  
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-neonPurple to-cyber-neonPink rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
      <div className="relative clay-card hover-scale">
        <div className="relative h-40 rounded-t-xl overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-darkPurple via-transparent to-transparent"></div>
          
          {/* Level badge */}
          <Badge className={`absolute top-3 left-3 ${getLevelColor()}`}>
            {level}
          </Badge>
          
          {/* Duration & players */}
          <div className="absolute bottom-3 left-3 flex items-center gap-3 text-white text-xs">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>{players}+</span>
            </div>
          </div>
          
          {/* Rating */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/50 text-yellow-400 text-xs px-2 py-1 rounded-full">
            <Star className="h-3 w-3 fill-yellow-400" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <div className="p-5">
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyber-neonPurple transition-colors">
            {title}
          </h3>
          <p className="text-white/70 text-sm mb-4">
            {description}
          </p>
          
          {locked ? (
            <Button variant="outline" className="w-full border-cyber-purple/30 group-hover:border-cyber-neonPurple" disabled>
              <LockIcon className="mr-2 h-4 w-4" />
              {comingSoon ? 'Coming Soon' : 'Locked'}
            </Button>
          ) : (
            <Button className="w-full bg-cyber-purple hover:bg-cyber-neonPurple">
              <Trophy className="mr-2 h-4 w-4" />
              Start Challenge
            </Button>
          )}
        </div>
        
        {/* XP reward badge */}
        {!locked && !comingSoon && (
          <div className="absolute -top-3 -right-3 bg-cyber-neonPurple text-white text-xs px-2 py-1 rounded-full shadow-neon-purple">
            +150 XP
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonCard;
