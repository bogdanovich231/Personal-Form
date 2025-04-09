export const convertFile = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const fullBase64 = reader.result as string;
      const shortBase64 = fullBase64.slice(0, 20) + '...';
      resolve(shortBase64);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};
