export const tokenGenerator = (payload)=>{
    const {teachername,id} = payload;
    // console.log(payload);

    return "njsdkvnksbvkdfvdf"+teachername.slice(0,3)+"."+id+"."+Math.round(Math.random()*1000000);
}