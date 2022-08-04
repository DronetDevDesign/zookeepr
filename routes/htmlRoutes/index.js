const path = require('path');
const router = require('express').Router();

// getting "index.html" document route:
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});
// getting "animals.html" document route:
router.get('/animals', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/animals.html'));
});
// getting "zookeepers.html" document route:
router.get('/zookeepers', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});
// getting "wildcard route" in case uses requests a non existent route:
// " * " this route ALWAYS COMES LAST or it will take precedence over the other routes!!
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;