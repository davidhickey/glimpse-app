import { User } from '@prisma/client';
import { CreateUser, UpdateUser } from './types';
import { API_URL } from '@/utils/constants';

export const getUsers = async (): Promise<{data: User[], success: boolean, message: string}> => {
  const response = await fetch(`${API_URL}/api/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};

export const createUser = async (userData: CreateUser): Promise<{data: User, success: boolean, message: string}> => {
  const response = await fetch(`${API_URL}/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  return data;
};

export const getUser = async (id: string): Promise<{data: User, success: boolean, message: string}> => {
  const response = await fetch(`${API_URL}/api/users/${id}`);
  const data = await response.json();
  return data;
};

export const updateUser = async (id: string, userData: UpdateUser): Promise<{data: User, success: boolean, message: string}> => {
  const response = await fetch(`${API_URL}/api/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  return data;
};

export const deleteUser = async (id: string): Promise<{data: null, success: boolean, message: string}> => {
  const response = await fetch(`${API_URL}/api/users/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
};


