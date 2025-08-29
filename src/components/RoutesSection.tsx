import Map from '@/assets/map-hd.png';

interface RouteData {
  id: string;
  address: string;
  distance: string;
  time: string;
  weight: string;
  volume: string;
}

const RoutesSection = () => {
  const routeData: RouteData[] = [
    {
      id: "107-591 • 138 packages",
      address: "2972 Westheimer Rd, Santa Ana • 270 Rucker Ave",
      distance: "0.62 mi",
      time: "10 min",
      weight: "2,160 lbs",
      volume: "3,357 in³"
    },
    {
      id: "ID: 109-270 • 107 packages", 
      address: "8900 Murray Ave • 168 W 10th St, Gilroy, CA 95020",
      distance: "",
      time: "",
      weight: "",
      volume: ""
    },
    {
      id: "ID: 112-791 • 86 packages",
      address: "230 Maydel Rd • 8258 Arroyo Ct, Suite 21, Gilroy, CA 95020",
      distance: "",
      time: "",
      weight: "",
      volume: ""
    },
    {
      id: "ID: 128-612 • 129 packages",
      address: "6215 Engle Way • 805 1st St, Gilroy, CA 95020",
      distance: "",
      time: "",
      weight: "",
      volume: ""
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Routes</h3>
        <p className="text-sm font-medium text-gray-500 border-b border-dashed border-gray-400 cursor-pointer">
          History
        </p>
      </div>
      
      {/* Current Route Status */}
      <div className="rounded-lg">
        <div className="flex items-center gap-2 mb-3">
          <p className="text-sm font-medium text-gray-500">NOW ON THE WAY</p>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <p className="text-lg font-semibold text-gray-900">{routeData[0].id}</p>
        <p className="text-sm text-gray-600 mb-5">{routeData[0].address}</p>
        
        {/* Map Image */}
        <div className="bg-gray-100 rounded-lg h-48 mt-3 mb-4 relative overflow-hidden">
          <img 
            src={Map} 
            alt="Route Map" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Route Details */}
        <div className="grid grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Distance</p>
            <p className="font-semibold">{routeData[0].distance}</p>
          </div>
          <div>
            <p className="text-gray-500">Time Left</p>
            <p className="font-semibold">{routeData[0].time}</p>
          </div>
          <div>
            <p className="text-gray-500">Weight</p>
            <p className="font-semibold">{routeData[0].weight}</p>
          </div>
          <div>
            <p className="text-gray-500">Volume</p>
            <p className="font-semibold">{routeData[0].volume}</p>
          </div>
        </div>
      </div>

      {/* Upcoming Routes */}
      <div className="space-y-8">
        <div>
          {/* Date with horizontal line */}
          <div className="flex items-center gap-2 mb-3">
            <p className="text-sm font-medium text-gray-500">12/11/22</p>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Routes under this date */}
          <div className="space-y-3">
            {routeData.slice(1, 3).map((route, index) => (
              <div key={index} className="rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <p className="font-semibold text-gray-900">{route.id}</p>
                <p className="text-xs text-gray-600">{route.address}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* Another date */}
          <div className="flex items-center gap-2 mb-3">
            <p className="text-sm font-medium text-gray-500">12/12/22</p>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Routes under this date */}
          <div className="space-y-3">
            {routeData.slice(3).map((route, index) => (
              <div key={index} className="rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <p className="font-semibold text-gray-900">{route.id}</p>
                <p className="text-xs text-gray-600">{route.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutesSection;