export const generateImage = async (prompt: string, apiKey: string) => {
  const endpoint = "https://api.openai.com/v1/images";

  const requestBody = {
    prompt: prompt,
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch image data");
    }

    const imageData = await response.json();

    return imageData;
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
};
