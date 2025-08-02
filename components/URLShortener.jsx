import React, { useState } from 'react';
import {
  Container, TextField, Button, Typography, Paper, Grid
} from '@mui/material';
import { logger } from './Logger';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaPaperPlane } from 'react-icons/fa';

const URLShortener = () => {
  const [url, setUrl] = useState('');
  const [shortcode, setShortcode] = useState('');
  const [validity, setValidity] = useState('');
  const [result, setResult] = useState('');

  const handleShorten = () => {
    if (!url.startsWith("http")) {
      alert("Invalid URL");
      logger("ERROR_INVALID_URL", { url });
      return;
    }

    const finalShort = shortcode || Math.random().toString(36).substring(2, 7);
    const finalValidity = validity || 30;

    const shortenedUrl = `http://localhost:3000/${finalShort}`;
    setResult(shortenedUrl);

    logger("URL_SHORTENED", {
      originalURL: url,
      shortcode: finalShort,
      validity: `${finalValidity} minutes`
    });

    setUrl('');
    setShortcode('');
    setValidity('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxWidth="sm">
        <Paper elevation={5} sx={{ p: 4, backgroundColor: '#e8f5e9' }}>
         <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'purple' }}>
  Shorten Your URL
</Typography>

          <TextField
            fullWidth label="Long URL" margin="normal"
            value={url} onChange={(e) => setUrl(e.target.value)}
          />
          <TextField
            fullWidth label="Custom Shortcode (optional)" margin="normal"
            value={shortcode} onChange={(e) => setShortcode(e.target.value)}
          />
          <TextField
            fullWidth label="Validity (minutes)" margin="normal" type="number"
            value={validity} onChange={(e) => setValidity(e.target.value)}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2, background: '#7b1fa2' }}
            endIcon={<FaPaperPlane />}
            onClick={handleShorten}
          >
            Generate Short URL
          </Button>

          {result && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Paper elevation={3} sx={{ mt: 4, p: 3, background: "#fce4ec" }}>
                <Typography variant="body1">✅ Shortened URL:</Typography>
                <Typography variant="h6" color="secondary">
                  <FaCheckCircle style={{ marginRight: 8 }} /> {result}
                </Typography>
              </Paper>
            </motion.div>
          )}
        </Paper>
      </Container>
    </motion.div>
  );
};

export default URLShortener;
