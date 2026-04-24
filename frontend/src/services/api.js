export const sendData = async (data) => {
  const res = await fetch("https://aditya-bajaj-heirarchy-builder.onrender.com/bfhl", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });

  if (!res.ok) {
    throw new Error("API Error");
  }

  return res.json();
};