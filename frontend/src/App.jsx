import { useState } from "react";
import InputForm from "./components/InputForm";
import ResultCard from "./components/ResultCard";
import Summary from "./components/Summary";
import { sendData } from "./services/api";

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (data) => {
    try {
      setError("");
      setLoading(true);
      const res = await sendData(data);
      setResult(res);
    } catch (err) {
      setError("Failed to fetch API. Make sure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at 20% 20%, rgba(59,130,246,0.15), transparent 40%),
          radial-gradient(circle at 80% 0%, rgba(139,92,246,0.15), transparent 40%),
          linear-gradient(135deg, #020617, #0f172a)
        `,
        color: "white",
        padding: "30px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* Title */}
        <h1
          style={{
            textAlign: "center",
            fontSize: "42px",
            fontWeight: "bold",
            background:
              "linear-gradient(90deg, #38bdf8, #6366f1, #22c55e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Hierarchy Builder
        </h1>

        {/* Input */}
        <InputForm onSubmit={handleSubmit} />

        {/* Loading */}
        {loading && (
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <p style={{ color: "#94a3b8" }}>Processing...</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div
            style={{
              color: "#f87171",
              textAlign: "center",
              padding: "10px",
              background: "#1e293b",
              borderRadius: "8px",
              border: "1px solid #334155",
            }}
          >
            {error}
          </div>
        )}

        {/* Results */}
        {result && !loading && (
          <>
            {/* Hierarchies */}
            <div>
              {result.hierarchies.map((item, i) => (
                <ResultCard key={i} item={item} />
              ))}
            </div>

            {/* Summary */}
            <Summary summary={result.summary} />

            {/* Invalid Entries */}
            <div style={boxStyle}>
              <h3 style={{ marginBottom: "10px" }}>Invalid Entries</h3>
              {result.invalid_entries.length === 0 ? (
                <p style={{ color: "#94a3b8" }}>None</p>
              ) : (
                result.invalid_entries.map((item, i) => (
                  <p key={i} style={{ color: "#f87171" }}>
                    {item}
                  </p>
                ))
              )}
            </div>

            {/* Duplicate Edges */}
            <div style={boxStyle}>
              <h3 style={{ marginBottom: "10px" }}>Duplicate Edges</h3>
              {result.duplicate_edges.length === 0 ? (
                <p style={{ color: "#94a3b8" }}>None</p>
              ) : (
                result.duplicate_edges.map((item, i) => (
                  <p key={i} style={{ color: "#facc15" }}>
                    {item}
                  </p>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const boxStyle = {
  padding: "15px",
  background: "rgba(15, 23, 42, 0.8)",
  borderRadius: "12px",
  border: "1px solid #334155",
};

export default App;