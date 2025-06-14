
import { motion } from "framer-motion";
import { X, User, Bell, Database } from "lucide-react";

interface UserModalProps {
  user: any;
  onClose: () => void;
}

const UserModal = ({ user, onClose }: UserModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">User Details</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* User Info */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-medium">{user?.avatar}</span>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900">{user?.name}</h4>
              <p className="text-gray-500">{user?.email}</p>
            </div>
          </div>

          {/* User Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <User className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Role</p>
              <p className="font-semibold text-gray-900">{user?.role}</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Bell className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Status</p>
              <p className="font-semibold text-gray-900">{user?.status}</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Database className="w-6 h-6 text-purple-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Last Login</p>
              <p className="font-semibold text-gray-900">{user?.lastLogin}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-3">
            <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Edit User
            </button>
            <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
              Reset Password
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default UserModal;
