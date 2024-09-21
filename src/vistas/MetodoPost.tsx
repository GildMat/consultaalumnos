// MetodoPost.tsx
export const enviarCurso = async (curso: { nombre: string, creditos: number, descripcion: string }) => {
  try {
    const response = await fetch('https://test-deploy-12.onrender.com/cursos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(curso),
    });

    if (!response.ok) {
      throw new Error('Error al enviar el curso');
    }

    return await response.json();
  } catch (error) {
    console.error('Hubo un problema al enviar el curso:', error);
    throw error;
  }
};
