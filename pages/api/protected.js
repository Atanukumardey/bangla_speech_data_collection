import { auth } from "auth"
export default async function handler(req, res) {
    const session = await auth(req, res)

    if (session) {
        return res.send({
            content:
                "This is protected content. You can access this content because you are signed in.",
        })
    }

    res.send({
        error: "You must be signed in to view the protected content on this page.",
    })
}