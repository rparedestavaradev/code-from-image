import { Form } from './form'

export default function Home() {
  const transformUrlToCode = async (url: string) => {
    const res = await fetch('/api/generate-code-from-image', {
      method: 'POST',
      body: JSON.stringify({ url }),
      headers: {
        'Content-type': 'application/json'
      }
    });
    if(!res || res.body == null) {
      throw new Error('Error al general el código');
    }
    const reader = res.body.getReader();
    const decoder = new TextDecoder();

    while(true) {
      const { done, value } = await reader.read();
      const chunk = decoder.decode(value);
      console.log(chunk);
      if(done) break;
    }
  }

  return (
    <main className="grid grid-cols-[400px_1fr]">
      <aside className='flex flex-col justify-between min-h-screen p-4 bg-gray-900'>
      <header className="text-center">
        <h1 className='text-3xl font-semibold'>Image 2 Code</h1>
        <h2 className='text-sm opacity-75'>Pasa esta imagen en s</h2>
      </header>
      <section></section>
      <footer>By Rogger Paredes</footer>
      </aside>
      <main className="bg-gray-950">
        <section className='max-w-2xl mx-auto p-10'>
            <Form transformUrlToCode={transformUrlToCode}/>  
        </section>
      </main>
    </main>
  )
}
