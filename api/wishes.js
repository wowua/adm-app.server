const Wish = require("../models/wish");

exports.add = ({ title }) =>
  new Promise(async (resolve, reject) => {
    try {
      if (!title) {
        resolve({
          success: false,
          message: "title is required"
        });
        return;
      }

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
