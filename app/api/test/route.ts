import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri);

export async function GET() {
    try {
        console.log('Connecting to database...');
        await client.connect();
        console.log('Connected to database.');

        const database = client.db('test'); // Uppdatera med ditt nya databasnamn
        const collection = database.collection('hej'); // Uppdatera med ditt nya collectionsnamn

        console.log('Fetching data from database...');
        const data = await collection.find({}).toArray();
        console.log('Data fetched from database:', data);

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching data from database:', error);
        return NextResponse.error();
    } finally {
        await client.close();
        console.log('Database connection closed.');
    }
}