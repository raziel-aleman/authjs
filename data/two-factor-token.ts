import { db } from "@/lib/db";

export const getTwoFactortTokenByToken = async (token: string) => {
    try {
        const twoFactorToken = await db.twoFactorToken.findUnique({
            where: { token },
        });

        return twoFactorToken;
    } catch {
        return null;
    }
};


export const getTwoFactortTokenByEmail = async (email: string) => {
    try {
        const twoFactorToken = await db.twoFactorToken.findFirst({
            where: { email },
        });

        return twoFactorToken;
    } catch {
        return null;
    }
};