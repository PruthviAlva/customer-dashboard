import React, { useState, useEffect } from 'react';
import CustomerForm from './components/CustomerForm';
import CustomerTable from './components/CustomerTable';

function App() {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const API_URL = import.meta.env.VITE_API_URL;

  // Fetch customers from backend
  const fetchCustomers = async () => {
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch(`${API_URL}/customers`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch customers');
      }

      setCustomers(data.data || []);
    } catch (err) {
      console.error('Error fetching customers:', err);
      setError(`Failed to fetch customers: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch customers on component mount
  useEffect(() => {
    fetchCustomers();
  }, []);

  // Handle customer added
  const handleCustomerAdded = () => {
    fetchCustomers();
  };

  // Handle customer deleted
  const handleCustomerDeleted = () => {
    fetchCustomers();
  };

  return (
    <div>
      <header className="header">
        <h1>📊 Customer Dashboard</h1>
        <p>Manage your customers efficiently</p>
      </header>

      <div className="container">
        {error && <div className="alert alert-error">{error}</div>}

        <CustomerForm onCustomerAdded={handleCustomerAdded} isLoading={isLoading} />

        {isLoading && customers.length === 0 ? (
          <div className="loading">Loading customers...</div>
        ) : (
          <CustomerTable
            customers={customers}
            onDeleteCustomer={handleCustomerDeleted}
            isLoading={isLoading}
          />
        )}
      </div>
    </div>
  );
}

export default App;
