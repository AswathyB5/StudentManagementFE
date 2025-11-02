import axios from "axios";



const commonApi = async(method,url,reqBody) => {

    let configobj={
        method:method,
        url:url,
        data:reqBody
    }
  
    return await axios(configobj).then((response)=>{
      return response;
    }).catch((error)=>{
   return error
})
}
export default commonApi