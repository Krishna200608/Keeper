# Canvas Keeper (Note Taking App) ✨📝🚀

Canvas Keeper is a full-stack note taking application that leverages modern web technologies. The frontend is built with React, and the backend is powered by Node.js and Express. The project is hosted on Vercel and uses MongoDB Atlas for data storage. 🌍💡🔧

[Live Demo](https://keeper-frontend-mocha.vercel.app/) 🎯🔗✨

---

## Table of Contents 📜📌📚

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Features ✍️⚡📱

- **Note Taking:** Create, edit, and delete notes.
- **Real-Time Sync:** Seamless integration between frontend and backend for instant updates.
- **Responsive Design:** Works well on desktop and mobile devices.
- **User-Friendly Interface:** Clean and intuitive UI for a smooth user experience.

---

## Tech Stack 🏗️💻🌐

- **Frontend:** [React](https://reactjs.org/)
- **Backend:** [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/)
- **Database:** [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Deployment:** [Vercel](https://vercel.com/docs)

---

## Installation 🛠️📥🔽

Follow these steps to set up the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/keeper.git
   ```

2. **Install dependencies for both frontend and backend:**

   Navigate to each directory and run:

   ```bash
   cd frontend
   npm install
   ```

   Then, for the backend:

   ```bash
   cd ../backend
   npm install
   ```

---

## Environment Variables 🌍🔑📝

Before running the application, create a `.env` file in both the frontend and backend directories.

### Frontend 🏗️🖥️🔗

Create a `.env` file in the `frontend` folder with the following content:

```env
VITE_BACKEND_URL='http://your-backend-url'
```

*Replace `http://your-backend-url` with the actual backend URL when deploying or testing locally.*

### Backend 🗄️🔧📡

Create a `.env` file in the `backend` folder with the following content:

```env
MONGO_URI='your_mongodb_uri'
PORT=your_port
```

*Replace `your_mongodb_uri` with your actual MongoDB connection string and `your_port` with your desired port (e.g., 4000).*

---

## Running the Project 🚀⚙️💡

### Frontend 🏗️📲💻

After setting up the environment variables, start the React development server:

```bash
cd frontend
npm start
```

### Backend 🛠️🗄️🚀

Start the Express server:

```bash
cd backend
npm run server
```

The frontend will connect to the backend using the URL specified in the `VITE_BACKEND_URL` variable. 🌐🔗⚡

---

## Deployment 🚀📡🌍

- **Frontend:** The project is hosted on Vercel.
- **Backend:** For deploying the backend, consider platforms like Heroku, Render, or deploying as serverless functions on Vercel if supported.

For more details on Vercel deployment, refer to the [Vercel Documentation](https://vercel.com/docs). 📘🔍💻

---

## Contributing 🤝✨🛠️

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request.

Ensure that your code follows the project style guidelines and that all tests pass before submitting a pull request. 🚦✅📌

---

## License 📜🔒📝

Distributed under the IIITA License.

---

## Acknowledgements 🙌🎉💡

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [Vercel](https://vercel.com/docs)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

