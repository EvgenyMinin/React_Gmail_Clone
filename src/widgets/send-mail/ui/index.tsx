import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useAppDispatch } from "../../../app/hooks";
import { closeSendMessage } from "../..";

import styles from "./styles.module.css";

type FormData = {
    to: string;
    subject: string;
    message: string;
};

export const SendMail = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();
    const dispatch = useAppDispatch();

    const onSubmit = (formData: FormData) => console.log(formData);
    const closeModalHandler = () => {
        dispatch(closeSendMessage());
    };

    return (
        <div className={styles.sendMail}>
            <div className={styles.header}>
                <h3>New Message</h3>
                <CloseIcon onClick={closeModalHandler} className={styles.closeIcon} />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="To" {...register("to", { required: true })} type="email" />
                {errors.to && <p className={styles.error}>To is required!</p>}

                <input placeholder="Subject" {...register("subject", { required: true })} type="text" />
                {errors.subject && <p className={styles.error}>Subject is required!</p>}

                <input placeholder="Message..." {...register("message", { required: true })} type="text" className={styles.textarea} />
                {errors.message && <p className={styles.error}>Message is required!</p>}

                <div>
                    <Button variant="contained" color="primary" type="submit" className={styles.sendBtn}>
                        Send
                    </Button>
                </div>
            </form>
        </div>
    );
};
