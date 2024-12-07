import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useUser } from '../../context/UserContext';

export function AcademicForm() {
  const { userData, updateUserData } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const academicData = {
      major: formData.get('major'),
      gpa: formData.get('gpa'),
      coursework: formData.get('coursework'),
      graduationYear: formData.get('graduationYear')
    };
    
    updateUserData('academic', academicData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Academic Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="major">Major</Label>
            <Input
              id="major"
              name="major"
              defaultValue={userData.academic?.major}
              placeholder="e.g., Computer Science"
              required
            />
          </div>

          <div>
            <Label htmlFor="gpa">GPA</Label>
            <Input
              id="gpa"
              name="gpa"
              type="number"
              step="0.01"
              min="0"
              max="4"
              defaultValue={userData.academic?.gpa}
              placeholder="e.g., 3.50"
            />
          </div>

          <div>
            <Label htmlFor="coursework">Current Coursework</Label>
            <Input
              id="coursework"
              name="coursework"
              defaultValue={userData.academic?.coursework}
              placeholder="e.g., Data Structures, Algorithms"
            />
          </div>

          <div>
            <Label htmlFor="graduationYear">Expected Graduation Year</Label>
            <Input
              id="graduationYear"
              name="graduationYear"
              type="number"
              min="2024"
              max="2030"
              defaultValue={userData.academic?.graduationYear}
              placeholder="e.g., 2025"
            />
          </div>

          <Button type="submit" className="w-full">Save Academic Info</Button>
        </form>
      </CardContent>
    </Card>
  );
}