import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri);

export async function POST(request: Request) {
    try {
        console.log('Connecting to database...');
        await client.connect();
        console.log('Connected to database.');

        const body = await request.json();
        const { email, name, password } = body;

        const database = client.db('test'); // Uppdatera med ditt nya databasnamn
        const collection = database.collection('User'); // Uppdatera med ditt nya collectionsnamn

        console.log('Inserting data into database...');
        const result = await collection.insertOne({ email, name, password });
        console.log('Data inserted into database:', result);

        return NextResponse.json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        return NextResponse.error();
    } finally {
        await client.close();
        console.log('Database connection closed.');
    }
}