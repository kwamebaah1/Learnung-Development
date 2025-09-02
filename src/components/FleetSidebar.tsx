import { Search, LayoutDashboard, BellDot, Star, Truck, Users, Home, MessageSquare, Settings, Plus, AlertCircle, ChevronDown, ChevronUp, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState } from 'react';

const FleetSidebar = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState({
    favorites: true,
    trucks: true,
    vans: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const navigationItems = [
    { icon: LayoutDashboard, active: false },
    { icon: Star, active: false },
    { icon: Users, active: false },
    { icon: Truck, active: true },
    { icon: Home, active: false },
    { icon: MessageSquare, active: false },
    { icon: Settings, active: false },
    { icon: BellDot, active: false },
  ];

  const favoriteDrivers = [
    {
      name: "Nolan Dokidis",
      role: "Mercedes-Benz Sprinter",
      status: "ON THE WAY",
      avatar: "/images/user-2.jpg",
      initials: "ND"
    },
    {
      name: "Ahmad Mango",
      role: "Volkswagen Transporter",
      status: "LOADING",
      avatar: "/images/user-3.jpg",
      initials: "AM"
    },
    {
      name: "James Lubin",
      role: "Volkswagen Transporter",
      status: "ON THE WAY",
      avatar: "/images/user-1.jpg",
      initials: "JL"
    },
    {
      name: "Talan Dorwart",
      role: "Mercedes-Benz Metris",
      status: "WAITING",
      avatar: "/images/user-4.jpg",
      initials: "TD",
      hasAlert: true
    }
  ];

  const trucks = [
    {
      name: "Jakob Vetrovs",
      role: "Volvo FL",
      status: "ON THE WAY",
      avatar: "/images/user-5.jpg",
      initials: "JV"
    },
    {
      name: "Zain Vetrovs",
      role: "Mercedes-Benz Atego",
      status: "WAITING",
      avatar: "/images/user-6.jpg",
      initials: "ZV",
      hasAlert: true
    },
    {
      name: "Jaylan Rhiel Madsen",
      role: "Volvo FL",
      status: "ON THE WAY",
      avatar: "/images/user-11.jpg",
      initials: "JM"
    },
    {
      name: "Gustavo Torff",
      role: "Volvo FH",
      status: "UNLOADING",
      avatar: "/images/user-8.jpg",
      initials: "GT"
    },
    {
      name: "Jaylen Botosh",
      role: "Man TGL B 190 4x2 BL CH",
      status: "LOADING",
      avatar: "/images/user-9.jpg",
      initials: "JB"
    },
    {
      name: "Marcus Dokidis",
      role: "Man TGL B 190 4x2 BL CH",
      status: "ON THE WAY",
      avatar: "/images/user-10.jpg",
      initials: "MD"
    }
  ];

  const vans = [
    {
      name: "Tiana Westervelt",
      role: "Volkswagen Transporter",
      status: "LOADING",
      avatar: "/images/user-7.jpg",
      initials: "TW"
    },
    {
      name: "Zain Korsgaard",
      role: "Mercedes-Benz Sprinter",
      status: "ON THE WAY",
      avatar: "/images/user-12.jpg",
      initials: "ZK"
    },
    {
      name: "Wilson Dokidis",
      role: "Mercedes-Benz Metris",
      status: "ON THE WAY",
      avatar: "/images/user-13.jpg",
      initials: "WD"
    },
    {
      name: "Jaxson Donin",
      role: "Volkswagen Transporter",
      status: "ON THE WAY",
      avatar: "/images/user-14.jpg",
      initials: "JD"
    }
  ];

  const StatusIndicator = ({ status, hasAlert = false }) => {
    if (hasAlert) {
      return ( 
        <div className="flex items-center gap-1"> 
          <div className="h-4 w-4 bg-red-500 rounded-full flex items-center justify-center overflow-hidden"> 
            <AlertCircle className="h-4 w-4 text-white" /> 
          </div> 
          <div className="text-xs font-bold text-black">
            {status}
          </div> 
        </div> 
      );
    }
    
    switch (status) {
      case 'WAITING':
        return <div className="text-xs font-bold text-black">{status}</div>;
      case 'ON THE WAY':
        return <div className="text-[11px] text-gray-400">{status}</div>;
      case 'LOADING':
        return <div className="text-[11px] text-gray-400">{status}</div>;
      case 'UNLOADING':
        return <div className="text-[11px] text-gray-400">{status}</div>;
      default:
        return <div className="text-[11px] text-gray-400">{status}</div>;
    }
  };

  const DriverItem = ({ driver, hasAlert = false }) => (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
      <div className="relative">
        <Avatar className="h-10 w-10 rounded-full overflow-hidden">
          <AvatarImage
            src={driver.avatar}
            className="object-cover w-full h-full"
          />
          <AvatarFallback className="text-xs font-medium">{driver.initials}</AvatarFallback>
        </Avatar>
        {hasAlert && (
          <div className="absolute -bottom-1 -right-[-5px] h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">{driver.name}</p>
        <p className="text-xs text-gray-500 truncate">{driver.role}</p>
      </div>
      <StatusIndicator status={driver.status} hasAlert={hasAlert} />
    </div>
  );

  return (
    <>
      {/* Mobile overlay - only show when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <div className={`fixed left-0 top-0 h-screen flex z-50 transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Icons Section */}
        <div className="w-16 bg-black h-full flex flex-col">
          {/* Navigation Icons */}
          <div className="flex flex-col gap-2 p-4 border-b border-gray-700">
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                variant={item.active ? "default" : "ghost"}
                size="sm"
                className={`w-10 h-10 p-0 ${
                  item.active 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <item.icon className="h-5 w-5" />
              </Button>
            ))}
          </div>

          {/* User Profile at bottom of icons section */}
          <div className="mt-auto p-4 border-t border-gray-700">
            <div className="flex justify-center">
              <Avatar className="h-10 w-10 rounded-full overflow-hidden">
                <AvatarImage 
                  src="/images/user-5.jpg" 
                  className="object-cover w-full h-full" 
                />
                <AvatarFallback className="bg-blue-500 text-white">JL</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-64 bg-white h-full flex flex-col border-l border-gray-200 relative">
          {/* Close button for mobile - only show when sidebar is open on mobile */}
          {isOpen && (
            <button 
              onClick={onClose}
              className="absolute -right-12 top-4 p-2 bg-black text-white rounded-full lg:hidden z-50"
            >
              <X className="h-5 w-5" />
            </button>
          )}

          {/* Search */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search..."
                className="pl-10 bg-gray-100 border-gray-200 text-gray-900 placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Scrollable Content - Hide scrollbar */}
          <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            {/* Favorites Section */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2"> 
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <h3 className="text-sm font-medium text-gray-900">FAVORITES</h3> 
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-6 w-6 p-0"
                  onClick={() => toggleSection('favorites')}
                >
                  {expandedSections.favorites ? (
                    <ChevronUp className="h-4 w-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  )}
                </Button>
              </div>
              {expandedSections.favorites && (
                <div className="space-y-2">
                  {favoriteDrivers.map((driver, index) => (
                    <DriverItem key={index} driver={driver} hasAlert={driver.hasAlert} />
                  ))}
                </div>
              )}
            </div>

            {/* Trucks Section */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-900">TRUCKS</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-6 w-6 p-0"
                  onClick={() => toggleSection('trucks')}
                >
                  {expandedSections.trucks ? (
                    <ChevronUp className="h-4 w-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  )}
                </Button>
              </div>
              {expandedSections.trucks && (
                <div className="space-y-2">
                  {trucks.map((driver, index) => (
                    <DriverItem key={index} driver={driver} hasAlert={driver.hasAlert} />
                  ))}
                </div>
              )}
            </div>

            {/* Vans Section */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-900">VANS</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-6 w-6 p-0"
                  onClick={() => toggleSection('vans')}
                >
                  {expandedSections.vans ? (
                    <ChevronUp className="h-4 w-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  )}
                </Button>
              </div>
              {expandedSections.vans && (
                <div className="space-y-2">
                  {vans.map((driver, index) => (
                    <DriverItem key={index} driver={driver} />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Add New Vehicle Button */}
          <div className="p-4 border-t border-gray-200">
            <Button className="w-full bg-black text-white hover:bg-gray-800 flex items-center justify-center text-sm">
              <span className="flex items-center justify-center w-4 h-4 rounded-full bg-white text-black mr-2">
                <Plus className="h-3 w-3" />
              </span>
              Add New Vehicle
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FleetSidebar;