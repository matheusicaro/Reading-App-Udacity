import lodash from 'lodash'

export const updatePostsInState = (posts, newPost) => {
  let newPosts = lodash.values(posts)
  let indexLocale
  newPosts = newPosts.filter((post, index) => {
    if (post.id === newPost.id) indexLocale = index
    return post.id !== newPost.id
  })
  newPosts.splice(indexLocale, 0, newPost)
  return { ...newPosts }
}

export const deletePostInState = (posts, id) => {
  const newPosts = lodash.valuesIn(posts).filter(post => post.id !== id)
  return { ...newPosts }
}
