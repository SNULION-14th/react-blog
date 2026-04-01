import { instance } from "@/shared/api";

/**
 * 사용자 목록 조회
 * @returns {Promise<Object>}
 */
export const getUsers = async () => {
  try {
    const response = await instance.get(`/users`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * 사용자 조회
 * @param {number} userId
 * @returns {Promise<{
 *  id: number;
 *  username: string;
 *  name: string;
 *  email: string;
 *  university: string;
 *  major: string;
 * }>}
 */
export const getUserById = async (userId) => {
  try {
    const response = await instance.get(`/users?id=${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
