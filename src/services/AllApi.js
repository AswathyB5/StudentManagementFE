import { BaseUrl } from "./BaseUrl"

import commonApi from "./commonApi"



export const getData =async()=>{
 return await commonApi("get", `${BaseUrl}/stud_detail`, "");
}

export const createData =async(reqBody)=>{
    return await commonApi("post", `${BaseUrl}/stud_detail`, reqBody);
}

export const deleteData =async(id)=>{
    return await commonApi("delete",`${BaseUrl}/stud_detail/${id}`,{})
}

export const editSave =async(id,reqBody)=>{
return await commonApi("patch",`${BaseUrl}/stud_detail/${id}`,reqBody)
}