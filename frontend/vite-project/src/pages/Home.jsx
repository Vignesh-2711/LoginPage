const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
      <div className="text-center">
        <h2 className="mb-4">Welcome User!!</h2>
        <a href="/login" className="btn btn-secondary  me-3">Login</a>
        <a href="/register" className="btn btn-secondary me-3">Register</a>
        <h3 className="my-3 ">If you're new, <a href="/register" className="text-decoration-none">Register</a></h3>
      </div>
    </div>
  );
};

export default Home;
