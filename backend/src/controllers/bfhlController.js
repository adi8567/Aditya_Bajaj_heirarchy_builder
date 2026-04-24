import { processData } from "../services/mainService.js";

export const handleBFHL = (req, res) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({
        error: "Invalid input. 'data' must be an array."
      });
    }

    const processed = processData(data);

    const response = {
      user_id: "adi8567",   
      email_id: "aa5718@srmist.edu.in",
      college_roll_number: "RA2311003010904",

      hierarchies: processed.hierarchies,
      invalid_entries: processed.invalid_entries,
      duplicate_edges: processed.duplicate_edges,
      summary: processed.summary
    };

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error"
    });
  }
};