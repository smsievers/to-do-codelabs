export class List {
    id: number;
    title: string;
    board_id: number;

    constructor(value: any) {
        this.title = value.title;
        this.board_id = value.board_id;
    }
}