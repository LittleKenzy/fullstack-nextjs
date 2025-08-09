import Post from "@/models/Post"
import connect from "@/app/utils/db"
import { NextResponse } from "next/server"

export const GET = async () => {
  try {
    await connect()
    const posts = await Post.find()

    return NextResponse.json(posts, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "Database Error" }, { status: 500 })
  }
}
