// utils/getFinancialAdvice.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini AI client
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  console.log(totalBudget, totalIncome, totalSpend);

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
      Based on the following financial data:
      - Total Budget: ${totalBudget} Rupees
      - Expenses: ${totalSpend} Rupees
      - Incomes: ${totalIncome} Rupees
      
      Provide detailed financial advice in **2 sentences** to help the user manage their finances more effectively.
      
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log(text);
    return text;
  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
  }
};

export default getFinancialAdvice;
