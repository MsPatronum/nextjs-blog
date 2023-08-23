export async function getSortedPostsData() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch('..');
    return res.json();
  }

  export async function getAllPostIds() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch('..');
    const posts = await res.json();
    return posts.map((post) => {
      return {
        params: {
          id: post.id,
        },
      };
    });
  }