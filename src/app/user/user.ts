export interface User{
        id: number;
        username: string;
        email: string;
        password: string;
        role: Role;
      
      
      
}
enum Role {
        ROLE_USER = 'USER',
        ROLE_ADMIN = 'ADMIN',
        ROLE_AGENT = 'AGENT'
      }