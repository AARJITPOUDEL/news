export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    if (username === "admin" && password === "password") {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ error: "Invalid username or password" });
    }
  } else {
    res.status(405).end();
  }
}
