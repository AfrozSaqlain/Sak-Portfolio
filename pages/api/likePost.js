// import { createClient } from "next-sanity";

// const client = createClient({
//   projectId: 'wvm2brko',
//   dataset: 'production',
//   token: 'ske9igCdMhXw7Goba5p7mptAlOCwTilYOFRZ4D75YWCsnFZp2xL5GvXr8rVEdwu2oWDnnCApuD6xKi7ecNBkKJBHMzRsKMxWJFHWshizNgbeqopLhdQoVbLO7wvuFLktST1Q1Diw1aBRv5y85apsk7yJOjH0iWrhHevUJq00yNWZNrN4rEyy',
//   useCdn: false,
//   apiVersion: '2021-08-31',
// });

// export default async function likePost(req, res) {
//   const { _id } = JSON.parse(req.body);

//   try {
//     const transaction = client.transaction();
//     // Specify the document ID to update
//     const documentId = _id;
//     transaction.patch(documentId, (patch) =>
//       patch.inc({ likes: 1 })
//     );

//     const response = await transaction.commit();
//     res.status(200).json({ success: true, response });
//   } catch (error) {
//     console.error("Error in likePost API:", error);
//     res.status(500).json({ success: false, error: error.message });
//   }
// }
