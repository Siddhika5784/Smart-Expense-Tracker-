const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateExpenseInsight = async (expenses) => {
  const prompt = `
You are an AI financial assistant for a Smart Expense Tracker.

Analyze the user's expense data carefully.

Expense data:
${JSON.stringify(expenses, null, 2)}

Generate exactly three personalized insights:

1. An immediate warning about their biggest category leak.
2. One practical daily habit adjustment they can follow to save money.
3. A concrete estimation of how much money they could save next month by following your advice.

Keep the response clear, direct, personalized, and actionable.
Avoid generic financial jargon.
Do not provide investment advice.

Return ONLY the JSON object matching the required schema.
`;

  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,

    config: {
      responseMimeType: "application/json",

      responseSchema: {
        type: "object",
        properties: {
          warning: {
            type: "string",
            description:
              "An immediate personalized warning about the user's biggest spending category leak.",
          },

          dailyHabit: {
            type: "string",
            description:
              "One practical daily habit adjustment the user can follow to reduce spending and save money.",
          },

          estimatedSavings: {
            type: "string",
            description:
              "A concrete estimate of how much money the user could save next month by following the advice.Always include the Indian Rupee symbol (₹)",
          },
          
        },

        required: [
          "warning",
          "dailyHabit",
          "estimatedSavings",
        ],
      },
    },
  });

  return JSON.parse(response.text);
};

module.exports = {
  generateExpenseInsight,
};