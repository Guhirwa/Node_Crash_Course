const pool = require('../config/database');

const getAllInterviewers = async () => {
    const result = await pool.query('SELECT * FROM interviewer ORDER BY created_at DESC');
    return result.rows;
};

const getInterviewerById = async (id) => {
    const result = await pool.query('SELECT * FROM interviwer WHERE id = $1', [id]);
    return result.rows[0];
}

const createInterviewer = async (name, department) => {
    const result = await pool.query(
        'INSERT INTO interviewer (name, department) VALUES ($1, $2) RETURNING *', [name, department]
    );
    return result.rows[0];
};

const updateInterviewer = async (id, name, department) => {
    const result = await pool.query(
        'UPDATE interviewer SET name = $1, department = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *',
        [name, department, id]
    );
    return result.rows[0]
};

const deleteInterviewer = async (id) => {
    const result = await pool.query('DELECT FROM interviewer WHWERE id = $1 RETURNING *', [id]);
    return result.rows[0]
}

module.exports = {
    getAllInterviewers,
    getInterviewerById,
    createInterviewer,
    updateInterviewer,
    deleteInterviewer,
};