import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Post from './Post';
import FavoriteMovie from './FavoriteMovie';
import FavoriteFood from './FavoriteFood';
import About from './About';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from 'react-router-dom';

var post = {
  title: "Dinosaurs are awesome",
  authors: ["Stealthy Stegosaurus", "Sean Cesmat"],
  body: "Check out this body property!",
  comments: ["First!", "Great post", "Hire this author now!"]
}

ReactDOM.render(
  <Router>
    <div>
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/favorite-food">Favorite Food</NavLink>
        <NavLink to="/favorite-movie">Favorite Movie</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <Route exact path='/' component={Home} />
      <Route exact path='/blog'
        component={ () => <Post
          title = {post.title}
          allAuthors = {post.authors}
          body = {post.body}
          comments = {post.comments} />}
      />
      <Route exact path='/favorite-movie' component={FavoriteMovie} />
      <Route exact path='/favorite-food' component={FavoriteFood} />
      <Route exact path='/about' component={About} />

    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
