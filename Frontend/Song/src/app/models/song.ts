export class Song {
    id: string;
    title: string;
    artist: string;
    length: number; // length in seconds
    likes: number;

    constructor(id: string, title: string, artist: string, length: number, likes: number) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.length = length;
        this.likes = likes;
    }
}
