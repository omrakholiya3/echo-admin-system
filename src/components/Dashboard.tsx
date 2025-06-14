
import { motion } from "framer-motion";
import { Users, Activity, Database, Settings } from "lucide-react";
import StatsCard from "./StatsCard";
import ActivityChart from "./ActivityChart";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Users",
      value: "2,543",
      change: "+12%",
      changeType: "increase" as const,
      icon: Users,
      color: "blue",
    },
    {
      title: "Active Sessions",
      value: "1,843",
      change: "+8%",
      changeType: "increase" as const,
      icon: Activity,
      color: "green",
    },
    {
      title: "Database Size",
      value: "45.2 GB",
      change: "+2.3%",
      changeType: "increase" as const,
      icon: Database,
      color: "purple",
    },
    {
      title: "System Health",
      value: "98.5%",
      change: "-0.1%",
      changeType: "decrease" as const,
      icon: Settings,
      color: "orange",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="space-y-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <ActivityChart />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: "New user registered", time: "2 minutes ago", type: "user" },
              { action: "Database backup completed", time: "1 hour ago", type: "system" },
              { action: "Settings updated", time: "3 hours ago", type: "config" },
              { action: "Security scan finished", time: "6 hours ago", type: "security" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'user' ? 'bg-blue-500' :
                  activity.type === 'system' ? 'bg-green-500' :
                  activity.type === 'config' ? 'bg-orange-500' :
                  'bg-red-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
