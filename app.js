const express  = require('express')


const app = express();


app.get('*', (req, res) => res.send('I am a changed person'))


app.listen(process.env.PORT || 3000, () => console.log('App started running...'))
