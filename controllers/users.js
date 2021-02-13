const Users = require('../models/Users');
const Videos = require('../models/video');

exports.getUsers = async (req, res) => {
    let searchOptions = {};
    if(req.query.search != null && req.query.search !== '') {
        searchOptions.name = new RegExp(req.query.search, 'i');
    }  
    try { 
       const userAuth = req.user? true: null;
       // const users = await Users.find({});
       const users = await Users.find(searchOptions);
       // res.status(200).json(users);
       res.status(200).render('users/index', {
        title: 'Users',
        users,
        userAuth,
        searchOptions: req.query
       });
    } catch(err) {
        console.error(err);
     //  return res.status(500).json({ msg: 'Server Error' });
    }
}

exports.getUserById = async (req, res) => {
     //   res.send('user page ' + req.params.id);
 
     try {
        const userAuth = req.user? true: null;
        const user = await Users.findById(req.params.id);
        let videos = await Videos.find({}).sort({ publishDate: -1 });

       // res.status(200).json(videos);
        
        res.status(200).render('users/user', {
            title: 'User - ' + user.name,
            videos,
            user,
            userAuth,
        });
    } catch(err) {
        console.error(err);
    }

}