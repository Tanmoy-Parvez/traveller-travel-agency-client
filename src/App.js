import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';
import BookingForm from './BookingForm/BookingForm';
import AddTour from './AddTour/AddTour';
import MyBookings from './MyBookings/MyBookings';
import ManageTours from './components/ManageTours/ManageTours';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/signIn">
              <SignIn />
            </Route>
            <Route path="/signUp">
              <SignUp />
            </Route>
            <Route path="/booking">
              <BookingForm />
            </Route>
            <Route path="/add">
              <AddTour />
            </Route>
            <Route path="/myBookings">
              <MyBookings />
            </Route>
            <Route path="/manageBookings">
              <ManageTours />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
