import React, { Suspense, Fragment, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import HomeView from 'src/views/home/HomeView';
import LoadingScreen from 'src/components/LoadingScreen';
import AuthGuard from 'src/components/AuthGuard';
import GuestGuard from 'src/components/GuestGuard';


export const renderRoutes = (routes = []) => (
    <Suspense fallback={<LoadingScreen />}>
        <Switch>
            {routes.map((route, i) => {
                const Guard = route.guard || Fragment;
                const Layout = route.layout || Fragment;
                const Component = route.component;
                return (
                    <Route key={i} path={route.path} exact={route.exact}
                        render={(props) => (
                        <Guard>
                            <Layout>
                                {route.routes ? renderRoutes(route.routes) : <Component {...props} />}
                            </Layout>
                        </Guard>
                        )}
                    />
                );
            })}
        </Switch>
    </Suspense>
);

const routes = [


  {
    exact: true,
    path: '/404',
    component: lazy(() => import('src/views/errors/NotFoundView'))
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/login',
    component: lazy(() => import('src/views/auth/LoginView'))
  },


  {


    path: '/app',
    guard: AuthGuard,
    layout: DashboardLayout,
    routes: [
      {
        exact: true,
        path: '/app/account',
        component: lazy(() => import('src/views/account/AccountView'))
      },
      {
        exact: true,
        path: '/app/management/customers',
        component: lazy(() => import('src/views/customer/CustomerListView'))
      },
      {
        exact: true,
        path: '/app/reports/dashboard',
        component: lazy(() => import('src/views/reports/DashboardView'))
      },
      {
        exact: true,
        path: '/app/reports/dashboard-alternative',
        component: lazy(() => import('src/views/reports/DashboardAlternativeView'))
      },
      {
        component: () => <Redirect to="/404" />
      }
    ]
  },


  {
    path: '*',
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: '/',
        component: HomeView
      },
      {
        component: () => <Redirect to="/404" />
      }
    ]
  }


];

export default routes;
