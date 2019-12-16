export class Bill {
    id: Number;
    title: String;
    description: String;
    author_id: Number;
    paid: Boolean;
    payer_id: Number;
    amount: Number;
    created_at: Date;
    updated_at: Date;

    constructor(title: String, description: String) {
        this.title = title;
        this.description = description;
        this.paid = true;
        this.amount = 0.0;
        this.created_at = new Date();
    }
}
