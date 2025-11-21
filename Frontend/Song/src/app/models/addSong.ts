export class addSong {
    title: string;
    artist: string;
    length: number; // length in seconds
    likes: number;

    constructor(title: string, artist: string, length: number, likes: number) {
        this.title = title;
        this.artist = artist;
        this.length = length;
        this.likes = likes;
    }
}