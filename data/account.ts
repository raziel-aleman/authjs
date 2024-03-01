import { db } from "@/lib/db";

export const getAccountbyUserId = async (userId: string) => {
    try {
        const account = await db.account.findFirst({
            where: { userId },
        });

        return account;
    } catch {
        return null;
    }
};
