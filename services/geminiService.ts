import { GoogleGenAI, Type } from "@google/genai";

const apiKey = process.env.API_KEY || ''; // Ensure this is set in environment

export const generateThumbnailConcept = async (videoTopic: string, channelNiche: string) => {
  if (!apiKey) {
    console.warn("Gemini API Key is missing.");
    return {
      concept: "Please configure your API key to use this feature.",
      titleIdeas: ["API Key Missing", "Check Configuration"]
    };
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a high-CTR YouTube thumbnail concept and 3 catchy titles for a video about "${videoTopic}" in the "${channelNiche}" niche. 
      Focus on emotional hooks, curiosity gaps, and visual storytelling.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            concept: {
              type: Type.STRING,
              description: "A detailed visual description of the thumbnail composition, facial expressions, and text overlays.",
            },
            titleIdeas: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "3 clickable, high-performing video titles.",
            },
          },
          required: ["concept", "titleIdeas"],
        },
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text);
  } catch (error) {
    console.error("Error generating concept:", error);
    return {
      concept: "Could not generate concept at this time. Please try again.",
      titleIdeas: []
    };
  }
};