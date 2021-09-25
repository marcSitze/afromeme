import Comment from '../models/Comment';

export default {
  saveComment: async (Comment) => {
    const newComment = new Comment(Comment);
    return await newComment.save();
  },
  findComment: async (query) => {
    console.log('query: ', query);
    return await Comment.findOne(query).populate("user", { password: 0, __v: 0 });
  },
  findById: async (id) => {
    return await Comment.findById(id).populate('user').select('-password');
  },
  // findCommentByQuery: async (query) => {
  //   return await Comment.find(query).populate('user').select('-password');
  // },
  findComments: async () => {
    return await Comment.find({});
  },
  updateComment: async (id, query) => {
    return await Comment.findOneAndUpdate(id, query);
  }
}