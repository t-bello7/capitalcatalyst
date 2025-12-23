export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
        <div className="p-5">
          {children}
        </div>
    </main>
  );
}
