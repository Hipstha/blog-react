export interface Post {
    id: number;
    title: string;
    summary: string;
    img: string;
    category: string;
    comments: [{
        user: string,
        comment: string
    }];
}
