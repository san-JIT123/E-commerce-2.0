import ImageKit from "imagekit";

let storageInstance = new ImageKit({
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY,
  urlEndpoint: process.env.IK_URL,
});

const sendFiles = async (file, fileName) => {
  try {
    let options = {
      file,
      fileName,
      folder: "kodex1",
    };

    return await storageInstance.upload(options);
  } catch (error) {
    console.log("error in IK", error);
  }
};

export default sendFiles;
