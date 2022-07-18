export const config = () => ({
  database: {
    username: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASS,
  }
})