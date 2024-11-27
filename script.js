async function generateRandomText() {
    const prompt = "Hãy tạo một đoạn văn bản dài ngẫu nhiên bằng tiếng Việt để có thể nói trong khoảng 5p, nói về hoặc cuộc sống, thiên nhiên, thời tiết, nông sản, văn hóa,....";
    const apiKey = process.env.OPENAI_API_KEY || 'fallback-key';
  
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003", 
        prompt: prompt,
        max_tokens: 300, 
        temperature: 0.7, 
      }),
    });
  
    const data = await response.json();
    const randomText = data.choices[0].text.trim();
    document.getElementById("random-text").innerText = randomText;
  }
  