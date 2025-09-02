import FleetSidebar from '@/components/FleetSidebar';
import VehicleDetails from '@/components/VehicleDetails';
import RoutesSection from '@/components/RoutesSection';
import DriverStatistics from '@/components/DriverStatistics';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile sidebar toggle button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed top-4 left-4 z-30 p-2 bg-black text-white rounded-full shadow-lg lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Sidebar */}
      <div className="hidden lg:block fixed left-0 top-0 h-full z-40">
        <FleetSidebar isOpen={true} onClose={() => {}} />
      </div>
      
      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <FleetSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>
            
      {/* Main Content */}
      <div className="flex-1 p-3 lg:p-5 overflow-auto w-full lg:ml-80">
        <div className="max-w-7xl mx-auto space-y-4 lg:space-y-6">
          {/* Vehicle Details */}
          <VehicleDetails />
          
          {/* Bottom Section */}
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 p-3 lg:p-6 items-stretch">
            {/* Left Column - Routes */}
            <div className="lg:pr-6 lg:border-r lg:border-gray-200 h-full">
              <RoutesSection />
            </div>

            {/* Right Column - Driver Statistics */}
            <div className="lg:pl-2 space-y-4 lg:space-y-6 h-full">
              <DriverStatistics />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
