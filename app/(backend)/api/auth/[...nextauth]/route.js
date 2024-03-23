import NextAuth from "next-auth/next"
import { authOptions } from "@/lib/auth"

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }

// export {GET, POST} from "@lib/auth"