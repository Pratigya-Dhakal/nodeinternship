import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'new_user',
    password: 'new_password',
    database: 'todoapp'
});

connection.connect();

export function fetchTasks(req, res) {
    connection.query('SELECT * FROM todos', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
}

export function createTask(req, res) {
    const { task } = req.body;
    connection.query('INSERT INTO todos (task, completed) VALUES (?, ?)', [task, 0], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, task, completed: false });
    });
}

export function updateTask(req, res) {
    const { id } = req.params;
    const { task, completed } = req.body;
    connection.query('UPDATE todos SET task = ?, completed = ? WHERE id = ?', [task, completed, id], (err) => {
        if (err) throw err;
        res.sendStatus(200);
    });
}

export function deleteTask(req, res) {
    const { id } = req.params;
    connection.query('DELETE FROM todos WHERE id = ?', [id], (err) => {
        if (err) throw err;
        res.sendStatus(200);
    });
}
