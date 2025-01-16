export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen pb-16 sm:pb-20">
      {children}
    </div>
  );
}
