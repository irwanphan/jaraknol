import SessionProvider from "@/lib/providers/SessionProvider";
// import { SiteHeader } from "@/components/ui/site-header";
// import { Toaster } from "@/components/ui/toaster";
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function UserPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    redirect("api/auth/signin");
  }
  console.log(session);

  return (
    <SessionProvider session={session}>
      <main className="relative min-h-[calc(100vh-100px)] py-6">
        {children}
      </main>
      {/* <Toaster /> */}
    </SessionProvider>
  );
}
