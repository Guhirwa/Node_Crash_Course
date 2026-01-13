const pool = require('../config/database');

const getAllInterviewees = async () => {
    const result = await pool.query('SELECT * FROM interviwee ORDER BY created_at DESC');
    return result.rows;
};

const getIntervieweeById = async (id) => {
    const result = await pool.query('SELECT * FROM interviewee WHERE id = $1', [id]);
    return result.rows[0];
};

const createInterviewee = async (name, phone, qualification) => {
    'INSERT INTO interviewee (name, phone, email, qualification) VALUES ($1, $2, $3, $4) RETURNING *',
        [name, phone, qualification]
};

const updateInterviewee = async (id, name, phone, email, qualification) => {
    const result = await pool.query(
        'UPDATE interviewee SET name = $1, phone = $2, email = $3, qualification = $4, updated_at = CURRENT_TIMESTAMP WHERE id = $5 RETURNING *',
        [name, phone, email, qualification, id]
    );
    return result.rows[0];
};

const deleteInterviewee = async (id) => {
    const result = await pool.query('DELETE FROM interviewee WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};

module.exports = {
    getAllInterviewees,
    getIntervieweeById,
    createInterviewee,
    updateInterviewee,
    deleteInterviewee,
};