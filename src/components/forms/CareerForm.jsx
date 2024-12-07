import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useUser } from '../../context/UserContext';

export function CareerForm() {
  const { userData, updateUserData } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const careerData = {
      desiredRole: formData.get('desiredRole'),
      industry: formData.get('industry'),
      experience: formData.get('experience'),
      skills: formData.get('skills').split(',').map(skill => skill.trim())
    };
    
    updateUserData('career', careerData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Career Goals</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="desiredRole">Desired Role</Label>
            <Input
              id="desiredRole"
              name="desiredRole"
              defaultValue={userData.career?.desiredRole}
              placeholder="e.g., Software Engineer"
              required
            />
          </div>

          <div>
            <Label htmlFor="industry">Preferred Industry</Label>
            <Input
              id="industry"
              name="industry"
              defaultValue={userData.career?.industry}
              placeholder="e.g., Tech, Healthcare, Finance"
            />
          </div>

          <div>
            <Label htmlFor="experience">Relevant Experience</Label>
            <Input
              id="experience"
              name="experience"
              defaultValue={userData.career?.experience}
              placeholder="e.g., Internships, Projects"
            />
          </div>

          <div>
            <Label htmlFor="skills">Skills (comma-separated)</Label>
            <Input
              id="skills"
              name="skills"
              defaultValue={userData.career?.skills?.join(', ')}
              placeholder="e.g., Python, JavaScript, React"
            />
          </div>

          <Button type="submit" className="w-full">Save Career Info</Button>
        </form>
      </CardContent>
    </Card>
  );
}