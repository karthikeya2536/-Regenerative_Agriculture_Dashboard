import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SoilHealth = () => {
  const [organicMatter, setOrganicMatter] = useState('');
  const [pH, setPH] = useState('');
  const [soilData, setSoilData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      month: new Date().toLocaleString('default', { month: 'short' }),
      organicMatter: parseFloat(organicMatter),
      pH: parseFloat(pH)
    };
    setSoilData([...soilData, newData]);
    setOrganicMatter('');
    setPH('');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Soil Health</h1>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Add Soil Data</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2">Organic Matter (%):</label>
              <input
                type="number"
                step="0.1"
                value={organicMatter}
                onChange={(e) => setOrganicMatter(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">pH Level:</label>
              <input
                type="number"
                step="0.1"
                value={pH}
                onChange={(e) => setPH(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Data</button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Soil Health Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={soilData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="organicMatter" stroke="#8884d8" name="Organic Matter %" />
              <Line yAxisId="right" type="monotone" dataKey="pH" stroke="#82ca9d" name="pH Level" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default SoilHealth;