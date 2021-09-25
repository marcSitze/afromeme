import { Request, Response } from 'express';
import PostsService from '../services/post.service';
import { CreatePostDTO } from '../dto/post.dto';

import { ErrorHandler, SuccessHandler } from '../common/response.handler';
import constants from '../common/constants';

const { httpStatus } = constants;
const postsService = new PostsService();
export const createPost = (req: Request, res: Response) => {
  const { author, description, media} : CreatePostDTO = req.body;
  const errors = [];

	if(!author) {
		errors.push({msg: "please fill in the author id"});
	}
	if(!description) {
		errors.push({msg: "please fill in a description"});
	}
	if(!media) {
		errors.push({msg: "please attach a media link"});
	}

	if(errors.length > 0) {
		errors.push({msg: "please enter the required information"});
		return ErrorHandler(res, httpStatus.BAD_REQUEST, errors);
	}

	// await postsService.createPost()
}