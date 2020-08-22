// Para criar: Name, email and password

interface CreateUserData {
  name?: String
  email: string
  password: string
}

export default function createUser({ name = '', email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  }

  return user
}