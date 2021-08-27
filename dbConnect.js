const dbConnect = (dbUrl) => {
  const mongoose = require('mongoose')

  // Set up default mongoose connection
  mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  // Get the default connection
  const db = mongoose.connection

  // Notification of connection errors
  db.on('error', (error) => console.error(error))

  // Notificaton of connection
  db.once('open', () => console.log('Connected to database'))
}

module.exports = dbConnect
