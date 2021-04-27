import { NavLink } from "react-router-dom";

const NavigationLinkItem = ({ path, exact, name, isPrivate, isRestricted, isAuth }) => {
  return (
    <>
      {((!isAuth && !isPrivate && isRestricted) ||
        (isAuth && isPrivate && !isRestricted) ||
        (!isPrivate && !isRestricted)) && (
        <li>
          <NavLink to={path} exact={exact}>
            {name}
          </NavLink>
        </li>
      )}

      {/* {!isPrivate && !isRestricted && (
        <li>
          <NavLink to={path} exact={exact}>
            {name}
          </NavLink>
        </li>
      )}
      {isAuth && isPrivate && !isRestricted && (
        <li>
          <NavLink to={path} exact={exact}>
            {name}
          </NavLink>
        </li>
      )}
      {!isAuth && !isPrivate && isRestricted && (
        <li>
          <NavLink to={path} exact={exact}>
            {name}
          </NavLink>
        </li>
      )} */}
    </>
  );
};

export default NavigationLinkItem;
