export const validators = {
    email: (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email) ? '' : 'Invalid email address';
    },
  
    required: (value) => {
      return value && value.trim() !== '' ? '' : 'This field is required';
    },
  
    phone: (phone) => {
      const regex = /^\+?[\d\s-]{10,}$/;
      return regex.test(phone) ? '' : 'Invalid phone number';
    },
  
    password: (password) => {
      if (password.length < 8) return 'Password must be at least 8 characters';
      if (!/\d/.test(password)) return 'Password must contain a number';
      if (!/[A-Z]/.test(password)) return 'Password must contain an uppercase letter';
      if (!/[a-z]/.test(password)) return 'Password must contain a lowercase letter';
      return '';
    },
  
    studentId: (id) => {
      const regex = /^\d{8}$/;
      return regex.test(id) ? '' : 'Invalid student ID format';
    },
  
    year: (year) => {
      const value = parseInt(year);
      return value >= 1 && value <= 4 ? '' : 'Year must be between 1 and 4';
    }
  };