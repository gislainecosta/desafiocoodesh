import * as jwt from "jsonwebtoken";

interface AuthenticationData {
  id: string;
}
export default class Authenticator {
  public generateToken = (input: AuthenticationData, expiresIn: string): string => {
    const token = jwt.sign(
      { id: input.id },
      'coodesh',
      { expiresIn }
    );
    return token;
  };

  public getData = (token: string): AuthenticationData => {
    const payload = jwt.verify(token, 'coodesh') as any;
    const result = {
      id: payload.id
      };
      
    return result;
  }
}