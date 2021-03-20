import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useContext, useState } from "react";
import Header from "../Header/Header";
import { UserContex } from "../../App";
import { useHistory, useLocation } from "react-router";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const Login = () => {
  const [newUser, setNewUser] = useState(false);

  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    photo: "",
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContex);
  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const updateUserName = (name) => {
    var user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        // Update successful.
        console.log("user name updated successfully");
      })
      .catch(function (error) {
        // An error happened.
        console.log(error);
      });
  };

  const provider = new firebase.auth.GoogleAuthProvider();

  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, photoURL, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signedInUser);
        // console.log(displayName, email, photoURL);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const signOutUser = {
          isSignedIn: false,
          name: "",
          password: "",
          photo: "",
          email: "",
          success: false,
        };
        setUser(signOutUser);
      })
      .catch((error) => {});
  };

  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          // Signed in
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);

          updateUserName(user.name);
          // ...
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }

    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          // Signed in
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
          // console.log("sign in user info", res.user);
          // ...
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }

    e.preventDefault();
  };

  const handleOnBlur = (event) => {
    let isFieldValid = true;
    if (event.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  };
  return (
    <div className="text-center">
      <Header></Header>
      <div className="login-style">
        {user.isSignedIn ? (
          <button onClick={handleSignOut}>sign Out</button>
        ) : (
          <button onClick={handleSignIn}>Sign in</button>
        )}
        {user.isSignedIn && (
          <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <img src={user.photo} alt="" />
          </div>
        )}
        <h1>Our own Authentication</h1>
        <p>Name:{user.name} </p>
        <p>Email: {user.email}</p>
        <p>Password: {user.password}</p>
        <input
          type="checkbox"
          name="newUser"
          id=""
          onChange={() => setNewUser(!newUser)}
        />
        <label htmlFor="newUser">NewUser Sign Up</label>
        <div className="fieldset-style">
          <h5>Create an account</h5>
          <form onSubmit={handleSubmit}>
            {newUser && (
              <input
                type="text"
                onBlur={handleOnBlur}
                name="name"
                id=""
                placeholder="Your name"
              />
            )}
            <br />
            <input
              type="email"
              onBlur={handleOnBlur}
              name="email"
              placeholder="Your email address"
              required
            />
            <br />
            <input
              type="password"
              onBlur={handleOnBlur}
              name="password"
              id=""
              placeholder="Your password"
              required
            />
            <br />
            <input
              onClick={handleSubmit}
              type="submit"
              value={newUser ? "sign up" : "sign in"}
            />
          </form>
        </div>
        <p style={{ color: "red" }}>{user.error}</p>
        {user.success && (
          <p style={{ color: "green" }}>
            Account {newUser ? "created" : "Logged In"} successfully.
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
