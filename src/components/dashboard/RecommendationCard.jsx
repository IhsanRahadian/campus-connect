import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserCircle, BookOpen, Briefcase } from 'lucide-react';

export function RecommendationCard({ recommendation }) {
  const { name, major, interests, matchPercentage = 0 } = recommendation || {};

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <UserCircle className="h-6 w-6" />
            {name || 'Recommended Connection'}
          </span>
          <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
            {matchPercentage}% Match
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-gray-500" />
            <span>{major || 'Major not specified'}</span>
          </div>
          {interests && interests.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-2 py-1 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          )}
          <Button className="w-full">Connect</Button>
        </div>
      </CardContent>
    </Card>
  );
}