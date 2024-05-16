import axios from "axios";

// export const UploadCloudinary = async (type: string, file: any) => {
//   const formData = new FormData();
//   formData.append("file", type === "image" && file)
//   formData.append("upload_preset", type === "image" && "images_preset");

//   let cloudName = process.env.NEXT_PUBLIC_Cloud_NAME;
//   let resourceType = type === "image" && "image";
//   let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

//   const { data } = await axios.post(api, formData)
// }

const uploadToCloudinary = async (type: string, files: any) => {
  const uploadResults = []

  if (!files?.length) {
    console.error('Upload the image files and save the product')
    return
  }
  
  for (const file of files) {
    try {
      const formData = new FormData()
      formData.append("file", type === "image" && file)
      formData.append("upload_preset", type === "image" && "images_preset")
      
      let cloudName = process.env.NEXT_PUBLIC_Cloud_NAME;
      let resourceType = type === "image" && "image";
      
      const { data } = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`, formData)
      uploadResults.push({ publicId: data?.public_id, url: data?.secure_url })
    } catch (error) {
      console.log("Error uploading file to Cloudinary:", error)
    }
  }

  return uploadResults

};

export default uploadToCloudinary;
