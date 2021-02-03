import Vue from "vue";
import store from "@/store/index";
import VueRouter from "vue-router";
import auth from "@/middleware/auth";
import admin from "@/middleware/admin";
import guest from "@/middleware/guest";
import middlewarePipeline from "@/router/middlewarePipeline";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: { middleware: [guest] },
    component: () => import(/* webpackChunkName: "home" */ "../views/Home"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    meta: { middleware: [auth] },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard"),
  },
  {
    path: "/user",
    name: "user",
    meta: { middleware: [auth] },
    component: () => import(/* webpackChunkName: "user" */ "../views/User"),
  },
  {
    path: "/users",
    name: "users",
    meta: { middleware: [auth, admin] },
    component: () => import(/* webpackChunkName: "users" */ "../views/Users"),
  },
  {
    path: "/login",
    name: "login",
    meta: { middleware: [guest] },
    component: () => import(/* webpackChunkName: "login" */ "../views/Login"),
  },
  {
    path: "/register",
    name: "register",
    meta: { middleware: [guest] },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register"),
  },
  {
    path: "/reset-password",
    name: "resetPassword",
    meta: { middleware: [guest] },
    component: () =>
      import(/* webpackChunkName: "reset-password" */ "../views/ResetPassword"),
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    meta: { middleware: [guest] },
    component: () =>
      import(
        /* webpackChunkName: "forgot-password" */ "../views/ForgotPassword"
      ),
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "not-found" */ "../views/NotFound"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
	const context = { to, from, next, store };

	// check if there is any middleware in the route tree
	if (to.matched.some((route) => route.meta.middleware)) {
		// define called middleware stack
		var calledMiddleware = [];
		// loop through all matched routes
		for (var i = 0; i < to.matched.length; i++) {
			// get meta of the current iteration route
			var meta = to.matched[i].meta;
			// check for any meta content and the middleware property
			if (Object.keys(meta).length && meta.hasOwnProperty('middleware')) {
				// get the first available middleware
				var middleware = meta.middleware[0];
				// check if the middleware is a function and is not yet called
				if (typeof middleware === 'function' && !calledMiddleware.includes(middleware.name)) {
					// call the middleware function and include context and pipeline
					middleware({
						...context,
						next: middlewarePipeline(context, middleware, 1),
					});
					// add the called middleware function to the stack
					calledMiddleware.push(middleware.name);
				}
			}
		}
	} else {
		return next();
	}
});

export default router;
