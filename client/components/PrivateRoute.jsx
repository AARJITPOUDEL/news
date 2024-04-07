import { useRouter } from "next/router";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const isAuthenticated = !!localStorage.getItem("token");
        if (!isAuthenticated) {
          router.push("/login");
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    checkAuth();
  }, [router]);

  return <>{children}</>;
};

export default PrivateRoute;
