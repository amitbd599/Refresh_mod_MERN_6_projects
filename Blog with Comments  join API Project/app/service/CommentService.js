import mongoose from "mongoose";
import CommentModel from "../model/CommentModel.js";

//! ProductService
export const CreateCommentService = async (req) => {
    try {
        let ReqBody = req.body;
        const data = await CommentModel.create(ReqBody);
        return { status: true, data: data };
    } catch (error) {
        return { status: false, error: error.toString() };
    }
};

