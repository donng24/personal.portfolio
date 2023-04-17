import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <footer>
          <p>© 2023 Your Name</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <main>
      <section id="about">
        <h1>Your Name</h1>
        <h2>Fullstack Developer</h2>
        <p>A brief summary about yourself and your skills.</p>
      </section>
    </main>
  );
}

function Projects() {
  return (
    <main>
      <section id="projects">
        <h2>Projects</h2>
        <div className="project">
          <img src="project1.png" alt="Project 1" />
          <h3>Project 1</h3>
          <p>A brief description of Project 1</p>
        </div>

        <div className="project">
          <img src="project2.png" alt="Project 2" />
          <h3>Project 2</h3>
          <p>A brief description of Project 2</p>
        </div>
      </section>
    </main>
  );
}

function Contact() {
  return (
    <main>
      <section id="contact">
        <h2>Contact</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>

          <input type="submit" value="Send" />
        </form>
      </section>
    </main>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
