export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // ルートは暫定で唯一のガイドへ飛ばす。
    // 将来ここにガイド一覧を置いて差し替える前提なので、
    // ブラウザにキャッシュされる恒久リダイレクト(301)ではなく302にしている。
    if (url.pathname === "/") {
      return Response.redirect(new URL("/google-account-name/", url), 302);
    }

    return env.ASSETS.fetch(request);
  },
};
