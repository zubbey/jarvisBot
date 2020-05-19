const fs = require('fs');
const express = require('express');
const app = express();
const router = express.Router();
let path = require('path');

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.use(express.static(__dirname + '/public'));
app.use('/', router);
app.listen(process.env.port || 3000);