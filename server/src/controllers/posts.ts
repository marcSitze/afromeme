import { Request, Response } from 'express';
import PostsService from '../services/post.service';
import AccountService from '../services/account.service';
import { CreatePostDTO } from '../dto/post.dto';

import { ErrorHandler, SuccessHandler } from '../common/response.handler';
import constants from '../common/constants';

const { httpStatus } = constants;
const postsService = new PostsService();
const accountsService = new AccountService();

export const createPost = async (req: Request, res: Response) => {
  const { author, description, media} : CreatePostDTO = req.body;
  const errors = [];

	if(!author) {
		errors.push({msg: "please fill in the author id"});
	}
	// if(!description) {
	// 	errors.push({msg: "please fill in a description"});
	// }
	if(!media) {
		errors.push({msg: "please attach a media link"});
	}

	if(errors.length > 0) {
		errors.push({msg: "please enter the required information"});
		return ErrorHandler(res, httpStatus.BAD_REQUEST, errors);
	}

	let post = {
		author,
		description: req.body.description ? req.body.description: '',
		media,
		comments: [],
	}

	try {
		const account = await accountsService.getAccountById(author);
		if(!account) {
			return ErrorHandler(res, httpStatus.NOT_FOUND, {"msg": "User Account not found..."});
		}
		const newPost = await postsService.createPost(post);

		const accountUp =	await accountsService.updateAccount({_id: author}, { posts: [...account.posts, newPost._id] });
		console.log('AccountUP: ', accountUp);
		SuccessHandler(res, httpStatus.CREATED, post);
	} catch(err) {
		console.error(err);
	}
}

export const getPost = async (req: Request, res: Response) => {
	const id = req.params.id;

	try {
		const post = await postsService.getPostById(id);
		if(!post) {
			return ErrorHandler(res, httpStatus.NOT_FOUND, {"msg": "Post not found..."});
		}
		SuccessHandler(res, httpStatus.OK, post);
	} catch (err) {
		console.error(err);
	}
}
export const getPosts = async (req: Request, res: Response) => {

	try {
		const posts = await postsService.getPosts();
		if(!posts) {
			return ErrorHandler(res, httpStatus.NO_CONTENT, 'No posts yet...');
		}
		SuccessHandler(res, httpStatus.OK, posts);
	} catch (err) {
		console.error(err);
	}
}
export const updatePost = async (req: Request, res: Response) => {}