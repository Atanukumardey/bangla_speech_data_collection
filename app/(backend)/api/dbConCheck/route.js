import { NextResponse } from 'next/server'
import { db } from '@/database/models';

export async function GET(request) {
    try { 
        const emotion_name = "Anger";
        const newEmotion = await db.Emotions.create({
            emotion_name: emotion_name
        });
        return NextResponse.json({ newEmotion }, { status: 200 });
    } catch (e) {
        return NextResponse.json({ error_code: 'cr_emo', message: e.message, }, { status: 200 });
    }
}