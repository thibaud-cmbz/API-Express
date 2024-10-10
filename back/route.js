// Retro-Server/back/route.js
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config();

const router = express.Router(); // Créez un routeur

const supabase = createClient(process.env.DATABASE_URL, process.env.DATABASE_KEY);

// Définissez vos routes ici
router.get('/companies', async (req, res) => {
    let { data: companies, error } = await supabase
      .from('companies')
      .select('*');

    if (error) return res.status(400).json({ error: error.message });
    res.status(200).json(companies);
});

// Companies
router.post('/companies', async (req, res) => {
  const { name, description, location, website } = req.body;
  let { data: company, error } = await supabase
    .from('companies')
    .insert([{ name, description, location, website }]);

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(company);
});

router.delete('/companies/:id', async (req, res) => {
  const { id } = req.params;
  let { error } = await supabase
    .from('companies')
    .delete()
    .eq('id', id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json({ message: 'Company deleted successfully' });
});

// Users
router.get('/users', async (req, res) => {
  let { data: users, error } = await supabase
    .from('users')
    .select('*');

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(users);
});

router.post('/users', async (req, res) => {
  const { email, password, first_name, last_name, phone } = req.body;
  let { data: user, error } = await supabase
    .from('users')
    .insert([{ email, password, first_name, last_name, phone }]);

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(user);
});

router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  let { error } = await supabase
    .from('users')
    .delete()
    .eq('id', id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json({ message: 'User deleted successfully' });
});

// Admins
router.get('/admins', async (req, res) => {
  let { data: admins, error } = await supabase
    .from('admins')
    .select('*');

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(admins);
});

router.post('/admins', async (req, res) => {
  const { user_id, role } = req.body;
  let { data: admin, error } = await supabase
    .from('admins')
    .insert([{ user_id, role }]);

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(admin);
});

router.delete('/admins/:id', async (req, res) => {
  const { id } = req.params;
  let { error } = await supabase
    .from('admins')
    .delete()
    .eq('id', id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json({ message: 'Admin deleted successfully' });
});

// Job Advertisements
router.get('/job_advertisements', async (req, res) => {
  let { data: job_advertisements, error } = await supabase
    .from('job_advertisements')
    .select('*');

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(job_advertisements);
});

router.post('/job_advertisements', async (req, res) => {
  const { company_id, title, short_description, full_description, location, salary, working_time } = req.body;
  let { data: job_advertisement, error } = await supabase
    .from('job_advertisements')
    .insert([{ company_id, title, short_description, full_description, location, salary, working_time }]);

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(job_advertisement);
});

router.delete('/job_advertisements/:id', async (req, res) => {
  const { id } = req.params;
  let { error } = await supabase
    .from('job_advertisements')
    .delete()
    .eq('id', id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json({ message: 'Job advertisement deleted successfully' });
});

// Job Applications
router.get('/job_applications', async (req, res) => {
  let { data: job_applications, error } = await supabase
    .from('job_applications')
    .select('*');

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(job_applications);
});

router.post('/job_applications', async (req, res) => {
  const { job_advertisement_id, user_id, message } = req.body;
  let { data: job_application, error } = await supabase
    .from('job_applications')
    .insert([{ job_advertisement_id, user_id, message }]);

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(job_application);
});

router.delete('/job_applications/:id', async (req, res) => {
  const { id } = req.params;
  let { error } = await supabase
    .from('job_applications')
    .delete()
    .eq('id', id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json({ message: 'Job application deleted successfully' });
});

module.exports = router; // Exportez le routeur
