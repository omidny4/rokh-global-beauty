import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  gradient: string;
}

const CategoryCard = ({ title, description, icon: Icon, href, gradient }: CategoryCardProps) => {
  return (
    <Link to={href}>
      <div className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-smooth overflow-hidden">
        {/* Background Gradient */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-smooth ${gradient}`} />
        
        <div className="relative space-y-4">
          <div className="w-14 h-14 rounded-xl bg-secondary/50 flex items-center justify-center group-hover:scale-110 transition-smooth">
            <Icon className="h-7 w-7 text-primary" />
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
