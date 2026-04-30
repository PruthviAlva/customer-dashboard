# Customer Dashboard

A simple, full-stack web application for managing customer information with a clean, modern UI.

## 🌐 Live Demo

- **Frontend**: https://customer-dashboard-navy-tau.vercel.app/
- **Backend API**: https://customer-dashboard-6ztr.onrender.com/
- **GitHub Repository**: https://github.com/PruthviAlva/customer-dashboard

> Try it live! Add a customer, view the list, and delete customers in real-time.

## 📋 Project Overview

Customer Dashboard is a MERN (MongoDB/In-Memory, Express, React, Node.js) stack application that allows users to:
- ✅ Add new customers with name, email, and phone number
- ✅ View all customers in a responsive table
- ✅ Delete customers with confirmation
- ✅ Real-time form validation
- ✅ Error handling and user feedback

## 🛠 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Responsive styling with CSS variables

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **UUID** - Unique ID generation
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## ✨ Features

- 🎨 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ✔️ **Form Validation** - Client and server-side validation
- 📊 **Dynamic Table** - Real-time customer list updates
- 🗑️ **Delete with Confirmation** - Prevents accidental deletions
- ⚡ **Fast & Lightweight** - No database setup required (in-memory storage)
- 🔄 **RESTful API** - Clean and intuitive API endpoints
- 🎯 **Error Handling** - Comprehensive error messages

## 📁 Project Structure

```
customer-dashboard/
├── server/                 # Backend (Node.js + Express)
│   ├── index.js           # Main server file with all APIs
│   ├── package.json       # Backend dependencies
│   ├── .env               # Environment variables
│   └── .gitignore         # Git ignore rules
│
├── client/                # Frontend (React + Vite)
│   ├── src/
│   │   ├── main.jsx       # Entry point
│   │   ├── App.jsx        # Main app component
│   │   ├── index.css      # Global styles
│   │   └── components/
│   │       ├── CustomerForm.jsx   # Form component
│   │       └── CustomerTable.jsx  # Table component
│   ├── public/            # Static files
│   ├── index.html         # HTML template
│   ├── package.json       # Frontend dependencies
│   ├── vite.config.js     # Vite configuration
│   ├── .env               # Environment variables
│   └── .gitignore         # Git ignore rules
│
├── .gitignore             # Root git ignore
└── README.md              # This file
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Local Development Setup

#### 1. Clone or Navigate to Project
```bash
cd customer-dashboard
```

#### 2. Backend Setup
```bash
cd server

# Install dependencies
npm install

# Start development server (with auto-reload)
npm run dev

# Or start production server
npm start
```

The backend will run on `http://localhost:5000`

#### 3. Frontend Setup (in a new terminal)
```bash
cd client

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will run on `https://customer-dashboard-navy-tau.vercel.app/`

#### 4. Access the Application
Open your browser and go to: `https://customer-dashboard-navy-tau.vercel.app/`

### Environment Variables

**Backend (.env):**
```
PORT=5000
NODE_ENV=development
CORS_ORIGIN=https://customer-dashboard-navy-tau.vercel.app/
```

**Frontend (.env):**
```
VITE_API_URL=http://localhost:5000
```

## 📡 API Endpoints

### Base URL
```
http://localhost:5000
```

### 1. Get All Customers
```
GET /customers
```
**Response:**
```json
{
  "success": true,
  "message": "Customers retrieved successfully",
  "data": [
    {
      "id": "uuid",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "1234567890",
      "createdAt": "2024-04-29T10:30:00.000Z"
    }
  ],
  "count": 1
}
```

### 2. Add New Customer
```
POST /customers
```
**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Customer added successfully",
  "data": {
    "id": "uuid",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "createdAt": "2024-04-29T10:30:00.000Z"
  }
}
```

### 3. Delete Customer
```
DELETE /customers/:id
```
**Response:**
```json
{
  "success": true,
  "message": "Customer deleted successfully",
  "data": {
    "id": "uuid",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "createdAt": "2024-04-29T10:30:00.000Z"
  }
}
```

### 4. Health Check
```
GET /health
```
**Response:**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-04-29T10:30:00.000Z"
}
```

## 🔍 Validation Rules

### Name
- Required field
- Must be non-empty string

### Email
- Required field
- Must be valid email format (xxx@xxx.xxx)

