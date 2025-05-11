import { NextResponse } from "next/server"
import connectDB from "@/app/utils/database"
import { ItemModel } from "@/app/utils/schemaModels"


export async function GET(){
  try{
  await connectDB()
  const allitems = await ItemModel.find()
  return NextResponse.json({message: "アイテム読み取り成功（オール）",
    allitems: allitems})
} catch {
  console.error("🔥 DB接続エラー:", err);
  return NextResponse.json({ message:"アイテム読み取り失敗（オール）"})
}
}

export const revalidate = 0

