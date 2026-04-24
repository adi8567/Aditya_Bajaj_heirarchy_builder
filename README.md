# Hierarchy Builder

A full-stack web application that parses edge-list input (e.g. `A->B, A->C`) and builds visual hierarchical tree structures. It detects cycles, computes tree depth, flags duplicate edges and invalid entries, and returns a structured JSON summary.

## Features

- Parses `parent->child` edge notation from comma-separated input
- Builds multi-root hierarchy trees
- Detects cycles in the graph
- Identifies and reports duplicate edges and invalid entries
- Returns depth, tree structure, and a summary for each hierarchy
- Clean dark-themed React frontend with tree visualization

## Tech Stack

**Frontend:** React + Vite  
**Backend:** Node.js + Express

## Project Structure

```
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── server.js
│   │   ├── controllers/bfhlController.js
│   │   ├── routes/bfhlRoutes.js
│   │   ├── services/
│   │   │   ├── mainService.js
│   │   │   ├── parserService.js
│   │   │   ├── graphService.js
│   │   │   ├── treeService.js
│   │   │   └── summaryService.js
│   │   └── utils/
│   │       ├── validator.js
│   │       ├── cycleDetector.js
│   │       └── depthCalculator.js
└── frontend/
    └── src/
        ├── App.jsx
        ├── components/
        │   ├── InputForm.jsx
        │   ├── ResultCard.jsx
        │   ├── TreeView.jsx
        │   ├── Summary.jsx
        │   └── Requirements.jsx
        └── services/api.js
```

## Getting Started

### Prerequisites

- Node.js v18+
- npm

### Backend

```bash
cd backend
npm install
npm run dev
```

Server runs on `http://localhost:5000`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

App runs on `http://localhost:5173`

## API

### `POST /bfhl`

**Request:**
```json
{
  "data": ["A->B", "A->C", "B->D"]
}
```

**Response:**
```json
{
  "user_id": "adi8567",
  "email_id": "aa5718@srmist.edu.in",
  "college_roll_number": "RA2311003010904",
  "hierarchies": [
    {
      "root": "A",
      "tree": { "A": { "B": { "D": {} }, "C": {} } },
      "depth": 3
    }
  ],
  "invalid_entries": [],
  "duplicate_edges": [],
  "summary": { ... }
}
```

## Usage

Enter edges in the input box as a comma-separated list:

```
A->B, A->C, B->D, C->E
```

The app will render the hierarchy tree, depth, and any validation errors.

## Author

**Aditya**  
SRM Institute of Science and Technology  
Roll No: RA2311003010904
