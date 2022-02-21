import React from "react";
import { useForm } from "react-hook-form";

import arrow from "../images/icon-arrow.svg";
import iconError from "../images/icon-error.svg";

const EmailInput = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log("Data", data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder="Email Address"
                {...register("email", {
                    required: "Campo requerido",
                    pattern: /@/i,
                })}
                style={
                    errors.email
                        ? { border: "2px solid var(--Soft-Red)" }
                        : null
                }
            />

            <button>
                <img src={arrow} alt="arrow" />
            </button>
            <img
                src={iconError}
                alt="Error"
                className="icon__error"
                style={
                    errors.email
                        ? { opacity: 1, visibility: "visible" }
                        : { opacity: 0, visibility: "hidden" }
                }
            />
            <p
                className="message__error"
                style={
                    errors.email
                        ? { opacity: 1, visibility: "visible" }
                        : { opacity: 0, visibility: "hidden" }
                }
            >
                Please provide valid email
            </p>
        </form>
    );
};

export default EmailInput;
