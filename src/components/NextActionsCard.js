import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const NextActionsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Next Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li>• Plant cover crops in Field B</li>
          <li>• Apply compost to Field A</li>
          <li>• Check irrigation system</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default NextActionsCard;
