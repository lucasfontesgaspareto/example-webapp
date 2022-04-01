import authSelectors from '../../../modules/auth/authSelectors';
import layoutSelectors from '../../../modules/layout/layoutSelectors';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import EmailUnverifiedRoute from './EmailUnverifiedRoute';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import CustomLoadable from '../CustomLoadable';
import ProgressBar from '../ProgressBar';
import routes from '../../../view/routes';
import EmptyTenantRoute from './EmptyTenantRoute';
import EmptyPermissionsRoute from './EmptyPermissionsRoute';

function RoutesComponent(props) {
  const isInitialMount = useRef(true);

  const authLoading = useSelector(
    authSelectors.selectLoadingInit,
  );
  const layoutLoading = useSelector(
    layoutSelectors.selectLoading,
  );
  const loading = authLoading || layoutLoading;
  const currentUser = useSelector(
    authSelectors.selectCurrentUser,
  );
  const currentTenant = useSelector(
    authSelectors.selectCurrentTenant,
  );

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      ProgressBar.start();
      return;
    }

    if (!loading) {
      ProgressBar.done();
    }
  }, [loading]);

  if (loading) {
    return <div />;
  }

  return (
    <Switch>
      {routes.publicRoutes.map((route) => (
        <PublicRoute
          key={route.path}
          exact
          path={route.path}
          currentUser={currentUser}
          currentTenant={currentTenant}
          component={CustomLoadable({
            loader: route.loader,
          })}
        />
      ))}

      {routes.emailUnverifiedRoutes.map((route) => (
        <EmailUnverifiedRoute
          key={route.path}
          exact
          path={route.path}
          currentUser={currentUser}
          currentTenant={currentTenant}
          component={CustomLoadable({
            loader: route.loader,
          })}
        />
      ))}

      {routes.emptyTenantRoutes.map((route) => (
        <EmptyTenantRoute
          key={route.path}
          exact
          path={route.path}
          currentUser={currentUser}
          currentTenant={currentTenant}
          component={CustomLoadable({
            loader: route.loader,
          })}
        />
      ))}

      {routes.emptyPermissionsRoutes.map((route) => (
        <EmptyPermissionsRoute
          key={route.path}
          exact
          path={route.path}
          currentUser={currentUser}
          currentTenant={currentTenant}
          component={CustomLoadable({
            loader: route.loader,
          })}
        />
      ))}

      {routes.privateRoutes.map((route) => (
        <PrivateRoute
          key={route.path}
          currentUser={currentUser}
          currentTenant={currentTenant}
          permissionRequired={route.permissionRequired}
          path={route.path}
          component={CustomLoadable({
            loader: route.loader,
          })}
          exact={Boolean(route.exact)}
        />
      ))}

      {routes.simpleRoutes.map((route) => (
        <Route
          key={route.path}
          exact
          path={route.path}
          component={CustomLoadable({
            loader: route.loader,
          })}
        />
      ))}
    </Switch>
  );
}

export default RoutesComponent;
