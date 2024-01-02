"use client";

export default function Home() {

  const handlePostRequest = async () => {
    const response = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify({ name: 'Hello World' }),
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <button onClick={handlePostRequest} className="bg-gray-800 text-white px-4 py-2 rounded-md">
          Send Email
        </button>
      </div>
    </main>
  )
}
