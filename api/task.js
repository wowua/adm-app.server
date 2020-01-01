exports.addTask = ({ id, desc }) => {
  console.log("id", id);
  console.log("desc", desc);

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
