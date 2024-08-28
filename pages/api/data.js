
import { connectToDatabase } from '../../lib/db';

export async function getData() {

    const connection = await connectToDatabase();

    const [rows] = await connection.query('SELECT * FROM services_mails');

    connection.end();

    return rows;

}

export default async function handler(req, res) {

    const jsonData = await getData();

    res.status(200).json(jsonData);

}