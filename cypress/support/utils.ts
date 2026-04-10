export const generateRandomString = (length: number = 6): string => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
  
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  
    return result;
};
  
export const generateRandomInteger = (
    min: number = 10000,
    max: number = 99999
): string => {
    return Math.floor(Math.random() * (max - min + 1) + min).toString();
};