import { defaultMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import SignInForm from "./_components/SignInForm";

export const metadata: Metadata = {
    title: `${defaultMetadata.title} Sign In`,
};

export default function SignInPage() {
    return (
        <SignInForm />
    );
}
