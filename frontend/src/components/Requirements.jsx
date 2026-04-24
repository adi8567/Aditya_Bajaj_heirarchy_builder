const Requirements = () => {
  return (
    <div className="glass card" style={{ marginBottom: "20px" }}>
      <h2 style={{ marginBottom: "10px" }}>Frontend Requirements</h2>

      <ul style={{ textAlign: "left", lineHeight: "1.6" }}>
        <li>Build a single-page frontend</li>
        <li>Provide an input field or textarea to enter node list</li>
        <li>Submit button should call API at <b>/bfhl</b></li>
        <li>
          Display response in structured format (tree view, cards, or table)
        </li>
        <li>Show clear error message if API call fails</li>
        <li>
          No framework restriction (React, Vue, HTML/CSS/JS all acceptable)
        </li>
      </ul>
    </div>
  );
};

export default Requirements;