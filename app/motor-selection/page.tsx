"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const motors = [
  { name: "REV HD Hex", rpm: 6000, torque: 0.17, current: 9.8, weight: 200, price: 40, legal: ["FTC"] },
  { name: "REV Core Hex", rpm: 9000, torque: 0.09, current: 4.4, weight: 100, price: 35, legal: ["FTC"] },
  { name: "NeveRest 20", rpm: 340, torque: 0.56, current: 11.5, weight: 215, price: 45, legal: ["FTC"] },
  { name: "NeveRest 40", rpm: 160, torque: 1.10, current: 11.5, weight: 215, price: 45, legal: ["FTC"] },
];

export default function MotorSelectionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Motor Selection Guide</h1>
      <Card>
        <CardHeader>
          <CardTitle>FTC Legal Motors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="p-2 text-left">Motor</th>
                  <th className="p-2 text-right">RPM</th>
                  <th className="p-2 text-right">Torque (N⋅m)</th>
                  <th className="p-2 text-right">Current (A)</th>
                  <th className="p-2 text-right">Price</th>
                </tr>
              </thead>
              <tbody>
                {motors.map((m, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-2 font-medium">{m.name}</td>
                    <td className="p-2 text-right">{m.rpm}</td>
                    <td className="p-2 text-right">{m.torque}</td>
                    <td className="p-2 text-right">{m.current}</td>
                    <td className="p-2 text-right">${m.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
