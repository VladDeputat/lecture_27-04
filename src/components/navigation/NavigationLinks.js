import React from "react";
import { useSelector } from "react-redux";
import mainRoutes from "../../routes/mainRoutes";
import NavigationLinkItem from "./NavigationLinkItem";

const NavigationLinks = () => {
  const isAuth = useSelector((state) => state.auth.idToken);
  return (
    <nav>
      <ul>
        {mainRoutes.map((route) => (
          <NavigationLinkItem key={route.path} {...route} isAuth={isAuth} />
        ))}
      </ul>
    </nav>
  );
};

export default NavigationLinks;
