import express from "express";
import { updateAccessToken } from './../controllers/user.controller';
import { addAnswer, addQuestion, addReplyToReview, addReview, deleteCourse, editCourse, getAllCourse, getAllCourses, getCourseByUser, getSingleCourse, uploadCourse, generateVideoUrl } from "../controllers/course.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { getAllCoursesService } from "../services/course.service";
const courseRouter = express.Router();

courseRouter.post("/create-course",updateAccessToken, isAuthenticated, authorizeRoles("admin"), uploadCourse);

courseRouter.put("/edit-course/:id",updateAccessToken, isAuthenticated, authorizeRoles("admin"), editCourse);

courseRouter.get("/get-course/:id", getSingleCourse);

courseRouter.get("/get-courses", getAllCourses);

courseRouter.get("/get-course-content/:id",updateAccessToken, isAuthenticated, getCourseByUser);

courseRouter.put("/add-question",updateAccessToken, isAuthenticated, addQuestion);

courseRouter.put("/add-answer",updateAccessToken, isAuthenticated, addAnswer);

courseRouter.put("/add-review/:id",updateAccessToken, isAuthenticated, addReview);

courseRouter.put("/add-reply",updateAccessToken, isAuthenticated, authorizeRoles("admin"), addReplyToReview);

courseRouter.get("/get-all-courses", isAuthenticated, authorizeRoles("admin"), getAllCourse);

courseRouter.post("/getVdoCipherOTP", generateVideoUrl);

courseRouter.delete("/delete-course/:id",updateAccessToken, isAuthenticated, authorizeRoles("admin"), deleteCourse);

export default courseRouter;