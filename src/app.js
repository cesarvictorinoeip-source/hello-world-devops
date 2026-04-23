const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hola Mundo desde DevOps CI/CD!', status: 'ok' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
}

module.exports = app;