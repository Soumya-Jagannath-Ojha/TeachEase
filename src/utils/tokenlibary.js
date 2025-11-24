export const tokenGenerator = (payload)=>{
    const {username,age} = payload;
    // console.log(payload);

    return age+username.slice(0,3)+Math.round(Math.random()*1000000);
}