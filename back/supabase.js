const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

const supabase = createClient(process.env.DATABASE_URL, process.env.DATABASE_KEY);

// Define routes
// Companies
app.get('/companies', async (req, res) => {
    let { data: companies, error } = await supabase
      .from('companies')
      .select('*');

    if (error) return res.status(400).json({ error: error.message });
    res.status(200).json(companies);
});

app.post('/companies', async (req, res) => {
  const { name, description, location, website } = req.body;
  let { data: company, error } = await supabase
    .from('companies')
    .insert([{ name, description, location, website }]);

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(company);
});

app.delete('/companies/:id', async (req, res) => {
  const { id } = req.params;
  let { error } = await supabase
    .from('companies')
    .delete()
    .eq('id', id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json({ message: 'Company deleted successfully' });
});

// Users
app.get('/users', async (req, res) => {
  let { data: users, error } = await supabase
    .from('users')
    .select('*');

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(users);
});

app.post('/users', async (req, res) => {
  const { email, password, first_name, last_name, phone } = req.body;
  let { data: user, error } = await supabase
    .from('users')
    .insert([{ email, password, first_name, last_name, phone }]);

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(user);
});

app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  let { error } = await supabase
    .from('users')
    .delete()
    .eq('id', id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json({ message: 'User deleted successfully' });
});

// Admins
app.get('/admins', async (req, res) => {
  let { data: admins, error } = await supabase
    .from('admins')
    .select('*');

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(admins);
});

app.post('/admins', async (req, res) => {
  const { email, password, first_name, last_name } = req.body;
  let { data: admin, error } = await supabase
    .from('admins')
    .insert([{ email, password, first_name, last_name }]);

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(admin);
});

app.delete('/admins/:id', async (req, res) => {
  const { id } = req.params;
  let { error } = await supabase
    .from('admins')
    .delete()
    .eq('id', id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json({ message: 'Admin deleted successfully' });
});

// Job Advertisements
app.get('/job_advertisements', async (req, res) => {
  let { data: job_advertisements, error } = await supabase
    .from('job_advertisements')
    .select('*');

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(job_advertisements);
});

app.post('/job_advertisements', async (req, res) => {
  const { title, description, company_id, location, salary } = req.body;
  let { data: job_ad, error } = await supabase
    .from('job_advertisements')
    .insert([{ title, description, company_id, location, salary }]);

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(job_ad);
});

app.delete('/job_advertisements/:id', async (req, res) => {
  const { id } = req.params;
  let { error } = await supabase
    .from('job_advertisements')
    .delete()
    .eq('id', id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json({ message: 'Job advertisement deleted successfully' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});