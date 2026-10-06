"use server"

import { redirect } from "next/dist/client/components/navigation";
import { db } from "../../../src/prisma/db";

export async function createBook(formData: FormData) {
    const title = formData.get("title") as string;
    const author = formData.get("author") as string;
    const description = formData.get("description") as string;
    const status = formData.get("status") as string;

    if (!title || !author || !description || !status) {
        
        return;
    }

    await db.orm.public.Book.create({
        title: title,
        author: author,
        description: description,
        status: status
    });
    redirect("/books")
}

export async function createChapter(formData: FormData) {
    const chapterNumber = formData.get("chapterNumber") as string;
    const title = formData.get("title") as string;
    const review = formData.get("review") as string;
    const bookId = formData.get("bookId") as string;

    await db.orm.public.Chapter.create({
        chapterNumber: parseInt(chapterNumber),
        title: title,
        review: review,
        bookId: parseInt(bookId)
    });
    redirect(`/books/${bookId}`)
}