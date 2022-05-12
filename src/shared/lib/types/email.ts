export type Email = {
    id: string;
    to: string;
    subject: string;
    message: string;
    timeStamp: {
        seconds: number;
    };
};
