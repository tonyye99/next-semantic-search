import OpenAI from "openai";
import "@/envConfig";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
