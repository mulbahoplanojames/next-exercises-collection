import { comments } from "@/data/comments";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return Response.json(comments.find((comment) => comment.id === Number(id)));
}

// PATCH Request for updating a comment
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const commentData = await request.json();

  // Find the index of the comment to be updated in the comments array
  const commentIndex = comments.findIndex(
    (comment) => comment.id === Number(id)
  );

  // Update the found comment with the new data
  comments[commentIndex] = {
    ...comments[commentIndex],
    ...commentData,
  };

  // Return a JSON response with the updated comment
  return Response.json(comments[commentIndex]);
}

// DELETE Request for deleting a comment
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // Find the index of the comment with the given id
  const { id } = await params;
  const commentIndex = comments.findIndex(
    (comment) => comment.id === Number(id)
  );

  // If the comment was found, delete it
  if (commentIndex > -1) {
    comments.splice(commentIndex, 1);
  }

  // Return the updated list of comments
  return Response.json(comments);
}

// export const dynamic = "force-dynamic";
// export const dynamicParams = true;
