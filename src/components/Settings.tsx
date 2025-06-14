
import { useState } from "react";
import { motion } from "framer-motion";
import { Settings as SettingsIcon, Bell, Database, User } from "lucide-react";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [autoBackup, setAutoBackup] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);

  const settingSections = [
    {
      title: "General Settings",
      icon: SettingsIcon,
      color: "blue",
      settings: [
        {
          label: "Enable Notifications",
          description: "Receive notifications about system events",
          value: notifications,
          onChange: setNotifications,
        },
        {
          label: "Dark Mode",
          description: "Switch to dark theme",
          value: darkMode,
          onChange: setDarkMode,
        },
      ],
    },
    {
      title: "Security Settings",
      icon: User,
      color: "red",
      settings: [
        {
          label: "Two-Factor Authentication",
          description: "Add an extra layer of security to your account",
          value: twoFactor,
          onChange: setTwoFactor,
        },
      ],
    },
    {
      title: "System Settings",
      icon: Database,
      color: "green",
      settings: [
        {
          label: "Auto Backup",
          description: "Automatically backup data daily",
          value: autoBackup,
          onChange: setAutoBackup,
        },
      ],
    },
  ];

  const Toggle = ({ value, onChange }: { value: boolean; onChange: (value: boolean) => void }) => (
    <button
      onClick={() => onChange(!value)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        value ? "bg-blue-600" : "bg-gray-200"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          value ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
      >
        {[
          { title: "Total Settings", value: "12", icon: SettingsIcon, color: "blue" },
          { title: "Active Alerts", value: "3", icon: Bell, color: "yellow" },
          { title: "Last Backup", value: "2h ago", icon: Database, color: "green" },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 bg-${stat.color}-500 rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {settingSections.map((section, sectionIndex) => {
        const Icon = section.icon;
        return (
          <motion.div
            key={sectionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + sectionIndex * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 bg-${section.color}-500 rounded-lg flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {section.settings.map((setting, settingIndex) => (
                <div key={settingIndex} className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">{setting.label}</h4>
                    <p className="text-sm text-gray-500 mt-1">{setting.description}</p>
                  </div>
                  <Toggle value={setting.value} onChange={setting.onChange} />
                </div>
              ))}
            </div>
          </motion.div>
        );
      })}

      {/* Save Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex justify-end"
      >
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Save Changes
        </button>
      </motion.div>
    </div>
  );
};

export default Settings;
