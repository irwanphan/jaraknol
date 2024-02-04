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
  // if (!session || !session.user) {
  //   redirect("api/auth/signin");
  // }
  console.log(authOptions);

  return (
    <SessionProvider session={session}>
      <div className="relative flex min-h-screen flex-col bg-stone-50">
        {/* <SiteHeader /> */}
        <div className="flex-1 px-4 py-4 md:px-8">
          <div className="space-y-4">
            <div className="container relative p-0">
              <main className="relative min-h-[calc(100vh-100px)] py-6">
                {children}
              </main>
            </div>
          </div>
        </div>
      </div>
      {/* <Toaster /> */}
    </SessionProvider>
  );
}
