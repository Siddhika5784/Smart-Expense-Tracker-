# 💰 Smart Expense Tracker

A full-stack MERN web application that enables users to securely manage expenses, monitor monthly budgets, visualize spending insights, and track transactions through an intuitive and responsive dashboard.

---

## 🚀 Live Demo

**Frontend:** <https://smart-expense-tracker-delta-ten.vercel.app/>

**Backend API:** <https://smart-expense-tracker-idrm.onrender.com/>

---

## ✨ Features

### 🔐 Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Secure Password Hashing using bcrypt

### 💸 Expense Management
- Add Expense
- Edit Expense
- Delete Expense
- View All Transactions

### 📊 Dashboard
- Total Expenses
- Remaining Balance
- Monthly Budget
- Budget Progress Bar
- Recent Transactions
-  User Budget Management

### 📈 Insights
- Category-wise Spending
- Monthly Expense Trend
- Interactive Charts using Recharts

### 🔍 Transactions
- Search Expenses
- Filter by Category
- Filter by Payment Method

### 🎨 User Experience

- Responsive Design
- Modern Dashboard UI
- Interactive Charts
- Loading Indicators

-----

## 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | React.js, Tailwind CSS, React Router, Axios, Recharts |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Authentication | JWT, bcrypt |
| Deployment | Vercel, Render |
| Tools | Git, GitHub, VS Code, Postman |

----
# 📂 Project Structure

```text
Smart-Expense-Tracker
│
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── Dashboard
│   │   │   ├── Expense
│   │   │   ├── Charts
│   │   │   ├── Layout
│   │   │   └── Common
│   │   │
│   │   ├── context
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── pages
│   │   │   ├── Dashboard.jsx
│   │   │   ├── AddExpense.jsx
│   │   │   ├── Transactions.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   │
│   │   ├── routes
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── services
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   ├── authController.js
│   │   ├── expenseController.js
│   │   └── budgetController.js
│   │
│   ├── middleware
│   │   └── authMiddleware.js
│   │
│   ├── models
│   │   ├── User.js
│   │   ├── Expense.js
│   │   └── Budget.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── expenseRoutes.js
│   │   └── budgetRoutes.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── package.json 
```
# ⚙️ Installation
```bash
git clone https://github.com/Siddhika5784/Smart-Expense-Tracker.git

cd Smart-Expense-Tracker

cd client
npm install

cd ../server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

## ▶️ Run Locally

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm run dev
```

## 📸 Screenshots

The following screenshots showcase the major features and user interface of the application.

### Login Page

<img width="1531" height="702" alt="image" src="https://github.com/user-attachments/assets/f6538c82-b517-4d67-a0fb-ec30559eb1b1" />

###  Register Page

<img width="1536" height="697" alt="image" src="https://github.com/user-attachments/assets/e0813605-2fd2-40d0-be65-354d3428e9cd" />

### Dashboard

<img width="1510" height="721" alt="image" src="https://github.com/user-attachments/assets/1bb267a3-cde8-42cd-8967-f7324ce174ce" />

### Add Expense

<img width="1516" height="712" alt="image" src="https://github.com/user-attachments/assets/e844355e-efd2-427f-a51d-e913f0313eac" />

### Transactions

<img width="1517" height="717" alt="image" src="https://github.com/user-attachments/assets/2b22b39c-e6cb-41af-b173-d0fdfda99e05" />

### Insights

<img width="1501" height="710" alt="image" src="https://github.com/user-attachments/assets/66a2ac43-090e-4925-ab78-a8b534909321" />

### Budget
<img width="1492" height="736" alt="image" src="https://github.com/user-attachments/assets/d5740902-3128-495a-85c9-6c6241eb0c06" />
<img width="1496" height="722" alt="image" src="https://github.com/user-attachments/assets/964688ca-e377-4dd8-927f-b9663888d5f7" />

-----
## 📡 API Endpoints

### Authentication

| Method | Endpoint |
|--------|----------|
| POST | /api/auth/register |
| POST | /api/auth/login |

### Expenses

| Method | Endpoint |
|--------|----------|
| GET | /api/expenses |
| POST | /api/expenses |
| PUT | /api/expenses/:id |
| DELETE | /api/expenses/:id |

### Budget

| Method | Endpoint |
|--------|----------|
| GET | /api/budget |
| POST | /api/budget |
| PUT | /api/budget |

-----
## 🚧 Challenges Faced

- Implemented JWT Authentication for secure access.
- Protected frontend routes using React Router.
- Connected React frontend with Express backend APIs.
- Resolved MongoDB Atlas connection issues.
- Configured CORS for cross-origin requests.
- Deployed frontend on Vercel and backend on Render.
- Debugged route handling after deployment.

-----
## 🔮 Future Enhancements

- User-specific editable monthly income
- Export expenses to PDF/Excel
- Dark Mode
- AI-powered spending insights
- Email reminders for budget limits
- Recurring expense management
- Multi-currency support

-----
## 👩‍💻 Author

**Siddhika Gupta**

- B.Tech CSE (2027)
- MERN Stack Developer
- Passionate about Full Stack Development and Problem Solving

-----

⭐ If you found this project useful, consider giving it a star on GitHub!
