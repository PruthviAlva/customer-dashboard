# 🚀 Quick Start Guide

Get the Customer Dashboard running in minutes!

## Prerequisites
- Node.js (v14+)
- npm or yarn
- Git

## 5-Minute Setup

### 1️⃣ Backend Setup (Terminal 1)
```bash
cd server
npm install
npm run dev
```
✅ Backend runs on: `http://localhost:5000`

### 2️⃣ Frontend Setup (Terminal 2)
```bash
cd client
npm install
npm run dev
```
✅ Frontend runs on: `http://localhost:5173`

### 3️⃣ Open Browser
Navigate to: `http://localhost:5173`

**Done! 🎉**

## Testing the Application

### ✅ Add a Customer
1. Fill in the form:
   - Name: `John Doe`
   - Email: `john@example.com`
   - Phone: `1234567890`
2. Click "Add Customer"
3. Customer appears in the table ✓

### ✅ Delete a Customer
1. Find customer in table
2. Click "Delete" button
3. Confirm deletion
4. Customer removed ✓

### ✅ API Testing (Optional)
Test backend API directly:

```bash
# Get all customers
curl http://localhost:5000/customers

# Add new customer
curl -X POST http://localhost:5000/customers \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe","email":"jane@example.com","phone":"9876543210"}'

# Delete customer (replace {id} with actual customer ID)
curl -X DELETE http://localhost:5000/customers/{id}

# Health check
curl http://localhost:5000/health
```

## Troubleshooting Quick Tips

| Problem | Solution |
|---------|----------|
| Port already in use | Change PORT in `.env` or kill the process |
| CORS error | Check backend is running and `.env` CORS_ORIGIN is correct |
| Cannot connect to backend | Ensure both servers are running |
| Form not submitting | Open browser console (F12) to see errors |

## Next Steps

1. **Deploy Frontend**: [Vercel Guide](./README.md#frontend-deployment-vercel)
2. **Deploy Backend**: [Render Guide](./README.md#backend-deployment-render)
3. **Read Full README**: [Full Documentation](./README.md)
4. **Push to GitHub**: `git push -u origin main`

---

**Need help?** Check the main [README.md](./README.md) for detailed documentation.
