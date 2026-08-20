import { cp, mkdir, rm, copyFile } from "node:fs/promises";

// guide.corp-bromo.com は今後ほかのガイドも載せる想定なので、
// このガイドはサブディレクトリに置く。
// 公開URL: https://guide.corp-bromo.com/google-account-name/
const OUT = "dist/google-account-name";

await rm("dist", { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

// 配信時だけ index.html にリネームする。
// リポジトリ側のファイル名は変えないので、後輩ちゃんの作業と衝突しない。
await copyFile("google-name-change-guide.html", `${OUT}/index.html`);
// .DS_Store などの隠しファイルは配信物に含めない
const notHidden = (src) => !/[\\/]\.[^\\/]+$/.test(src);

await cp("css", `${OUT}/css`, { recursive: true, filter: notHidden });
await cp("images", `${OUT}/images`, { recursive: true, filter: notHidden });

console.log(`built -> ${OUT}/`);
