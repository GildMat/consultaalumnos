// .ts
export const fetchStudentData = async (carnet: string) => {
  try {
    const response = await fetch(`https://test-deploy-12.onrender.com/estudiantes?carnet=${carnet}`);
    if (!response.ok) {
      throw new Error('Error fetching student data');
    }
    return response.json();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};
