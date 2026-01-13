const pool = require('../config/database');

const getAllInterviews = async () => {
    const result = await pool.query(
        `SELECT i.id, i.created_at, i.updated_at, 
                ir.id as interviewer_id, ir.name as interviewer_name, ir.department,
                ie.id as interviewee_id, ie.name as interviewee_name, ie.phone, ie.email,ie.qualification
            FROM interview i
        JOIN interviewer ir ON i.interviewer_id = ir.id
        JOIN interviewee ie ON i.interviewee_id = ie.id
        ORDER BY i.created_at DESC`
    );
    return result.rows;
};

const getInterviewById = async (id) => {
    const result = await pool.query(
        `SELECT i.id, i.created_at, i.updated_at,
                ir.id as interviewer_id, ir.name as interviewer_name, ir.department
                ie.id as interviewee_id, ir.name as interviewee_name, ie.phone, ie.email, ie.qualification
            FROM interview i
        JOIN interviewer ir ON i.interviewer_id = ir.id
        JOIN interviewee ie ON i.interviewee_id = ie.id
        WHERE id = $1`, [id]
    );
    return result.rows[0];
};

const createInterview = async (interviewer_id, interviewee_id) => {
    const result = await pool.query(
        'INSERT INTO interview (interviewer_id, interviewee_id) VALUES ($1, $2) RETURNING *',
        [interviewer_id, interviewee_id]
    );
    return result.rows[0];
};

const updateInterview = async (id, interviewer_id, interviewee_id) => {
    const result = await pool.query(
        'UPDATE interview SET interviewer_id = $1, interviewee_id = $2 WHERE id = $1 RETURNING *',
        [interviewer_id, interviewee_id, id]
    );
    return result.rows[0];
};

const deleteInterview = async (id) => {
    const result = await pool.query('DELETE FROM interview WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
}

const getIntervieweesByInterviewer = async (interviewer_id) => {
    const result = await pool.query(
        `SELECT ie.* FROM interviewee ie
        JOIN interview i ON ie.id = i.interviewee_id
        WHERE i.interviewer_id = $1`, [interviewer_id]
    );
    return result.rows;
};

const getInterviewersByInterviewee = async (interviewer_id) => {
    const result = await pool.query(
        `SELECT ir.* FROM interviewer ir
        JOIN interview i ON ir.id = i.interviewer_id
        WHERE i.interviewee_id = $1`, [interviewer_id]
    );
    return result.rows;
};

module.exports = {
    getAllInterviews,
    getInterviewById,
    createInterview,
    updateInterview,
    deleteInterview,
    getIntervieweesByInterviewer,
    getInterviewersByInterviewee
}