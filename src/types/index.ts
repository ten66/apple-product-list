export type ProductType = "Mac" | "iPhone" | "iPad" | "Watch";

export type ProductInfo = {
  type: ProductType,
  name: String,
  price: String,
  // ProductCard.tsxのCardMediaのimageプロパティで、
  // imgUrlの型指定を String に設定していたらエラー発生
  // stringに変更することでエラー回避 -> なぜか？
  imgUrl: string,
}
