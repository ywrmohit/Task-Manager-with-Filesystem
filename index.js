const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const fs = require('fs');
const { render } = require('ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  fs.readdir("./tasks", (err, files) => {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    // console.log(files);
    res.render('index', { tasks: files });
  });
   
});

app.get('/profile/:username', (req, res) => {
  res.send("working fine " + req.params.username);
});

app.post('/create-task', (req, res) => {
fs.writeFile(`./tasks/${req.body.title.split(' ').join('_')}.txt`, req.body.discription, (err) => {
  if (err) {
    return console.log(err);
  }
    
    res.redirect('/');
  });
});


app.get('/tasks/:taskname', (req, res) => {
  fs.readFile(`./tasks/${req.params.taskname}`, 'utf8', (err, data) => {
    const taskname = req.params.taskname;
    const taskdata = data;
    if (err) {
      return res.status(404).send('File not found');
    }
    res.render('task', { content: { taskname, taskdata } });
  });
});

app.get('/delete-task/:taskname', (req, res) => {
  fs.unlink(`./tasks/${req.params.taskname}`, (err) => {
    if (err) { console.log(err); }
    res.redirect('/');
  });
}); 


app.get('/edit/:taskname', (req, res) => {
    
    res.render('edit',{taskname:req.params.taskname});
});

app.post('/update-task/:taskname', (req, res) => {
  const oldPath = `./tasks/${req.params.taskname}`;
  const newPath = `./tasks/${req.body.title.split(' ').join('_')}.txt`; 

  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      return console.log(err);
    }   
    res.redirect('/');
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


