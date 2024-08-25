import { generateIAPrompt } from '../helpers';
import { Mode } from '../models';
import axios from './axios';

export async function getCommandDescription(command: string, mode: Mode) {
  const prompt = generateIAPrompt(command, mode)
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
