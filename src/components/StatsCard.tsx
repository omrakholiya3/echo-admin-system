
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useColorTheme } from "../contexts/ColorThemeContext";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease";
  icon: LucideIcon;
  color: string;
}

const StatsCard = ({ title, value, change, changeType, icon: Icon, color }: StatsCardProps) => {
  const { getThemeColors } = useColorTheme();
  const themeColors = getThemeColors();

  const colorMap = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
    red: "bg-red-500",
  };

  const gradientMap = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600",
    red: "from-red-500 to-red-600",
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg border border-gray-200 p-6 cursor-pointer hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mb-2">{value}</p>
          <div className="flex items-center">
            <span className={`text-sm font-medium px-2 py-1 rounded-full ${
              changeType === "increase" 
                ? "text-green-700 bg-green-100" 
                : "text-red-700 bg-red-100"
            }`}>
              {change}
            </span>
            <span className="text-sm text-gray-500 ml-2">from last month</span>
          </div>
        </div>
        
        <div className={`w-12 h-12 bg-gradient-to-br ${gradientMap[color as keyof typeof gradientMap]} rounded-lg flex items-center justify-center shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </motion.div>
  );
};

export default StatsCard;
