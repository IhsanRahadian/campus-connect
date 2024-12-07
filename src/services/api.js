const BASE_URL = 'http://localhost:3000/api';

export const api = {
  async getPotentialMatches() {
    // Mock API call
    return [
      {
        id: 1,
        name: "Jane Doe",
        major: "Computer Science",
        interests: ["AI", "Web Development"],
        academicYear: 3
      },
      // Add more mock data as needed
    ];
  },

  async updateUserProfile(profileData) {
    // Mock API call
    console.log('Profile updated:', profileData);
    return { success: true };
  },

  async getRecommendations(userId) {
    // Mock API call
    return [];
  }
};