// Retro-Server/back/serveur.js
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
const route = require('./route'); // Assurez-vous que le chemin est correct

dotenv.config();

const app = express();
app.use(express.json());

const supabase = createClient(process.env.DATABASE_URL, process.env.DATABASE_KEY);

app.use('/', route); // Utilisez le routeur ici

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
