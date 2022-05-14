export type Email = {
    id: string;
    to: string;
    subject: string;
    message: string;
    timeStamp: {
        seconds: number;
    };
};

export type SelectedEmail = {
    title: string;
    subject: string;
    description: string;
    date: string;
};
