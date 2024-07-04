

// define utilities functions for passowrd

import * as bcrypt from 'bcryptjs';

// Hashes a given plaintext password
export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10; 
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

// Compares a plaintext password with a hashed password
export const comparePasswords = async (
  plaintextPassword: string,
  hashedPassword: string,
): Promise<boolean> => {
  return await bcrypt.compare(plaintextPassword, hashedPassword);
};

