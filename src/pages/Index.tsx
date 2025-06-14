
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ColorThemeProvider } from "../contexts/ColorThemeContext";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import Users from "../components/Users";
import Settings from "../components/Settings";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "users":
        return <Users />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ColorThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex w-full">
        <AnimatePresence>
          {(sidebarOpen || !isMobile) && (
            <Sidebar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              isMobile={isMobile}
            />
          )}
        </AnimatePresence>

        <div className="flex-1 flex flex-col min-w-0">
          <Header
            activeTab={activeTab}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            isMobile={isMobile}
          />

          <main className="flex-1 p-4 md:p-6 lg:p-8">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              {renderContent()}
            </motion.div>
          </main>
        </div>

        {/* Mobile overlay */}
        <AnimatePresence>
          {sidebarOpen && isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            />
          )}
        </AnimatePresence>
      </div>
    </ColorThemeProvider>
  );
};

export default Index;
