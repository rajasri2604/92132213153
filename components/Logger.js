export const logger = (action, details = {}) => {
  const logData = {
    action,
    details,
    time: new Date().toLocaleString(),
  };
  console.table(logData);
  // Optionally save to localStorage or send to backend
};
