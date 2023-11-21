import { signInWithPopup } from "firebase/auth";
import React from 'react'
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Home() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? (
        <>
          <UserInfo />
          <SignOutButton />
        </>
      ): (
        <SignInButton/>
      )}
    </div>
  )
}

export default Home

// サインインボタン
function SignInButton () {
  const signIn = () => {
    signInWithPopup(auth, provider)
  };
  return (
    <button onClick={signIn}>ログインする</button>
  );
}

// サインアウトボタン
function SignOutButton () {
  return (
    <button onClick={() => auth.signOut()}>サインアウト</button>
  );
}

function UserInfo () {
  return (
    <div className="userinfo-Block">
      <p className="userinfo-Name">{auth.currentUser.displayName}</p>
      <img className="userinfo-Img" src={auth.currentUser.photoURL} alt="" />
    </div>
  );
}