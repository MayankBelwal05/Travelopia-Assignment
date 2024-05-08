import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container, Typography, Card, CardContent, Modal } from '@mui/material';
import axios from 'axios';

import './AdminDashboard.css';

const AdminDashboard = () => {
  const [trips, setTrips] = React.useState([]);
  const [selectedApplication, setSelectedApplication] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    // Fetch trips data from the backend API
    const fetchTrips = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/trips');
        console.log(response.data);
        // Add unique ids to each row
        const tripsWithIds = response.data.map((trip, index) => ({
          ...trip,
          id: index + 1,
        }));
        setTrips(tripsWithIds);
      } catch (error) {
        console.error('Error fetching trips:', error);
      }
    };

    fetchTrips();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 150, headerClassName: 'table-header', cellClassName: 'table-cell' },
    { field: 'location', headerName: 'Location', width: 200, headerClassName: 'table-header', cellClassName: 'table-cell' },
    { field: 'interest', headerName: 'Interest', width: 200, headerClassName: 'table-header', cellClassName: 'table-cell' },
    { field: 'numberOfTravelers', headerName: 'Travelers', type: 'number', width: 150, headerClassName: 'table-header', cellClassName: 'table-cell' },
    { field: 'budgetPerPerson', headerName: 'Budget', width: 150, headerClassName: 'table-header', cellClassName: 'table-cell' },
    { field: 'createdBy', headerName: 'Created By', width: 200, headerClassName: 'table-header', cellClassName: 'table-cell' }, // Add this field
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <strong>
          <button onClick={() => handleViewApplication(params.row)}>View</button>
        </strong>
      ),
      headerClassName: 'table-header',
      cellClassName: 'table-cell',
    },
  ];

  const getRowId = (row) => row.id;

  const handleViewApplication = (application) => {
    setSelectedApplication(application);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container className="dashboard-container">
      <Typography variant="h4" gutterBottom className="dashboard-heading">
        🚀 Travel Applications Dashboard 🌍
      </Typography>
      <div className="table-container">
        <DataGrid
          rows={trips}
          columns={columns}
          getRowId={getRowId}
          autoHeight
          hideFooterPagination
          className="custom-data-grid"
        />
      </div>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Container maxWidth="sm" className="modal-container">
          {selectedApplication && (
            <Card className="modal-card">
              <CardContent>
                <Typography variant="h5" component="h2" className="modal-heading">
                  Application Details 📝
                </Typography>
                <Typography variant="body2" component="p" className="modal-content">
                  <strong>Location:</strong> {selectedApplication.location}
                  <br />
                  <strong>Interest:</strong> {selectedApplication.interest}
                  <br />
                  <strong>Travelers:</strong> {selectedApplication.numberOfTravelers}
                  <br />
                  <strong>Budget:</strong> {selectedApplication.budgetPerPerson}
                  <br />
                  <strong>Created By:</strong> {selectedApplication.createdBy} 
                </Typography>
              </CardContent>
            </Card>
          )}
        </Container>
      </Modal>
    </Container>
  );
};

export default AdminDashboard;
