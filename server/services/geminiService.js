const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateExpenseInsight = async (expenses) => {
  const prompt = `
You are an AI financial assistant for a Smart Expense Tracker.

Analyze the user's expense data and provide useful spending insights.

Expense data:
${JSON.stringify(expenses, null, 2)}

Provide a concise 3-bullet-point summary covering:
        1. An immediate warning about their biggest category leak.
        2. One practical daily habit adjustment to save money.
        3. A concrete estimation of how much money they could save next month by following your advice.
        Keep the response clear, direct, and actionable. Avoid generic financial jargon.
`;


  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
  });

  return response.text;
};

module.exports = {
  generateExpenseInsight,
};

