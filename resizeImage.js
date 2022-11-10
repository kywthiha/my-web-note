/* 
 クラス名 : imageUtils.js
 概要 : ファイルリサイズ処理
 作成者 : GICM
 作成日 : 2022/10/27　 
*/

// ブラザーで開けるイメージをリサイズする処理
export function resizeImage(file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = URL.createObjectURL(file);
    image.onerror = function () {
      reject("Image Load Fail");
    };
    image.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0, image.width, image.height);
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject("Fail convert blob");
          }
        },
        file.type,
        0.7 // イメージQuality(0-1)を設定できる
      );
    };
  });
}
