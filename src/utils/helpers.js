export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const calculateCarbonCredits = (data) => {
  // This is a placeholder function. In a real application, this would involve
  // complex calculations based on various factors like soil organic matter,
  // farming practices, etc.
  return data.reduce((total, item) => total + item.organicMatter * 0.1, 0).toFixed(1);
};
