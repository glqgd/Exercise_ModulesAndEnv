function mapUsers(users) {
  let result = {
    data: users,
    count: users.length,
  };
  return result;
}
export default mapUsers;

export function mapArticles(articles) {
  let result = {
    data: articles,
    count: articles.length,
  };
  return result;
}
