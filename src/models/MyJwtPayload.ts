export interface MyJwtPayload {
        idTaiKhoan: number;
        isAdmin: boolean;
        isStaff: boolean;
        isUser: boolean;
        sub: string;
        exp: number;
        iat: number;
}