### Phone Number
- Required field
- Must be at least 10 digits
- Numbers only (special characters are ignored)

## 🎯 Usage Guide

### Adding a Customer
1. Fill in the form fields (Name, Email, Phone Number)
2. Click "Add Customer" button
3. Customer appears in the table below
4. Form clears automatically on success

### Viewing Customers
- All customers are displayed in a responsive table
- Table shows: Name, Email, Phone, and Delete action

### Deleting a Customer
1. Find the customer in the table
2. Click "Delete" button
3. Confirm deletion in the popup
4. Customer is removed from the list

## 🚀 Deployment

### Frontend Deployment (Vercel)

1. **Push code to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect Vercel to GitHub**
   - Go to [Vercel.com](https://vercel.com)
   - Sign in with GitHub account
   - Select `customer-dashboard` repository

3. **Configure Deployment**
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

4. **Environment Variables**
   - Add `VITE_API_URL` pointing to your backend URL

5. **Deploy**
   - Click Deploy button
   - Vercel will build and deploy automatically

**✅ Frontend Live URL**: https://customer-dashboard-navy-tau.vercel.app/

### Backend Deployment (Render)

1. **Create Render Account**
   - Go to [Render.com](https://render.com)
   - Sign in with GitHub

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

3. **Configure Service**
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free or Paid (as needed)

4. **Environment Variables**
   - Add the following in Render dashboard:
     - `PORT=5000`
     - `NODE_ENV=production`
     - `CORS_ORIGIN=https://customer-dashboard-navy-tau.vercel.app`

5. **Deploy**
   - Render will automatically deploy from your GitHub repository

**✅ Backend Live URL**: https://customer-dashboard-6ztr.onrender.com/

### Update Frontend for Production
After deploying backend to Render, update the frontend `.env`:
```
VITE_API_URL=https://customer-dashboard-6ztr.onrender.com
```

Then redeploy frontend on Vercel.

## 📝 Git Workflow

### Initialize Repository
```bash
git init
git add .
git commit -m "Initial commit: Set up MERN project structure"
```

### Push to GitHub
```bash
git remote add origin https://github.com/PruthviAlva/customer-dashboard.git
git branch -M main
git push -u origin main
```

### Commit Messages Format
- `feat: Add customer form component`
- `fix: Resolve CORS issue`
- `docs: Update README with API documentation`
- `refactor: Simplify state management`
- `test: Add form validation tests`

## 🐛 Troubleshooting

### CORS Error
- Ensure backend is running on `http://localhost:5000`
- Check `CORS_ORIGIN` environment variable matches frontend URL
- Verify `.env` files in both frontend and backend

### Frontend Not Loading
- Clear browser cache (Ctrl+Shift+Delete)
- Check if Vite dev server is running on port 5173
- Verify no other application is using port 5173

### Cannot Add Customer
- Check backend server is running (`npm run dev` in server folder)
- Verify all form fields are filled
- Check browser console for error messages
- Ensure API_URL is correct in frontend `.env`

### Backend Port Already in Use
```bash
# Find and kill process using port 5000
# Windows: 
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -i :5000
kill -9 <PID>
```

## 📚 Code Quality Features

- ✅ Client-side form validation
- ✅ Server-side data validation
- ✅ Meaningful error messages
- ✅ Email format validation
- ✅ Phone number validation
- ✅ Confirmation dialogs for destructive actions
- ✅ Loading states during API calls
- ✅ Responsive design for all screen sizes
- ✅ Clean code with meaningful comments
- ✅ Modular component structure

## 🔐 Security Considerations

- Data is stored in-memory (not persistent)
- Input validation on both client and server
- CORS enabled for allowed origins only
- Environment variables for sensitive configuration
- No authentication/authorization (simple application)

## 📈 Future Enhancements

- Add MongoDB for persistent storage
- Implement user authentication
- Add customer search and filtering
- Implement pagination for large customer lists
- Add customer edit functionality
- Add export to CSV feature
- Implement dark mode
- Add unit and integration tests
- Implement customer categories/groups
- Add dashboard statistics

## 📄 License

MIT License - Feel free to use this project for learning and personal use.

## 👨‍💻 Author

Created as a MERN stack demonstration project.

## 🤝 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the API documentation
3. Check browser console for errors
4. Review backend server logs

---

**Happy coding! 🚀**

Last Updated: April 29, 2026
