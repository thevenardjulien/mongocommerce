export async function fetchRegister(name, email, password) {

    const body = JSON.stringify({ name, email, password });

    const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body,
    });

    const data = await response.json();

    if(response.ok && response.status === 200) {
        return data;
    } else {
        return response;
    }
}

export async function fetchLogin(email, password) {
    const body = JSON.stringify({ email, password });
  
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body,
    });
  
    const data = await response.json();
  
    if (response.ok && response.status === 200) {
      return data;
    } else {
      return {
        message: data.message || "Erreur inconnue",
        token: undefined,
      };
    }
  }
  