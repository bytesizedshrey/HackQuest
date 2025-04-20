
import { ReactNode } from 'react';

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
};

const FeatureCard = ({ icon, title, description, className = '' }: FeatureCardProps) => {
  return (
    <div className={`glass-card p-6 transition-all duration-300 hover:translate-y-[-5px] ${className}`}>
      <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-white/10 text-cyber-neonPurple">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

export default FeatureCard;
