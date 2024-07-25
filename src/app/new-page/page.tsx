import {cookies} from "next/headers";

export default function NewPage() {
    const authToken = cookies().get('auth_token');

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-4xl font-bold mb-4">This page is served from Vercel</h1>
            <p className="text-xl">You are viewing the new-page route.</p>
            <p className="text-xl">Your auth token is: {authToken?.value}</p>
        </main>
    );
}
