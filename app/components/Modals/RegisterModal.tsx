'use client';

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from "react";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { Modals } from "../../features/Modals/Modals";
import { Heading } from "@/app/features/Heading/Heading";
import { Input } from "@/app/features/inputs/Input";
import { RegisterStyle } from "@/app/utils/constantStyle";
import { toast } from "react-hot-toast";
import { Button } from "@/app/features/Button/Button";


export const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register, handleSubmit, formState: {errors,}
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios.post('/api/register', data).then(() => {
            registerModal.onClose();
            toast.success('Action success! ')

            console.log("DATA", data)
        }).catch((error) => {
            toast.error('Error on submit')
            // console.log(error);
        }).finally(() => {
            setIsLoading(false);
        });
    }

    const footerContent = (
        <div className={`${RegisterStyle.headingStyle.main} mt-3`}>
            <p className={`${RegisterStyle.headingStyle.title} text-center`}>Or</p>
            <Button
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={() => {}}
            />

            <Button
                outline
                label="Continue with Github"
                icon={AiFillGithub}
                onClick={() => {}}
            />
            <div className={RegisterStyle.haveAccount.main}>
                <div className={RegisterStyle.haveAccount.subMain}>
                    <div>
                        Already have an account?
                    </div>
                    <div onClick={registerModal.onClose} className={RegisterStyle.haveAccount.loginLink}>
                        Log in
                    </div>
                </div>
            </div>
        </div>
    )

    const bodyContent = (
        <div className={RegisterStyle.headingStyle.main}>
            <Heading 
                title="Welcome to Airbnb"
                subtitle="Create an account"
                center
            />

            <Input 
                type="text" 
                id="name" 
                label="Your fullname"
                placeholder="Your full name"
                disabled={isLoading} 
                register={register}
                errors={errors}
                required
            />

            <Input 
                type="email" 
                id="email" 
                label="Your email adress" 
                placeholder="Your Email Adress"
                disabled={isLoading} 
                register={register}
                errors={errors}
                required
            />

            <Input 
                type="password" 
                id="password" 
                label="Your password" 
                placeholder="Your password"
                disabled={isLoading} 
                register={register}
                errors={errors}
                required
            />
        </div>
    );

    return (
        <Modals
            disabled={isLoading}
            title='Register' 
            isOpen={registerModal.isOpen}
            actionLabel="Continue"
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}