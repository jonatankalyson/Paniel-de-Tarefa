const express = require('express');
const router = express.Router();

module.exports = (db) => {
  const taskCollection = db.collection('tasks');

 
  router.post('/', async (req, res) => {
    try {
      const { title, description, dueDate, subtasks } = req.body;
      const newTask = {
        title,
        description,
        status: 'Pendente',
        dueDate: dueDate || null,
        subtasks: subtasks || [],
        createdAt: new Date(),
        order: Date.now(),
      };
      const docRef = await taskCollection.add(newTask);
      res.status(201).send({ id: docRef.id, ...newTask });
    } catch (err) {
      res.status(500).send(err.message);
    }
  });


  router.get('/', async (req, res) => {
    try {
      const { status, title } = req.query;
      let query = taskCollection;

      if (status) query = query.where('status', '==', status);
      const snapshot = await query.get();

      let tasks = [];
      snapshot.forEach(doc => {
        const task = { id: doc.id, ...doc.data() };
        if (!title || task.title.toLowerCase().includes(title.toLowerCase())) {
          tasks.push(task);
        }
      });

     
      tasks.sort((a, b) => a.order - b.order);

      res.send(tasks);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });


  router.patch('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;
      await taskCollection.doc(id).update(updates);
      res.send({ message: 'Tarefa atualizada' });
    } catch (err) {
      res.status(500).send(err.message);
    }
  });


  router.patch('/reorder/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { newOrder } = req.body;
      await taskCollection.doc(id).update({ order: newOrder });
      res.send({ message: 'Ordem atualizada' });
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  // Remover tarefa
  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await taskCollection.doc(id).delete();
      res.send({ message: 'Tarefa removida' });
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

 
  router.get('/status/total', async (req, res) => {
    try {
      const snapshot = await taskCollection.get();
      let pendentes = 0, concluidas = 0;
      snapshot.forEach(doc => {
        const task = doc.data();
        if (task.status === 'Pendente') pendentes++;
        if (task.status === 'Concluída') concluidas++;
      });
      res.send({ pendentes, concluidas });
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  return router;
};
