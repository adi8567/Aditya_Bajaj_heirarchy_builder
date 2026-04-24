import { useState } from "react";

const InputForm = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) {
      alert("Enter some data");
      return;
    }

    const data = input.split(",").map((s) => s.trim());
    onSubmit(data);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <textarea
        placeholder="Enter nodes like A->B, A->C"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={5}
        style={{ width: "100%", padding: "10px" }}
      />
      <button
        onClick={handleSubmit}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default InputForm;