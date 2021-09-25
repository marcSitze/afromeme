import Media from '../models/Media';

export default {
  saveMedia: async (Media) => {
    const newMedia = new Media(Media);
    return await newMedia.save();
  },
  findMedia: async (query) => {
    console.log('query: ', query);
    return await Media.findOne(query).populate("user", { password: 0, __v: 0 });
  },
  findById: async (id) => {
    return await Media.findById(id).populate('user').select('-password');
  },
  // findMediaByQuery: async (query) => {
  //   return await Media.find(query).populate('user').select('-password');
  // },
  findMedias: async () => {
    return await Media.find({});
  },
  updateMedia: async (id, query) => {
    return await Media.findOneAndUpdate(id, query);
  }
}