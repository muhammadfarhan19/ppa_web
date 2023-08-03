// CASE 2
const comments = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 111,
            commentContent: "Haai juga hai jugaa",
          },
          {
            commentId: 112,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
      {
        commentId: 12,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 121,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: "Halooo",
  },
];

// 5. jumlah komentar
// const commentTotal = comments.reduce((acc, curr) => {
//   if (curr.commentContent) acc++;
//   if (curr.replies) {
//     acc += curr.commentContent ? 1 : 0;
//     acc += curr.replies.reduce((accReply, currReply) => {
//       // return currReply.commentContent ? accReply++ : accReply;
//     }, 0);
//   }
//   return acc;
// }, 0);
// console.log(commentTotal);

// 5. jumlah komentar make rekursif
const commentTotal = (comments) => {
  return comments.reduce((acc, curr) => {
    if (curr.commentContent) acc++;
    if (curr.replies) acc += commentTotal(curr.replies);
    return acc;
  }, 0);
};
console.log('Total komentar : ', commentTotal(comments));
