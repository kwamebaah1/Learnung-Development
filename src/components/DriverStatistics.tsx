import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './ui/tooltip';

interface TimeCategory {
  label: string;
  value: number;
  color: string;
  textColor: string;
}

interface PerformanceItem {
  label: string;
  time: string;
  percentage: number;
}

interface WorkingTimeData {
  date: string;
  average: string;
  total: string;
}

interface ChartDataItem {
  workingTime: number;
  averageTime: number;
}

const DriverStatistics = () => {
  const timeCategories: TimeCategory[] = [
    { label: 'On the Way', value: 39.7, color: 'bg-gray-300', textColor: 'text-black' },
    { label: 'Unloading', value: 28.3, color: 'bg-fleet-chart-blue', textColor: 'text-white' },
    { label: 'Loading', value: 17.4, color: 'bg-fleet-chart-orange', textColor: 'text-white' },
    { label: 'Waiting', value: 14.6, color: 'bg-gray-600', textColor: 'text-white' }
  ];

  const performanceData: PerformanceItem[] = [
    { label: 'On the Way', time: '3 hr 10 min', percentage: 39.7 },
    { label: 'Unloading', time: '2 hr 15 min', percentage: 28.3 },
    { label: 'Loading', time: '1 hr 23 min', percentage: 17.4 },
    { label: 'Waiting', time: '1 hr 10 min', percentage: 14.6 }
  ];

  const workingTimeData: WorkingTimeData[] = [
    { date: '9/26/22', average: '6 hr 32 min', total: '8 hr 30 min' },
    { date: 'Average', average: '8 hr 30 min', total: '' }
  ];

  const [selectedRange, setSelectedRange] = useState<string>("M");
  const ranges: string[] = ["W", "M", "6M", "Y"];

  // Generate random data for the chart
  const generateChartData = (): ChartDataItem[] => {
    return Array.from({ length: 7 }, () => ({
      workingTime: Math.floor(Math.random() * 80) + 20,
      averageTime: Math.floor(Math.random() * 60) + 30
    }));
  };

  const [chartData] = useState<ChartDataItem[]>(generateChartData());

  // Calculate cumulative percentages for positioning
  let cumulative = 0;
  const segmentPositions: number[] = timeCategories.map(category => {
    const position = cumulative;
    cumulative += category.value;
    return position;
  });

  return (
    <TooltipProvider>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900">Driver Statistics</h3>
          <ArrowUpRight className="h-5 w-5 text-gray-400" />
        </div>

        {/* Time Distribution Section */}
        <div className="rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xs font-medium text-gray-700">
              AVERAGE TIME PER DAY BY CATEGORY
            </h4>

            <div className="flex gap-2">
              {ranges.map((range) => (
                <button
                  key={range}
                  onClick={() => setSelectedRange(range)}
                  className={`px-1 py-1 text-xs rounded ${
                    selectedRange === range
                      ? "bg-gray-200 text-gray-800 font-semibold"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            {/* Labels with dashes */}
            <div className="relative mb-4 h-6">
              {timeCategories.map((category, index) => (
                <div
                  key={index}
                  className="absolute flex flex-col items-start"
                  style={{ left: `${segmentPositions[index]}%` }}
                >
                  <span className="text-xs text-gray-600 whitespace-nowrap">{category.label}</span>
                  {/* Vertical connector line with spacing */}
                  <div className="w-[2px] h-2 bg-gray-200 mt-1 mb-1"></div>
                </div>
              ))}
            </div>

            {/* Single thick horizontal bar with shadow */}
            <div className="w-full h-14 rounded-sm bg-gray-100 flex overflow-hidden relative shadow-lg">
              {timeCategories.map((category, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <div
                      className={`${category.color} h-full relative cursor-pointer`}
                      style={{ width: `${category.value}%` }}
                    >
                      <span
                        className={`absolute inset-0 flex items-center justify-start pl-2 text-sm font-medium ${category.textColor}`}
                      >
                        {category.value}%
                      </span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-medium">{category.label}</p>
                    <p>{category.value}% of total time</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>

          {/* Performance Table */}
          <div className="space-y-0">
            {performanceData.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between items-center py-2 ${
                  index !== performanceData.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <span className="text-sm text-gray-600">{item.label}</span>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">{item.time}</span>
                  <span className="text-sm text-gray-500">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Working Time Section */}
        <div className="rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xs font-medium text-gray-700">
              WORKING TIME PER DAY
            </h4>

            <div className="flex gap-2">
              {ranges.map((range) => (
                <button
                  key={range}
                  onClick={() => setSelectedRange(range)}
                  className={`px-1 py-1 text-xs rounded ${
                    selectedRange === range
                      ? "bg-gray-200 text-gray-800 font-semibold"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
          
          {/* Chart Visualization */}
          <div className="mb-6">
            {/* Bars */}
            <div className="flex items-end justify-between h-32 gap-2">
              {chartData.map((data, index) => (
                <div key={index} className="w-[12%] h-full flex flex-col items-center">
                  {/* Bars */}
                  <div className="w-full h-full flex items-end gap-1">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          className="bg-fleet-sidebar-dark rounded-t w-1/3 cursor-pointer"
                          style={{ height: `${data.workingTime}%`, minHeight: '6%' }}
                          aria-label="Working time"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="font-medium">Working Time</p>
                        <p>{data.workingTime}% of day</p>
                      </TooltipContent>
                    </Tooltip>
                    
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          className="bg-gray-300 rounded-t w-1/3 cursor-pointer"
                          style={{ height: `${data.averageTime}%`, minHeight: '6%' }}
                          aria-label="Average working time"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="font-medium">Average Working Time</p>
                        <p>{data.averageTime}% of day</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              ))}
            </div>
          </div>        
          
          {/* Legend */}
          <div className="flex justify-center items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-fleet-sidebar-dark rounded-full"></div>
              <span className="text-gray-600 font-semibold">Working Time</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <span className="text-gray-600 font-semibold">Average Working Time</span>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default DriverStatistics;