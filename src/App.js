import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App overflow-hidden">
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
            <PrivateRoute path="/booking/:id">
              <BookingForm />
            </PrivateRoute>
            <PrivateRoute path="/add">
              <AddTour />
            </PrivateRoute>
            <PrivateRoute path="/myBookings">
              <MyBookings />
            </PrivateRoute>
            <PrivateRoute path="/manageBookings">
              <ManageTours />
            </PrivateRoute>
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
