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
        .replace('#links#','<a href=/'+options.link1+'>'+options.link1+'</a> | <a href=/'+options.link2+'>'+options.link2+'</a> | <a href=/'+options.link3+'>'+options.link3+'</a> | <a href=/'+options.link4+'>'+options.link4+'</a> | <a href=/'+options.link5+'>'+options.link5+'</a>')
        .replace('#field1#',  options.field1)
        .replace('#field2#',  options.field2)
        .replace('#field3#',  options.field3)
        .replace('#register#','<div><a href=/registration>Click here to register</a></div>')
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
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
        link1: "about", 
        link2: "services", 
        link3: "projects", 
        link4: "career", 
        link5: "contact", 
 
    })
  })
  app.get('/home', (req, res) => {
    res.render('template', { 
        title: 'Welcome', 
        message: 'Welcome!', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
        link1: "about", 
        link2: "services", 
        link3: "projects", 
        link4: "career", 
        link5: "contact", 
 
    })
  })
  app.get('/about', (req, res) => {
    res.render('template', { 
        title: 'About Us', 
        message: 'Who we are', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link1: "home", 
        link2: "services", 
        link3: "projects", 
        link4: "career", 
        link5: "contact",  
    })
  })
  app.get('/services', (req, res) => {
    res.render('template', { 
        title: 'Services', 
        message: 'What we do', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link1: "home", 
        link2: "about", 
        link3: "projects", 
        link4: "career", 
        link5: "contact",   
    })
  })
  app.get('/projects', (req, res) => {
    res.render('template', { 
        title: 'Projects', 
        message: 'Our Works', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link1: "home", 
        link2: "about", 
        link3: "services", 
        link4: "career", 
        link5: "contact",   
    })
  })
  app.get('/career', (req, res) => {
    res.render('template', { 
        title: 'Career', 
        message: 'Join Our Team', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link1: "home", 
        link2: "about", 
        link3: "services", 
        link4: "projects", 
        link5: "contact",   
    })
  })
  app.get('/registration', (req, res) => {
    res.render('form', { 
        title: 'Registration Form', 
        message: 'Registration Form', 
        field1: 'Full Name', 
        field2: 'Email' ,
        field3: 'Bio',
        link1: "home", 
        link2: "about", 
        link3: "services", 
        link4: "projects", 
        link5: "contact",    
    })
  })
  app.get('/contact', (req, res) => {
    res.render('form', { 
        title: 'Contact Form', 
        message: 'Contact Form', 
        field1: 'Email', 
        field2: 'Subject' ,
        field3: 'Comment',
        link1: "home", 
        link2: "about", 
        link3: "services", 
        link4: "projects", 
        link5: "career",    
    })
  })
//listen
app.listen(port, () =>{
    console.log(`Listening on port, ${port}`)
})