const posts = [
  {
    Title:
      'Confira a lista de jogos Cross-play entre Xbox, PlayStation, Nintendo Switch e PC',
    published_at: '2021-08-12T22:53:10.816Z',
  },
  {
    Title: 'Stardew Valley entrará no Xbox Game Pass',
    published_at: '2021-08-12T23:58:22.907Z',
  },
  {
    Title:
      'Preços de placas Nvidia RTX 3000 está caindo mais que das AMD RX 6000',
    published_at: '2021-08-13T00:05:08.726Z',
  },
]
console.log(
  posts.map((post) => ({
    Title: post.Title,
    date: new Date(post.published_at).toLocaleString(),
  }))
)
