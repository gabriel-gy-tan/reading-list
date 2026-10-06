import { createChapter } from "../../../new/actions";

export default async function BookPage({ params }: {
    params: Promise<{id: string}>
}) {
    const {id} = await params;
    const bookId = Number(id);
    return (
        <form action={createChapter} className="p-4 max-w-md mx-auto form flex flex-col gap-4">
            <input placeholder="Chapter Number" name="chapterNumber"/>
            <input placeholder="Title" name="title"/>
            <textarea placeholder="Review" name="review"/>
            <input type="hidden" name="bookId" value={bookId} />

            <button type="submit">
                Create Chapter
            </button>
        </form>
    
            
    );
}