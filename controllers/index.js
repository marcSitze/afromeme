
const Video = require('../models/video'); 
const Users = require('../models/Users');
const Comment = require('../models/Comment');

// get Index route 
exports.getIndex = async (req, res) => {
    // Check if user is loggedIn returns a boolean
    const userAuth = req.user? true: null;

    // res.send('these are all the best memes you will ever see');
    try {

        const videos = await Video.find({}).sort({ publishDate: -1 });
        res.render('index', {
            videos,
            title: 'AfroMeme',
            userAuth
        });
    } catch (err) {
        console.error(err);
    }
};

exports.getIndividual = async (req, res) => {
    //console.log(req.user);
    const userAuth = req.user? true: null;
    try {
        const video = await Video.findById(req.params.id);
        const comments = await Comment.find({video: video.id}).populate('user', ['name']);
// console.log(comments);

        res.render('videos/individual', {
            video,
            title: 'Meme description',
            userAuth,
            comments
        });
    } catch(err) { 
        console.error(err);
    }
}

exports.postComment = async (req, res) => {
    //console.log(req.user);
    const userAuth = req.user? true: null;

    try {
        const video = await Video.findById(req.params.id); 
        const comments = await Comment.find({});
        if(req.body.comment){
            const comment = new Comment({
                comment: req.body.comment,
                video: req.params.id,
                user: req.user.id
            });
            //   console.log(comment);
    
            await comment.save();
        }
        
// refresh the browser and shows new comments
        res.redirect('/individual/' + video.id);
    } catch(err) {
        console.error(err);
    }
    
};