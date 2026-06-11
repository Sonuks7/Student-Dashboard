export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] p-8 animate-pulse">

      <div className="h-44 rounded-3xl bg-gray-800"></div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-56 rounded-2xl bg-gray-800"
          />
        ))}

      </div>

    </main>
  );
}