import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, CartesianGrid } from 'recharts';
import { AlertCircle, TrendingUp, BarChart2, Target, ArrowUp, ArrowDown, DollarSign, Users, ShoppingCart, Percent } from 'lucide-react';

const SalesPerformanceLogo = () => (
  <div className="relative w-20 h-20">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg flex items-center justify-center">
      <div className="relative">
        <BarChart2 className="w-10 h-10 text-blue-600" />
        <Target className="w-5 h-5 text-rose-500 absolute -top-1 -right-1" />
      </div>
    </div>
    <div className="absolute -bottom-1 -right-1 bg-gradient-to-br from-green-400 to-green-500 rounded-full p-1.5 shadow-lg">
      <TrendingUp className="w-5 h-5 text-white" />
    </div>
  </div>
);

const MetricCard = ({ title, value, change, trend, subtitle, icon: Icon }) => (
  <div className="bg-white/90 rounded-xl p-5 hover:shadow-lg transition-all duration-300 border border-gray-100">
    <div className="flex justify-between items-start">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-gray-500" />
          <div className="text-sm font-medium text-gray-600">{title}</div>
        </div>
        <div className="text-2xl font-bold mt-2">{value}</div>
      </div>
      <div className={`flex items-center px-2 py-1 rounded-full ${trend === 'up' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
        {trend === 'up' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
        <span className="text-sm ml-1 font-medium">{change}</span>
      </div>
    </div>
    <div className="text-xs text-gray-500 mt-3">{subtitle}</div>
  </div>
);

const SalesDashboard = () => {
  const monthlyData = [
    { month: 'Jan', sales: 13.3, profit: 4.2, target: 12.0 },
    { month: 'Feb', sales: 13.9, profit: 4.8, target: 12.5 },
    { month: 'Mar', sales: 10.4, profit: 3.1, target: 11.0 },
    { month: 'Apr', sales: 10.3, profit: 3.0, target: 11.5 },
    { month: 'May', sales: 10.7, profit: 3.3, target: 12.0 },
    { month: 'Jun', sales: 12.2, profit: 3.9, target: 12.5 },
    { month: 'Jul', sales: 12.2, profit: 3.8, target: 13.0 },
    { month: 'Aug', sales: 10.6, profit: 3.2, target: 12.0 },
    { month: 'Sep', sales: 17.9, profit: 5.9, target: 13.5 },
    { month: 'Oct', sales: 15.9, profit: 5.1, target: 14.0 },
    { month: 'Nov', sales: 10.2, profit: 3.0, target: 12.5 },
    { month: 'Dec', sales: 14.6, profit: 4.7, target: 13.0 }
  ];

  const customerData = [
    { name: 'Scott Madden', sales: 947.63, profit: 270, discount: '28%', status: 'warning' },
    { name: 'Kelly Perez MD', sales: 995.01, profit: 269, discount: '27%', status: 'warning' },
    { name: 'Cynthia Haley', sales: 975.83, profit: 266, discount: '27%', status: 'warning' },
    { name: 'Mark Winters', sales: 947.02, profit: 264, discount: '28%', status: 'warning' },
    { name: 'Alex Morrow', sales: 916.82, profit: 261, discount: '28%', status: 'warning' }
  ];

  const regionData = [
    { region: 'North', value: 35 },
    { region: 'South', value: 45 },
    { region: 'East', value: 20 },
    { region: 'West', value: 30 }
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-rose-50 to-rose-100 min-h-screen">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <div className="col-span-3 space-y-6">
          <div className="bg-white/80 rounded-xl p-6 shadow-sm">
            <SalesPerformanceLogo />
            <h2 className="text-xl font-bold mt-4 text-gray-800">Sales Analytics</h2>
            <p className="text-sm text-gray-600 mt-2">Real-time performance metrics</p>
          </div>
          
          <div className="space-y-4">
            <MetricCard 
              title="Customer Retention"
              value="85.4%"
              change="+2.3%"
              trend="up"
              subtitle="vs. last month"
              icon={Users}
            />
            
            <MetricCard 
              title="Average Order Value"
              value="$342"
              change="+$28"
              trend="up"
              subtitle="30-day growth"
              icon={ShoppingCart}
            />
            
            <MetricCard 
              title="Revenue per Customer"
              value="$892"
              change="-$45"
              trend="down"
              subtitle="vs. previous quarter"
              icon={DollarSign}
            />
            
            <MetricCard 
              title="Market Share"
              value="23.5%"
              change="+1.2%"
              trend="up"
              subtitle="Industry position: #2"
              icon={Percent}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-9 space-y-6">
          {/* Top Stats */}
          <div className="grid grid-cols-4 gap-6">
            {['Total Sales', 'Total Profit', 'Average Discount', 'Growth'].map((title, index) => (
              <Card key={index} className="bg-gradient-to-br from-rose-200 to-rose-300 rounded-xl border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-medium text-gray-800">{title}</div>
                    {index === 0 && <DollarSign className="w-6 h-6 text-rose-600" />}
                    {index === 1 && <TrendingUp className="w-6 h-6 text-rose-600" />}
                    {index === 2 && <Percent className="w-6 h-6 text-rose-600" />}
                    {index === 3 && <BarChart2 className="w-6 h-6 text-rose-600" />}
                  </div>
                  <div className="text-3xl font-bold mt-4">
                    {index === 0 && '$151.96K'}
                    {index === 1 && '$31K'}
                    {index === 2 && '28%'}
                    {index === 3 && '+20%'}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-white rounded-xl border-none shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-lg font-medium">Sales vs Target</div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm text-gray-600">Sales</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                      <span className="text-sm text-gray-600">Target</span>
                    </div>
                  </div>
                </div>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="sales" stroke="#3b82f6" fill="#93c5fd" />
                      <Area type="monotone" dataKey="target" stroke="#f43f5e" fill="#fecdd3" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl border-none shadow-sm">
              <CardContent className="p-6">
                <div className="text-lg font-medium mb-6">Regional Performance</div>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={regionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="region" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Customer Table */}
          <Card className="bg-white rounded-xl border-none shadow-sm">
            <CardContent className="p-6">
              <div className="text-lg font-medium mb-4">Top Customers</div>
              <div className="overflow-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-3 text-left text-sm font-medium text-gray-600">Customer Name</th>
                      <th className="p-3 text-right text-sm font-medium text-gray-600">Total Sales</th>
                      <th className="p-3 text-right text-sm font-medium text-gray-600">Profit</th>
                      <th className="p-3 text-right text-sm font-medium text-gray-600">Discount</th>
                      <th className="p-3 text-center text-sm font-medium text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customerData.map((customer, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="p-3 text-sm">{customer.name}</td>
                        <td className="p-3 text-sm text-right">${customer.sales}</td>
                        <td className="p-3 text-sm text-right">${customer.profit}</td>
                        <td className="p-3 text-sm text-right">{customer.discount}</td>
                        <td className="p-3 text-center">
                          {customer.status === 'warning' && (
                            <AlertCircle className="inline text-yellow-500" size={16} />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SalesDashboard;
