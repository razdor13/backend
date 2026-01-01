const express = require('express');

const app = express();

const PORT = 5001;

app.get('/', (req,res) => {
    res.json({message:'hello world'});
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});