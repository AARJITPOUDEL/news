import PrivateRoute from "../components/PrivateRoute";

const PrivatePage = () => {
  return (
    <PrivateRoute>
      <div>
        <h1>Private Page</h1>
      </div>
    </PrivateRoute>
  );
};

export default PrivatePage;
