import React from 'react';
import {
  Container, Typography, List, ListItem, ListItemText, Divider, Paper
} from '@mui/material';
import { motion } from 'framer-motion';
import { FaClock, FaGlobe } from 'react-icons/fa';

const dummyStats = [
  {
    url: "http://localhost:3000/abc12",
    created: "2025-08-02 10:00",
    expires: "2025-08-02 10:30",
    clicks: 5,
    details: [
      { time: "10:05", source: "Chrome", location: "India" },
      { time: "10:10", source: "Firefox", location: "Germany" },
    ]
  },
];

const StatsPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">📊 URL Statistics</Typography>
      {dummyStats.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
        >
          <Paper elevation={4} sx={{ my: 2, p: 2, backgroundColor: '#f3e5f5' }}>
            <Typography variant="h6">🔗 {item.url}</Typography>
            <Typography variant="body2">
              <FaClock /> Created: {item.created} | Expires: {item.expires} | Total Clicks: {item.clicks}
            </Typography>
            <List>
              {item.details.map((click, i) => (
                <ListItem key={i} sx={{ pl: 4 }}>
                  <ListItemText
                    primary={`🕒 ${click.time}`}
                    secondary={<>
                      <FaGlobe /> Source: {click.source}, Location: {click.location}
                    </>}
                  />
                </ListItem>
              ))}
              <Divider />
            </List>
          </Paper>
        </motion.div>
      ))}
    </Container>
  );
};

export default StatsPage;