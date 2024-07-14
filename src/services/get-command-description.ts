import { generateIAPrompt } from '../helper';
import axios from './axios';

export async function getCommandDescription(command: string) {
  const prompt = generateIAPrompt(command)
  try {
    const response = await axios.post('/', {
      prompt,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching command description:', error);
    throw error;
  }
}
