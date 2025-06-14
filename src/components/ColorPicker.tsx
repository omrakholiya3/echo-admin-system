
import { motion } from "framer-motion";
import { Palette } from "lucide-react";
import { useColorTheme } from "../contexts/ColorThemeContext";

const ColorPicker = () => {
  const { currentTheme, setTheme } = useColorTheme();

  const colors = [
    { name: 'blue', color: 'bg-blue-500', ring: 'ring-blue-500' },
    { name: 'green', color: 'bg-green-500', ring: 'ring-green-500' },
    { name: 'purple', color: 'bg-purple-500', ring: 'ring-purple-500' },
    { name: 'orange', color: 'bg-orange-500', ring: 'ring-orange-500' },
    { name: 'red', color: 'bg-red-500', ring: 'ring-red-500' },
  ];

  return (
    <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <Palette className="w-5 h-5 text-gray-600" />
      <span className="text-sm font-medium text-gray-700">Theme:</span>
      <div className="flex space-x-2">
        {colors.map((color) => (
          <motion.button
            key={color.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(color.name as any)}
            className={`w-6 h-6 rounded-full ${color.color} transition-all duration-200 ${
              currentTheme === color.name ? `ring-2 ${color.ring} ring-offset-2` : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
