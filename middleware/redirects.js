export default function ({ redirect, route, $auth }) {

  if (route.fullPath.startsWith('/newsdetail')) {
    const params = route.query;
    const { id } = params;

    const newUrl = `/news-detail/${id}`;

    redirect(301, newUrl);
  }
}