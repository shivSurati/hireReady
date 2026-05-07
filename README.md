# HireReady — AI Interview Prep

A full-stack MERN application that uses Google's Gemini AI to generate personalized interview preparation plans. Upload your resume or paste a self-description alongside a job description, and get a complete interview strategy in ~30 seconds.

**Live Demo:** [hireready-frontend.vercel.app](https://hireready-frontend.vercel.app)

---

## What it does

You paste a job description and either upload your resume PDF or write a short self-description. The AI analyzes both and generates:

- **Technical questions** tailored to the role and your background, with model answers and the interviewer's intention behind each question
- **Behavioral questions** with STAR-method guidance
- **Match score** showing how well your profile fits the job
- **Skill gaps** with severity levels (low / medium / high)
- **Day-by-day preparation roadmap** to fill those gaps before the interview
- **AI-generated resume PDF** optimized for the job description (local version)

---

## Screenshots

### Home — Create your interview plan

![Home Page](./screenshots/home.png)

### Interview Report — Technical Questions

![Technical Questions](./screenshots/technical.png)

### Interview Report — Behavioral Questions

![Behavioral Questions](./screenshots/behavioral.png)

### Interview Report — Preparation Roadmap

![Roadmap](./screenshots/roadmap.png)

---

## Tech Stack

**Frontend**

- React.js (Vite)
- React Router
- Axios
- SCSS

**Backend**

- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication (cookie-based)
- Multer (file upload)
- pdf-parse (PDF text extraction)
- Puppeteer (PDF generation)

**AI**

- Google Gemini 2.5 Flash API
- Zod + zod-to-json-schema (structured AI responses)

**Deployment**

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## Features

- JWT authentication with token blacklisting on logout
- Resume PDF upload and parsing
- Structured AI responses using Gemini's response schema
- Protected routes
- Responsive dark UI
- Recent interview plans history on home page

---

## Local Setup

### Prerequisites

- Node.js 18+
- MongoDB Atlas account (or local MongoDB)
- Google Gemini API key

### 1. Clone the repo

```bash
git clone https://github.com/shivSurati/hireReady.git
cd hireReady
```

### 2. Setup Backend

```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend` folder:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_GENAI_API_KEY=your_gemini_api_key
```

Start the backend:

```bash
npx nodemon server.js
```

### 3. Setup Frontend

```bash
cd ../Frontend
npm install
```

Create a `.env` file in the `Frontend` folder:

```env
VITE_API_URL=http://localhost:3000
```

Start the frontend:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Project Structure

```
hireReady/
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   └── interview.controller.js
│   │   ├── middlewares/
│   │   │   ├── auth.middleware.js
│   │   │   └── file.middleware.js
│   │   ├── models/
│   │   │   ├── user.model.js
│   │   │   ├── interviewReport.model.js
│   │   │   └── blacklist.model.js
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   └── interview.routes.js
│   │   ├── services/
│   │   │   └── ai.service.js
│   │   └── app.js
│   ├── server.js
│   └── package.json
│
└── Frontend/
    ├── src/
    │   ├── features/
    │   │   ├── auth/
    │   │   │   ├── components/Protected.jsx
    │   │   │   ├── hooks/useAuth.js
    │   │   │   ├── pages/Login.jsx
    │   │   │   ├── pages/Register.jsx
    │   │   │   ├── services/auth.api.js
    │   │   │   └── auth.context.jsx
    │   │   └── interview/
    │   │       ├── hooks/useInterview.js
    │   │       ├── pages/Home.jsx
    │   │       ├── pages/Interview.jsx
    │   │       ├── services/interview.api.js
    │   │       ├── style/home.scss
    │   │       ├── style/interview.scss
    │   │       └── interview.context.jsx
    │   ├── style/button.scss
    │   ├── App.jsx
    │   ├── app.routes.jsx
    │   ├── main.jsx
    │   └── style.scss
    └── package.json
```

---

## Known Limitations

- Resume PDF generation (Download Resume button) uses Puppeteer which requires a paid server environment. It works locally but is disabled on the free Render deployment.
- Render's free tier spins down after inactivity — first request after idle may take 30–50 seconds to wake up.

---

## Author

**Shivam Surati**

- GitHub: [@shivSurati](https://github.com/shivSurati)
- LinkedIn: [linkedin.com/in/shivam-surati](https://linkedin.com/in/shivam-surati)
- Email: shivamsurati04@gmail.com
