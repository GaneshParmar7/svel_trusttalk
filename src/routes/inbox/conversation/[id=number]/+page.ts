export const ssr = false;

export async function load({ parent, params }) {

    const { inbox } = await parent();

    const message = inbox.find((message) => message.id === parseInt(params.id));

    return { message };
}