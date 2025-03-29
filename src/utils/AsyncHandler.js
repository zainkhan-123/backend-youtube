
 //   method of promises 
// const AsyncHandlerr = (handler)=>{

//     (req, res , next)=>{
//         Promise.resolve( handler(req , res , next))
//         .catch((err)=> next(err))
//     }

// }

// }

export {AsyncHandler}

const AsyncHandler = (fn)=>  async (req, res , error)=>{
try {
    await fn(req ,res ,error)
} catch (error) {
   res.status(error.code || 500 ).json({
    success: false,
    message : error.massge || "internal server error"
   })
    
}

}
