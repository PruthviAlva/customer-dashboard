import React from 'react';

const CustomerTable = ({ customers, onDeleteCustomer, isLoading }) => {
  const API_URL = import.meta.env.VITE_API_URL;

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this customer?')) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/customers/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to delete customer');
      }

      // Notify parent component to refresh
      onDeleteCustomer();
    } catch (error) {
      alert(`Error deleting customer: ${error.message}`);
    }
  };

  return (
    <div className="table-section">
      <h2>Customers ({customers.length})</h2>

      {customers.length === 0 ? (
        <div className="empty-state">
          <p>No customers found. Add a new customer to get started!</p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(customer.id)}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Deleting...' : 'Delete'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CustomerTable;
