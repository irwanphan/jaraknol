import { defaultMetadata } from "@/lib/metadata";
// import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${defaultMetadata.title} Home`,
};

export default async function Home() {
  return (
    <>
      no bullshit
    </>
  );
}
