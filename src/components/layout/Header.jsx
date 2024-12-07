import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useUser } from '../../context/UserContext';

export function ProfileForm() {
  const { userData, updateUserData } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const profileData = {
      fullName: formData.get('fullName'),
      studentId: formData.get('studentId'),
      email: formData.get('email'),
      phoneNumber: formData.get('phoneNumber'),
      yearLevel: formData.get('yearLevel'),
      bio: formData.get('bio'),
      socialLinks: {
        linkedin: formData.get('linkedin'),
        github: formData.get('github')
      }
    };
    
    updateUserData('profile', profileData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                defaultValue={userData.profile?.fullName}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <Label htmlFor="studentId">Student ID</Label>
              <Input
                id="studentId"
                name="studentId"
                defaultValue={userData.profile?.studentId}
                placeholder="Enter your student ID"
                required
              />
            </div>

            <div>
              <Label htmlFor="email">University Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                defaultValue={userData.profile?.email}
                placeholder="your.name@university.edu"
                required
              />
            </div>

            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                defaultValue={userData.profile?.phoneNumber}
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <Label htmlFor="yearLevel">Year Level</Label>
              <Input
                id="yearLevel"
                name="yearLevel"
                type="number"
                min="1"
                max="4"
                defaultValue={userData.profile?.yearLevel}
                placeholder="Enter your year level (1-4)"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="bio">Bio</Label>
            <Input
              id="bio"
              name="bio"
              defaultValue={userData.profile?.bio}
              placeholder="Write a short bio about yourself"
              className="h-24"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Social Links</h3>
            <div>
              <Label htmlFor="linkedin">LinkedIn Profile</Label>
              <Input
                id="linkedin"
                name="linkedin"
                defaultValue={userData.profile?.socialLinks?.linkedin}
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div>
              <Label htmlFor="github">GitHub Profile</Label>
              <Input
                id="github"
                name="github"
                defaultValue={userData.profile?.socialLinks?.github}
                placeholder="https://github.com/yourusername"
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            Save Profile
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}