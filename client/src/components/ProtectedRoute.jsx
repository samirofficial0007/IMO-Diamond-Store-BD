function ProtectedRoute({ children }) {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return (
      <div>
        <h2>Login Required</h2>
        <p>Please login to continue.</p>
      </div>
    );
  }

  return children;
}

export default ProtectedRoute;
