interface UserReq {
  name: string;
  email: string;
  address: string;
  phone: string;
  password: string;
}

interface UserLogin {
  email: string;
  password: string;
}


export { UserReq, UserLogin };