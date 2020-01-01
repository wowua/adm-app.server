exports.addTask = ({ id, desc }) => {
  new Promise((resolve, reject) => {
    try {
      resolve({
        success: true
      });
    } catch (err) {
      reject(err);
    }
  });
};
