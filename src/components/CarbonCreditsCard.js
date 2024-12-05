import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const CarbonCreditsCard = () => {
  const [carbonCredits, setCarbonCredits] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarbonCredits(prev => prev + 0.1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Carbon Credits</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold">{carbonCredits.toFixed(1)}</p>
        <p className="text-sm text-gray-500">Tons CO2 equivalent</p>
      </CardContent>
    </Card>
  );
};

export default CarbonCreditsCard;
