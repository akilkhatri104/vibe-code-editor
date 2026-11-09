import SignInFormClient from "@/modules/auth/components/signin-form-client";
import Image from "next/image";
import React from "react";

function SigninPage() {
  return (
    <>
      <Image
        src={"/login.svg"}
        alt="login image"
        width={300}
        height={300}
        className="m-6 object-cover"
      />
      <SignInFormClient />
    </>
  );
}

export default SigninPage;
