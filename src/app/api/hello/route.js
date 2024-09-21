export async function GET() {
  return new Response(JSON.stringify({ message: 'Hello from the backend!' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  const { name } = await request.json();
  if (!name) {
    return new Response(JSON.stringify({ message: 'Name is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ message: `Hello, ${name}!` }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
