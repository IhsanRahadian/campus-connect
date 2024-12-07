import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useUser } from '../../context/UserContext';

export function InterestsForm() {
  const { userData, updateUserData } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const interestsData = {
      hobbies: formData.get('hobbies').split(',').map(hobby => hobby.trim()),
      clubs: formData.get('clubs').split(',').map(club => club.trim()),
      studyPreferences: formData.get('studyPreferences'),
      availability: formData.get('availability')
    };
    
    updateUserData('interests', interestsData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Interests & Preferences</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="hobbies">Hobbies (comma-separated)</Label>
            <Input
              id="hobbies"
              name="hobbies"
              defaultValue={userData.interests?.hobbies?.join(', ')}
              placeholder="e.g., Reading, Gaming, Sports"
              required
            />
          </div>

          <div>
            <Label htmlFor="clubs">Clubs & Organizations</Label>
            <Input
              id="clubs"
              name="clubs"
              defaultValue={userData.interests?.clubs?.join(', ')}
              placeholder="e.g., Chess Club, Coding Club"
            />
          </div>

          <div>
            <Label htmlFor="studyPreferences">Study Preferences</Label>
            <Input
              id="studyPreferences"
              name="studyPreferences"
              defaultValue={userData.interests?.studyPreferences}
              placeholder="e.g., Group Study, Library, Online"
            />
          </div>

          <div>
            <Label htmlFor="availability">Typical Availability</Label>
            <Input
              id="availability"
              name="availability"
              defaultValue={userData.interests?.availability}
              placeholder="e.g., Weekday evenings, Weekends"
            />
          </div>

          <Button type="submit" className="w-full">Save Interests</Button>
        </form>
      </CardContent>
    </Card>
  );
}