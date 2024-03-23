const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "http://localhost:3000"

async function handleResponse(response) {
  const contentType = response.headers.get("Content-Type") || ""
  const isJson = contentType.includes("application/json")
  const data = isJson ? await response.json() : await response.text()

  if (!response.ok) {
    if (isJson && data.errors !== null) {
      throw new Error(JSON.stringify(data.errors))
    }

    throw new Error(data.message || response.statusText)
  }

  return data
}

export async function apiRegisterUser(credentials) {
  const response = await fetch(`${SERVER_ENDPOINT}/api/auth/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: credentials
  })

  return handleResponse(response).then(data => data.data.user)
}

export async function apiLoginUser(credentials) {
  const response = await fetch(`${SERVER_ENDPOINT}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: credentials
  })

  return handleResponse(response).then(data => data.token)
}

export async function apiLogoutUser() {
  const response = await fetch(`${SERVER_ENDPOINT}/api/auth/logout`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  })

  return handleResponse(response)
}

export async function apiGetAuthUser(token) {
  const headers = {
    "Content-Type": "application/json"
  }

  if (token) {
    headers["Authorization"] = `Bearer ${token}`
  }
  const response = await fetch(`${SERVER_ENDPOINT}/api/users/me`, {
    method: "GET",
    credentials: "include",
    headers
  })

  return handleResponse(response).then(data => data.data.user)
}
