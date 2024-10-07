import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useAuthActions } from "@convex-dev/auth/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const SignInCard = ()=> {

    const {signIn} = useAuthActions();

    const onProvider = (value: "github" | "google") => {
        signIn(value);
    };

    return (
        <Card className="w-full h-full p-12">
            <CardTitle className="px-0 pt-0">
                Login with Google or Github
            </CardTitle>
            <Separator className="my-4" />
            <CardContent>
                <div className="flex flex-col gap-y-2.5">
                    <Button 
                    disabled={false}
                    onClick={() => {}}
                    variant="outline"
                    size="lg"
                    className="w-full relative"
                    >
                        <FcGoogle className="size-5 absolute left-2.5 top-2.5" />
                            Continue with Google
                    </Button>
                    <Button 
                    disabled={false}
                    onClick={() => onProvider("github")}
                    variant="outline"
                    size="lg"
                    className="w-full relative"
                    >
                        <FaGithub className="size-5 absolute left-2.5 top-2.5" />
                            Continue with GitHub
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};