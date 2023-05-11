const express = require('express')
const app = express()
const fs = require('fs')
const port = 3000


//Middleware
app.engine('madeline', (filePath, options, callback) => { // define the view engine called madeline```
    fs.readFile(filePath, (err, content) => {
      if (err) return callback(err)
      // this is an extremely simple view engine we'll be more complex later
      const rendered = content.toString()
        .replace('#title#', '<title>' + options.title + '</title>')
        .replace('#message#', '<h1>' + options.message + '</h1>')
        .replace('#content#','<div>'+ options.content + '</div>' )
        .replace('#field1#',  options.field1)
        .replace('#field2#',  options.field2)
        .replace('#field3#',  options.field3)
      return callback(null, rendered)
    })
  })
  app.set('views', './views') // specify the views directory
  app.set('view engine', 'madeline')

//routes
app.get('/', (req, res) => {
    res.render('template', { 
        title: 'Welcome', 
        message: 'Welcome!', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
    })
  })
  app.get('/about', (req, res) => {
    res.render('template', { 
        title: 'About Us', 
        message: 'About Us', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
    })
  })
  app.get('/services', (req, res) => {
    res.render('template', { 
        title: 'Services', 
        message: 'Our Services', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
    })
  })
  app.get('/career', (req, res) => {
    res.render('template', { 
        title: 'Career', 
        message: 'Join Our Team', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
    })
  })
  app.get('/registration', (req, res) => {
    res.render('form', { 
        title: 'Registration Form', 
        message: 'Registration Form', 
        field1: 'Full Name', 
        field2: 'Email' ,
        field3: 'Bio' 
    })
  })
  app.get('/contact', (req, res) => {
    res.render('form', { 
        title: 'Contact Form', 
        message: 'Contact Form', 
        field1: 'Email', 
        field2: 'Subject' ,
        field3: 'Comment' 
    })
  })
//listen
app.listen(port, () =>{
    console.log(`Listening on port, ${port}`)
})