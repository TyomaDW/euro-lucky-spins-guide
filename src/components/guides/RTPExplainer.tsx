
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Percent } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface RTPExplainerProps {
  rtpValue: number;
  gameType: string;
}

const RTPExplainer = ({ rtpValue, gameType }: RTPExplainerProps) => {
  const data = [
    { name: 'Return to Player', value: rtpValue },
    { name: 'House Edge', value: 100 - rtpValue }
  ];
  
  const COLORS = ['#f59e0b', '#334155'];

  return (
    <Card className="bg-casino-card border-casino-gray">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Percent className="w-6 h-6 text-casino-yellow" />
          <h3 className="text-xl font-bold text-white">{gameType} RTP: {rtpValue}%</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-300 mb-4">
              Return to Player (RTP) represents the percentage of all wagered money that a game will pay back to players over time. The higher the RTP, the better your chances of winning.
            </p>
            
            <div className="mb-4">
              <h4 className="text-white font-medium mb-1">What this means:</h4>
              <p className="text-gray-300">
                For every £100 wagered on {gameType} with {rtpValue}% RTP, you can expect to get about £{rtpValue.toFixed(2)} back over the long term. The remaining £{(100 - rtpValue).toFixed(2)} is the casino's advantage.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-1">Important to know:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>RTP is calculated over millions of game rounds</li>
                <li>Short-term results can vary significantly</li>
                <li>Higher RTP games typically offer more play time for your money</li>
                <li>UK-licensed casinos must disclose RTP percentages</li>
              </ul>
            </div>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => `${value}%`} 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    color: 'white' 
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RTPExplainer;
