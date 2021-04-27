import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import mainRoutes from "../../routes/mainRoutes";
import PrivateRoute from "../routes/PrivateRoute";
import PublicRoute from "../routes/PublicRoute";

const NavigationRoutes = () => {
  const isAuth = useSelector((state) => state.auth.idToken);
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Switch>
        {mainRoutes.map((route) =>
          route.isPrivate ? (
            <PrivateRoute {...route} isAuth={isAuth} />
          ) : (
            <PublicRoute {...route} isAuth={isAuth} />
          )
        )}
      </Switch>
    </Suspense>
  );
};

export default NavigationRoutes;
