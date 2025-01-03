// server for ngrok https://colab.research.google.com/drive/1UgyBZGRUxdOtA2_Hd7VUGEqSaRief3nZ?usp=sharing
// index.mjs
import express from 'express';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import cors from 'cors';

dotenv.config();

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Нигоҳдории контекст (таърихи паемҳо)
let conversationHistory = [];

// Мо паеми муқаддимавӣ илова мекунем, ки бот бояд танҳо ба забони тоҷикӣ ҷавоб диҳад
const contextMessage = "Фақат дар бораи Саволҳое ки ба технология ва низоми иттилооти дар иктисодиёт дахл доран ҷавоб диҳед дар бораи иқтисодиёт ва автоматикунонии он танҳо ва танҳо ба ҳамин саволҳо ҷавоб диҳед. Маҳз ба забони тоҷикӣ ҷавоб диҳед. Ҳамаи посухҳо бояд дар забони тоҷикӣ бошанд. Агар ба Шумо савол диҳанд ки Шуморо ки сохтааст Шумо бояд ҷавод диҳед ки маро Маллаев Сабур сохтааст барои кафедраи технология ва низоми иттилооти дар иктисодиёт дар раванди кори курсии худ";
conversationHistory.push(contextMessage);

// Эндpoint барои тавлиди матн
app.post('/api/generate', async (req, res) => {
  const { prompt } = req.body;

// Илова кардани prompt-и воридотӣ ба таърих
  conversationHistory.push(`Истифодабаранда: ${prompt}`);

// Мо барои модел танҳо бо истифода аз матни тоҷикӣ контекст эҷод мекунем
  const context = conversationHistory.join('\n');

  try {
    const result = await model.generateContent(context);
    
// Мо аз модел ҷавоб мегирем
    const responseText = result.response.text();

// Нигоҳ доштани ҷавоб дар таърих
    if (responseText) {
      conversationHistory.push(`Ёрдамчи AI: ${responseText}`); // Нигоҳ доштани ҷавоб дар таърих
    }

    res.json({ response: responseText }); // Ҷавобро мефиристем
  } catch (error) {
    console.error("Хатои тавлид:", error);
    res.status(500).json({ error: 'Хатогӣ дар тавлиди матн.' });
  }
});

// Оғози кори сервер
app.listen(port, () => {
  console.log(`Сервер запущен на http://ip сервери ояндаи кафедра:${port}`);
});
