import { success } from "zod"

export const validateSchema = (schema) => {
    return (req,res,next) => {
        const result = schema.safeParse(req.body)

        if(!result.success){
            return res.status(400).json({
                success: false,
                message: "Los datos ingreados son inválidos.",
                errors: result.error.errors  
            })
        }

        req.validatedBody = result.data
        next()
    }
} 