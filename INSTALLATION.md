# 📚 Installation & Setup Guide

Complete step-by-step guide to run Customer Dashboard locally.

## System Requirements

### Minimum Requirements
- **Node.js**: v14.0.0 or higher
- **npm**: v6.0.0 or higher (comes with Node.js)
- **RAM**: 512MB minimum
- **Disk Space**: 500MB free space

### Recommended
- **Node.js**: v16.0.0 or higher
- **npm**: v8.0.0 or higher
- **RAM**: 2GB or more
- **Disk Space**: 1GB free space

### Optional
- **Git**: For version control (v2.30+)
- **VS Code**: For development (latest version)

## Installation Steps

### Step 1: Install Node.js

#### Windows
1. Visit https://nodejs.org/
2. Download LTS version
3. Run installer and follow prompts
4. Accept all default settings

#### macOS
Using Homebrew:
```bash
brew install node
```

Or download from https://nodejs.org/

#### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install nodejs npm
```

### Step 2: Verify Installation

```bash
node --version    # Should show v14.0.0 or higher
npm --version     # Should show 6.0.0 or higher
```

### Step 3: Clone/Navigate to Project

**If you have Git:**
```bash
git clone https://github.com/PruthviAlva/customer-dashboard.git
cd customer-dashboard
```

**Or just navigate to the folder:**
```bash
cd path/to/customer-dashboard
```

## Backend Installation

### Step 1: Navigate to Server Directory
```bash
cd server
```

### Step 2: Install Dependencies
```bash
npm install
```
This downloads all required packages from npm registry.

**Time**: ~2-3 minutes depending on internet speed

### Step 3: Verify Installation
```bash
npm list express cors dotenv uuid
```
Should show all packages installed.

### Step 4: Check Environment File
Verify `.env` file exists with correct content:
```
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

### Step 5: Start Backend Server

**Development Mode (with auto-reload):**
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

### Expected Output
```
✓ Server running on http://localhost:5000
✓ CORS enabled for: http://localhost:5173
✓ Environment: development
```

✅ **Backend is ready!**

## Frontend Installation

### Step 1: Navigate to Client Directory
In a **new terminal**:
```bash
cd client
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Verify Installation
```bash
npm list react react-dom
```
Should show React packages installed.

### Step 4: Check Environment File
Verify `.env` file exists:
```
VITE_API_URL=http://localhost:5000
```

### Step 5: Start Frontend Development Server
```bash
npm run dev
```

### Expected Output
```
  VITE v4.3.9  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  Press h + enter to show help
```

✅ **Frontend is ready!**

## Accessing the Application

1. **Open Browser**: Chrome, Firefox, Safari, or Edge
2. **Go to**: `http://localhost:5173`
3. **You should see**: Customer Dashboard with form and table

### Verify It's Working
- Fill in the form and add a customer
- Customer should appear in the table
- Click delete to remove customer

## Environment Variables Explained

### Backend (.env)
```
PORT=5000                                  # Server port
NODE_ENV=development                       # Environment type
CORS_ORIGIN=http://localhost:5173         # Allowed frontend URL
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000        # Backend API URL
```

## Installing Additional Dependencies

If you need to add packages later:

### Backend
```bash
cd server
npm install package-name
```

### Frontend
```bash
cd client
npm install package-name
```

## Common Installation Issues

### Issue: "npm: command not found"
**Solution**: Node.js not installed or not in PATH
- Reinstall Node.js
- Restart terminal/command prompt
- Verify with `node --version`

### Issue: "EACCES: permission denied"
**Solution**: Permission issue
```bash
sudo npm install  # Use sudo (not recommended)
# OR
npm install --force
```

### Issue: "npm ERR! 404"
**Solution**: Package not found or npm registry down
```bash
npm cache clean --force
npm install
```

### Issue: Port already in use
**Solution**: Change port in `.env`
```
PORT=5001  # Instead of 5000
```

### Issue: Too many files in node_modules
**Solution**: Clean and reinstall
```bash
rm -rf node_modules package-lock.json  # macOS/Linux
rmdir /s /q node_modules & del package-lock.json  # Windows
npm install
```

## Verification Checklist

Before moving forward, verify:

- ✅ Node.js and npm installed
- ✅ Both `server` and `client` folders have `node_modules`
- ✅ Backend running on port 5000
- ✅ Frontend running on port 5173
- ✅ Can access http://localhost:5173
- ✅ Can add and delete customers
- ✅ No errors in browser console (F12)
- ✅ No errors in terminal

## Next Steps

1. **Quick Test**: See [QUICK_START.md](./QUICK_START.md)
2. **Full Documentation**: See [README.md](./README.md)
3. **Deploy to Production**: See README.md Deployment section
4. **Push to GitHub**: See README.md Git Workflow section

## Getting Help

### Check Logs
1. **Browser Console**: Press F12, check Console tab
2. **Terminal**: Look for error messages in red
3. **Network Tab**: Check API calls (F12 → Network)

### Common Commands

```bash
# Clear cache and reinstall
npm cache clean --force && npm install

# Check for outdated packages
npm outdated

# Update packages
npm update

# Remove specific package
npm uninstall package-name

# Run scripts in package.json
npm run dev
npm run build
npm run preview
```

---

For more detailed information, see [README.md](./README.md)
