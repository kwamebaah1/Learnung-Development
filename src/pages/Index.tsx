import FleetSidebar from '@/components/FleetSidebar';
import VehicleDetails from '@/components/VehicleDetails';
import RoutesSection from '@/components/RoutesSection';
import DriverStatistics from '@/components/DriverStatistics';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Sidebar - Hidden on mobile, shown on desktop */}
      <div className="lg:block hidden">
        <FleetSidebar />
      </div>
            
      {/* Main Content */}
      <div className="flex-1 lg:ml-16 xl:ml-80 p-3 lg:p-6 overflow-auto">
        <div className="max-w-7xl mx-auto space-y-4 lg:space-y-6">
          {/* Vehicle Details */}
          <VehicleDetails />
          
          {/* Bottom Section - Stack on mobile, side-by-side on desktop */}
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
