import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Authorization': `Bearer sk-proj-p5aVyM1h5hQtpqlaVySYT3BlbkFJUX44qijugw1S9JbXR2Dy`  // Substitua YOUR_OPENAI_API_KEY pela sua chave de API real
  }
});

export const sendMessage = async (message) => {
  const prompt = `Você: ${message}\nChatGPT:`;
  try {
    const response = await api.post('/completions', {
      model: "gpt-4",  // ou "gpt-4", dependendo do modelo que você tem acesso
      prompt: prompt,
      max_tokens: 150,
      temperature: 0.5
    });
    return response.data.choices[0].text.trim();  // Retorna a resposta do ChatGPT
  } catch (error) {
    console.error('Failed to fetch response:', error);
    return "Houve um erro ao tentar processar sua mensagem. Por favor, tente novamente.";  // Mensagem de erro padrão
  }
}
