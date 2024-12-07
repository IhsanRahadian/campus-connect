import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ConnectionsGraph({ connections = [] }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw center node (current user)
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, 20, 0, 2 * Math.PI);
    ctx.fillStyle = '#3b82f6'; // blue-500
    ctx.fill();

    // Draw connections if they exist
    connections.forEach((connection, index) => {
      const angle = (2 * Math.PI * index) / connections.length;
      const x = Math.cos(angle) * 100 + width / 2;
      const y = Math.sin(angle) * 100 + height / 2;

      // Draw connection line
      ctx.beginPath();
      ctx.moveTo(width / 2, height / 2);
      ctx.lineTo(x, y);
      ctx.strokeStyle = '#94a3b8'; // slate-400
      ctx.stroke();

      // Draw connection node
      ctx.beginPath();
      ctx.arc(x, y, 15, 0, 2 * Math.PI);
      ctx.fillStyle = '#64748b'; // slate-500
      ctx.fill();
    });
  }, [connections]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Connection Network</CardTitle>
      </CardHeader>
      <CardContent>
        <canvas
          ref={canvasRef}
          width={400}
          height={400}
          className="w-full border rounded-lg bg-white"
        />
      </CardContent>
    </Card>
  );
}