import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Sun, Droplets } from 'lucide-react';

const WeatherCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Conditions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Sun className="h-6 w-6 mr-2 text-yellow-500" />
            <span>Sunny</span>
          </div>
          <span className="text-2xl font-bold">72°F</span>
        </div>
        <div className="flex items-center mt-2">
          <Droplets className="h-6 w-6 mr-2 text-blue-500" />
          <span>Humidity: 45%</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
