import { openai } from "./openai";

const vectorize = async (input: string): Promise<number[]> => {
  const embeddingResponse = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input,
  });

  return embeddingResponse.data[0].embedding;
};

export { vectorize };
