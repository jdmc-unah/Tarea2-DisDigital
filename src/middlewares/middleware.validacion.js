import { success } from "zod"

export const validateSchema = (schema) => {
    return (req,res,next) => {        
        const { success, data, error } = schema.safeParse(req.body)
        
        if(!success){
            return res.status(400).json({
                success: false,
                message: "Los datos ingreados son inválidos.",
                errors: JSON.parse(error.message)  
            })
        }

        req.validatedBody = data
        next()
    }
} 