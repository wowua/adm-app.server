const Wish = require("../models/wish");

exports.add = ({ title }) =>
  new Promise(async (resolve, reject) => {
    if (!title) {
      return resolve({
        success: false,
        message: "title is required"
      });
    }

    try {
      const newWish = new Wish({
        title
      });

      const data = await newWish.save();

      resolve({
        success: true,
        wish: data
      });
    } catch (err) {
      reject(err);
    }
  });

exports.get = ({ userId }) =>
  new Promise(async (resolve, reject) => {
    // if (!userId) {
    //   return resolve({
    //     success: false,
    //     message: "userId is required"
    //   });
    // }

    try {
      const wishes = await Wish.find({ userId: 1 });

      resolve({
        success: true,
        wishes
      });
    } catch (error) {
      reject(error);
    }
  });
