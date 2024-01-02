export async function POST(request: Request) {
  const { body } = request
  return Response.json(body);
}
