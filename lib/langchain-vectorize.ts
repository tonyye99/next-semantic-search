import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";

const embeddings = new GoogleGenerativeAIEmbeddings({
  model: "embedding-001", // 768 dimensions
  taskType: TaskType.SEMANTIC_SIMILARITY,
  apiKey: process.env.GOOGLE_GENERATIVE_API_APIKEY,
});

const langchainEmbeddings = async (input: string): Promise<number[]> => {
  return await embeddings.embedQuery(input);
};

export { langchainEmbeddings };
