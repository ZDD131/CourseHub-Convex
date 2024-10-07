"use client";

import { useState} from "react";

import { SignInFlow } from "../types";
import { SignUpCard } from "./sign-up-card";
import { SignInCard } from "./sign-in-card";


export const AuthScreen = () => {
    const [state, setState] = useState<SignInFlow>("signIn");

    return (
        <div className="h-full flex items-center justify-center bg-cyan-800 flex-col">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-8 font-serif">CourseHub</h1>
            <div className="md:h-auto md:w-[420px]">
                {state === "signIn" ? <SignInCard /> : <SignUpCard/>}
            </div>
        </div>
    );

};