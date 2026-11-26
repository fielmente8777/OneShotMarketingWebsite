const CONTACT_ENDPOINT = "https://nexon.eazotel.com/eazotel/addcontacts";

export async function postContact<T = { Status?: boolean }>(
  body: Record<string, unknown>
): Promise<T> {
  const res = await fetch(CONTACT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }
  return (await res.json()) as T;
}
