// Para criar: Name, email and password

interface TechObject { // Sempre é usada para definir qual o format de um Objeto
  title: string
  experience: number
} 

interface CreateUserData {
  name?: String
  email: string
  password: string
  techs: Array<string | TechObject>
  adress: string[]
}

export default function createUser({ name = '', email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  }

  return user
}