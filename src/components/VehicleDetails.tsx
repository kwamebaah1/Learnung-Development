import { Phone, MessageSquare, MoreHorizontal } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import volkswagen from '@/assets/vw-truck.png';
import LicensePlate from '@/assets/license.png';

const VehicleDetails = () => {
  return (
    <div className="rounded-xl px-4 lg:px-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14 rounded-full overflow-hidden">
            <AvatarImage src="/images/user-1.jpg" className="object-cover w-full h-full" />
            <AvatarFallback className="bg-fleet-chart-blue text-white">JL</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">James Lubin</h2>
            <p className="text-sm text-gray-500">ID: 236-542-097</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 pr-3 border-r border-gray-200">
            <button className="p-2 text-black hover:text-gray-700 hover:scale-110 transition">
              <MessageSquare className="h-4 w-4 fill-current" />
            </button>
            <button className="p-2 text-black hover:text-gray-700 hover:scale-110 transition">
              <Phone className="h-4 w-4 fill-current" />
            </button>
          </div>

          <button className="p-2 text-black hover:text-gray-700 hover:scale-110 transition">
            <MoreHorizontal className="h-4 w-4 fill-current" />
          </button>
        </div>
      </div>
      <div className="bg-gray-100 rounded-md pt-6 px-6 pb-0 overflow-hidden">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Volkswagen Transporter</h3>
        {/* Vehicle Section */}
        <div className="relative grid lg:grid-cols-12 gap-6">
          {/* Decorative X Background */}
          <div className="absolute inset-y-0 right-0 flex items-stretch justify-end overflow-hidden mt-[-95px] mr-[-20px] pointer-events-none">
            <div className="flex opacity-20">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="relative w-56 h-full">
                  {/* First diagonal */}
                  <div className="absolute inset-y-0 left-1/2 w-9 bg-gray-300 rotate-45 -translate-x-1/2 scale-x-125 scale-y-125"></div>
                  {/* Second diagonal */}
                  <div className="absolute inset-y-0 left-1/2 w-9 bg-gray-300 -rotate-45 -translate-x-1/2 scale-x-125 scale-y-125"></div>
                </div>
              ))}
            </div>
          </div>
          {/* Vehicle Specifications (narrower, 4/12) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Payload and Load Volume */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Payload</p>
                <p className="text-xl font-bold text-gray-900">2,885 lbs</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Load Volume</p>
                <p className="text-xl font-bold text-gray-900">353.937 in³</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Load Length + License Plate */}
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Load Length</p>
                  <p className="text-xl font-semibold text-gray-900">117 in</p>
                </div>
                <div>
                  <div className="bg-gray-100 rounded-lg h-16">
                    <img 
                      src={LicensePlate} 
                      alt="License Plate" 
                      className="h-10 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Load Width + Documents */}
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Load Width</p>
                  <p className="text-xl font-semibold text-gray-900">67 in</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Documents</p>
                  <div className="bg-gray-100 rounded-lg h-16">
                    <div className="flex space-x-1.5">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-gray-400 rounded"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle Image (wider, 8/12) */}
          <div className="lg:col-span-8 mt-[-125px] mb-[-30px] relative z-10">
            <div className="relative">
              <img 
                src={volkswagen} 
                alt="Volkswagen Transporter" 
                className="w-full h-96 object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default VehicleDetails;