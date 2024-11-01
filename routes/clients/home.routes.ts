import { Router } from "express";
import * as controller from "../../controllers/clients/home.controller";
import * as middleware from "../../middlewares/clients/session_cart.middlewares"
const router: Router = Router();

router.get("/",middleware.session_cart, controller.index);

export const homeRoutes: Router = router;
