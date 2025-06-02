import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";

interface IconProps extends LucideProps {
  name: keyof typeof LucideIcons;
  fallback?: keyof typeof LucideIcons;
}

const Icon = ({ name, fallback = "CircleAlert", ...props }: IconProps) => {
  const LucideIcon = LucideIcons[name] || LucideIcons[fallback];
  return <LucideIcon {...props} />;
};

export default Icon;
