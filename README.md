# SAYSO-VOTING
## SaySo Voting — polls &amp; analytics (group project)
A modern React application for managing company policies, conducting votes, and tracking analytics. Users can view policies, vote on them, and create new policies in a collaborative environment.

## Table of Contents
- Table of Contents
- Project Overview
- Features
- Tech Stack
- Project Structure
- Installation
- Running the App
- API Endpoints
- Usage
- Contributing
- License
- Author

## Project Overview
SaySo Voting is a web application designed to facilitate the management of company policies and voting processes. It allows users to view existing policies, vote on them, and create new policies. The application also provides analytics to track voting trends and outcomes.

## Features
- View existing company policies
- Vote on policies
- Create new policies
- Track voting analytics
- User authentication and authorization
- Responsive design for various devices
- Real-time updates on voting results 
- Admin dashboard for managing policies and users

## Tech Stack
- Frontend: React, Redux, Tailwind CSS
- Backend: Node.js.
- Mock API: JSON Server
- Database: JSON file (for mock data)
- Version Control: Git, GitHub

## Project Structure
```
sayso-voting/
│├── public/
│   ├── index.html
│   └── ...
│src/
├── api/
│   └── api.js                 # All GET/POST requests to json-server
├── components/
│   ├── Navbar.jsx             # Navigation bar (all pages)
│   ├── PolicyCard.jsx         # Single policy card
│   ├── VoteButton.jsx         # Yes/No vote buttons
│   └── ResultCard.jsx         # Optional vote counts/percentages
├── pages/
│   ├── Home.jsx               # Landing page
│   ├── PolicyList.jsx         # Display all policies
│   ├── PolicyDetails.jsx      # Show single policy details
│   ├── VotePage.jsx           # Voting page
│   └── CreatePolicy.jsx       # Form to create a policy
├── styles/
│   ├── App.css                # Global styles
│   ├── index.css              # Reset, fonts, colors
│   ├── Navbar.css
│   ├── PolicyCard.css
│   ├── VoteButton.css
│   ├── ResultCard.css
│   ├── PolicyList.css
│   ├── PolicyDetails.css
│   └── CreatePolicy.css
├── App.jsx                     # Routes & main app container
├── main.jsx                    # ReactDOM.render / root element
└── db.json                      # Mock database for json-server

```

## Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd sayso-voting
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install JSON Server globally (if not already installed):
   ```bash
   npm install -g json-server
   ```
 ## Running the App
1. Start the mock API server:
   ```bash
   json-server --watch db.json --port 3000  
   ```
2. In a separate terminal, start the React application:
   ```bash
   npm start
   ```
3. Open your browser and navigate to `http://localhost:5173` to view the app.
Ensure the JSON Server is running on port 3000 as the React app will make API calls to this port.

## API Endpoints
- `GET /policies` - Retrieve all policies
- `GET /policies/:id` - Retrieve a single policy by ID
- `POST /policies` - Create a new policy
- `POST /policies/:id/vote` - Submit a vote for a policy

## Usage
- Navigate to the home page to view existing policies.
- Click on View Policies to see the list of all policies.
- On the Policies page, click on a policy to view its details.
- On the Policy Details page, click Vote Now to cast your vote.
- Select Yes or No and submit your vote.
- To create a new policy, navigate to the Create Policy page and fill out the form.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License.





     



