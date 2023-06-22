type jsondoc = string;

export async function addMessage(message: string) : Promise<jsondoc> {
    const result = await fetch('/api/add-message', {
        method: 'POST',
        body: JSON.stringify({ message }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (result.ok) {
        return await result.json();
    } else {
        throw new Error(await result.text());
    }
}