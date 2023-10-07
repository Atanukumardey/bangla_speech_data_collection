import { db } from "@/database/models";

export default async function handler(req, res) {
  try {
    const emotion_name = "Anger";
    const newEmotion = await db.Emotions.create({
        emotion_name:emotion_name
    });
    res.status(200).json({ newEmotion });
  } catch (e) {
    res.status(400).json({
      error_code: 'cr_emo',
      message: e.message,
    });
  }
}
