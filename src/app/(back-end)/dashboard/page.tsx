export default function Dashboard() {
  return (
    <div className='flex min-h-screen flex-col'>
      <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
        <div className='flex items-center'>
          <h1 className='text-lg font-semibold md:text-2xl'>Shorts</h1>
        </div>
        <div
          className='flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm'
          x-chunk='dashboard-02-chunk-1'
        ></div>
      </main>
    </div>
  );
}
