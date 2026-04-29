import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:3000';

// Middleware
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

// In-memory storage for customers
let customers = [];

// ==================== API ENDPOINTS ====================

/**
 * GET /customers
 * Retrieve all customers
 */
app.get('/customers', (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Customers retrieved successfully',
      data: customers,
      count: customers.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving customers',
      error: error.message,
    });
  }
});

/**
 * POST /customers
 * Add a new customer
 * Body: { name, email, phone }
 */
app.post('/customers', (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // Validation
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, email, phone',
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format',
      });
    }

    // Phone validation (basic: at least 10 digits)
    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
      return res.status(400).json({
        success: false,
        message: 'Invalid phone number (minimum 10 digits required)',
      });
    }

    // Create new customer object
    const newCustomer = {
      id: uuidv4(),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      createdAt: new Date().toISOString(),
    };

    // Add to storage
    customers.push(newCustomer);

    res.status(201).json({
      success: true,
      message: 'Customer added successfully',
      data: newCustomer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error adding customer',
      error: error.message,
    });
  }
});

/**
 * DELETE /customers/:id
 * Delete a customer by ID
 */
app.delete('/customers/:id', (req, res) => {
  try {
    const { id } = req.params;

    // Find customer index
    const customerIndex = customers.findIndex((c) => c.id === id);

    if (customerIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Customer not found',
      });
    }

    // Remove customer
    const deletedCustomer = customers.splice(customerIndex, 1);

    res.status(200).json({
      success: true,
      message: 'Customer deleted successfully',
      data: deletedCustomer[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting customer',
      error: error.message,
    });
  }
});

/**
 * Health check endpoint
 */
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

/**
 * 404 handler for undefined routes
 */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.path,
  });
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : 'An error occurred',
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✓ Server running on http://localhost:${PORT}`);
  console.log(`✓ CORS enabled for: ${CORS_ORIGIN}`);
  console.log(`✓ Environment: ${process.env.NODE_ENV}`);
});
