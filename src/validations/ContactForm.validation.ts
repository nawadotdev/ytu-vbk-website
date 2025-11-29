import z from "zod";

export const contactFormTrValidation = z.object({
    name: z.string().min(1, { message: 'Adınızı giriniz' }),
    email: z.email({ message: 'Geçerli bir email adresi giriniz' }),
    message: z.string().min(1, { message: 'Mesajınızı giriniz' }),
})