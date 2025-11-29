import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { contactFormTrValidation } from '@/validations/ContactForm.validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import toast from 'react-hot-toast'
import useWeb3Forms from "@web3forms/react";

const accessKey = process.env.NEXT_PUBLIC_WEB3_FORMS_API_KEY

const ContactForm = () => {

    const form = useForm<z.infer<typeof contactFormTrValidation>>({
        resolver: zodResolver(contactFormTrValidation),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    })

    const { submit: onSubmit } = useWeb3Forms({
        access_key: accessKey || '',
        settings: {
          from_name: form.getValues('name'),
          subject: "YTU VBK Website Contact Form",
          message: form.getValues('message'),
          email: form.getValues('email'),
        },
        onSuccess: (msg, data) => {
          toast.success("Mesajınız gönderildi.")
        },
        onError: (msg, data) => {
          toast.error("Mesajınız gönderilirken bir hata oluştu.")
        },
      });


    return (
        <div className='w-full shadow-md rounded-xl p-4 border border-gray-200'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-sm font-medium'>Adınız</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder='Adınızı giriniz' className='w-full' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-sm font-medium'>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder='Emailinizi giriniz' className='w-full' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='message'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-sm font-medium'>Mesaj</FormLabel>
                                <FormControl>
                                    <Textarea {...field} placeholder='Mesajınızı giriniz' className='w-full' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type='submit' className='w-full bg-primary text-white hover:bg-primary/90 cursor-pointer' disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default ContactForm
